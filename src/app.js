import express from "express";
import employeesRoutes from "./routes/pedidos.routes.js";

const app = express();

console.log("server iniciado");

app.use(express.json());
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Not Found" });
});


export default app;