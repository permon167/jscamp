import { useParams } from "react-router";
import { useState, useEffect, use } from "react";

export function JobDetail() {
  const { jobId } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(`https://jscamp-api.vercel.app/api/jobs/${jobId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Job not found");
        return response.json();
      })
      .then((json) => {
        setJob(json);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [jobId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error || !job) {
    return <p>Error: {error}</p>;
  }

  return (
    <>
      <h1>Job Detail</h1>
      <h2>Job ID: {id}</h2>
    </>
  );
}
