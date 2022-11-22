import { pool } from "../db.js";

export const getPedido = async (req, res) => {
  try {
    var pedido;
    var [rows] = await pool.query(
      "Select * from  pedidos where idPedido  = ?",
      [req.params.id]
    );

    pedido = rows[0];

    var [rows] = await pool.query(
      "Select *  from DETALLE_PEDIDOS where idPedido  = ?",
      [req.params.id]
    );

    pedido.detalle = rows[0];

    console.log(pedido);
    if (pedido) {
      res.json(pedido);
    } else {
      res.status(404).json({ message: "Pedido no encontrado" });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something goes wrong" + err,
    });
  }
};
