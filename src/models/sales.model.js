const camelize = require('camelize');
const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW())',
  );
  return insertId;
};

const insertSaleProd = async (idSale, { productId, quantity }) => {
  await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
    [idSale, productId, quantity],
  );
};

const allSales = async () => {
  const [results] = await connection.execute(
    `SELECT s.id AS sale_id, s.date, sp.product_id, sp.quantity FROM sales s
    INNER JOIN sales_products sp
    ON s.id = sp.sale_id`,
  );
  return camelize(results);
};

const salesID = async (id) => {
  const [results] = await connection.execute(
 `SELECT s.date, sp.product_id, sp.quantity FROM sales s
  INNER JOIN sales_products sp
  ON s.id = sp.sale_id
  WHERE s.id = ?`,
  [id],
  );
  return camelize(results);
};

const upProducts = async (id, data) => {
  const { productId, quantity } = data;
  const [{ affectedRows }] = await connection.execute(
    'UPDATE sales_products SET quantity = ? WHERE sale_id = ? AND product_id = ?',
    [quantity, id, productId],
  );
  return affectedRows;
};

const delet = async (id) => {
  const [{ affectedRows }] = await connection.execute(
    'DELETE FROM sales WHERE id = ?',
    [id],
  );
  return affectedRows;
};

module.exports = {
  insertSale,
  insertSaleProd,
  allSales,
  salesID,
  upProducts,
  delet,
};
