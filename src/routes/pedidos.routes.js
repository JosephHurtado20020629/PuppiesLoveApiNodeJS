import { Router } from "express";
import {
  getPedido
} from "../controllers/pedidos.controller.js";

const router = Router();

router.get("/pedidos/:id", getPedido);


export default router;
