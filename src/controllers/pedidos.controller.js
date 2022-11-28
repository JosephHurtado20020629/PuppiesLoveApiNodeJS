import { pool } from "../db.js";

export const getPedido = async (req, res) => {
  try {

    if(!req.params.id){
    return  res.status(400).json({ message: "Id de pedido no encontrado" });
    }
    
    var pedido;
    var [rows] = await pool.query(
      "Select * from  pedidos where idPedido  = ?",
      [req.params.id]
    );

    pedido = rows[0];

    var [rows] = await pool.query(
      "Select  nomProducto, cantidad, pUnitario, total   from DETALLE_PEDIDOS dp inner join productos p on p.idProducto=dp.idProducto where idPedido  = ?",
      [req.params.id]
    );

    if (pedido) {
      pedido.detalle = rows;
      res.json(pedido);
      console.log(pedido);
    } else {
      res.status(404).json({ message: "Pedido no encontrado" });
    }
  } catch (err) {
    return res.status(500).json({
      message: "Something goes wrong" + err,
    });
  }
};
