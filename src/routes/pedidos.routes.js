import { Router } from "express";
import {
  getPedido
} from "../controllers/pedidos.controller.js";

const router = Router();

/**
*@openapi
* /api/pedidos/{id}:
*    get:
*        description: Obtener todos los pedidos
*        responses:
*            '200':
*                description: A successful response
*                content:
*                    application/json:
*                        schema:
*                            type: object
*                            properties: 
*                                idPedido:
*                                    type: integer
*                                    description: Id del pedido
*                                codCliente:
*                                    type: integer
*                                    description: Id del cliente
*                                idSede:
*                                    type: string
*                                    description: Id de la sede
*                                fech_pedido:
*                                    type: string
*                                    description: Fecha del pedido
*                                fech_aprox_entrega:
*                                    type: string
*                                    description: Fecha aproximada de entrega
*                                fech_envio:
*                                    type: string
*                                    description: Fecha de envio
*                                destinatario:
*                                    type: string
*                                    description: Nombre del destinatario
*                                direcDestinatario:
*                                    type: string
*                                    description: Dirección del destinatario
*                                detalle:
*                                    type: array
*                                    description: Detalle del pedido
*                                    items:
*                                        type: object
*                                        properties:
*                                            nomProducto:
*                                                type: string
*                                                description: Nombre del producto
*                                            cantidad:
*                                                type: integer
*                                                description: Cantidad del producto
*                                            pUnitario:
*                                                type: numeric
*                                                description: Precio unitario del producto
*                                            total:
*                                                type: numeric
*                                                description: Total del producto
*            '404':
*                description: Pedido no encontrado
*                content:
*                    application/json:
*                        schema:
*                            type: object
*                            properties:
*                                message:
*                                     type: string
*                                     description: Mensaje de error
*                                 
*        parameters:
*            - in: path
*              name: id
*              schema:
*                  type: integer
*              required: true
*              description: Numeric ID of the shop to get
*        style: simple
*/
router.get("/pedidos/:id", getPedido);


export default router;
