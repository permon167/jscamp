import { createServer } from "node:http";
import { json } from "node:stream/consumers";
import { randomUUID } from "node:crypto";
import path from "node:path";

process.loadEnvFile(); // Carga variables de entorno desde un archivo .env si existe

//environment variable PORT o 3000
const port = process.env.port ?? 3000;

// Método para enviar respuestas JSON
function sendJsonResponse(res, statusCode, data) {
  res.statusCode = statusCode;
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  return res.end(JSON.stringify(data));
}

const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];

//funcion debe ser asincrona para usar el await del post crear usuarios
const server = createServer(async (req, res) => {
  const { method, url } = req;

  const [pathName, queryString] = url.split("?");

  const searchParams = new URLSearchParams(queryString);

  if (method === "GET") {
    if (pathName === "/users") {
      const limit = Number(searchParams.get("limit")) || users.length;
      const offset = Number(searchParams.get("offset")) || 0;
      const paginatedUsers = users.slice(offset, offset + limit);
      //cabecera de json con application/json y utf-8
      return sendJsonResponse(res, 200, paginatedUsers);
    }

    // Endpoint para verificar el estado del servidor
    if (pathName === "/health") {
      return sendJsonResponse(res, 200, {
        status: "OK",
        uptime: process.uptime(),
      });
    }
  }

  if (method === "POST") {
    if (pathName === "/users") {
      //await es asincrono
      const body = await json(req);
      if (!body || !body.name) {
        return sendJsonResponse(res, 400, { message: "Name is required" });
      }
      const newUser = { name: body.name, id: randomUUID() };
      users.push(newUser);

      return sendJsonResponse(res, 201, {
        message: "User created successfully",
      });
    }
  }

  return sendJsonResponse(res, 404, { message: "Not Found" });
});

server.listen(port, () => {
  //adress nos obtiene el primer puerto disponible
  const address = server.address();
  console.log(`Server is running at http://localhost:${address.port}/`);
});
