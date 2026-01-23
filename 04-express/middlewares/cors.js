import cors from "cors";

const ACCEPTED_ORIGINS = [
  "http://localhost:3000",
  "http://permon",
  "http://localhost:5173",
];

export const corsMiddleware = ({ acceptedOrigins = ACCEPTED_ORIGINS } = {}) => {
  //Podriamos ver cookies de validacion, sesiones, etc, ahora solo controlamos el origen, aqui devolvemos la cabecera Access-Control-Allow-Origin
  return cors({
    origin: (origin, callback) => {
      if (!origin || acceptedOrigins.includes(origin)) {
        return callback(null, true);
      }
      return callback(new Error("Origin not allowed by CORS"));
    },
  });
};
