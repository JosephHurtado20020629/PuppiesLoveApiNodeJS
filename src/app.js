import express from "express";
import employeesRoutes from "./routes/pedidos.routes.js";
import swagger from "./swagger.js";

const app = express();

console.log("server iniciado");

app.use(express.json());


app.use("/api", employeesRoutes);


export default app;