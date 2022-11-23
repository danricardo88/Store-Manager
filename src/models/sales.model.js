const camelize = require('camelize');
const connection = require('./connection');

const insertSale = async () => {
  const [{ insertId }] = await connection.execute(
    'INSERT INTO Store.Manager.sales (date) VALUES (NOW())',
  );
  return insertId;
};

const insertSaleProd = async ({ saleId, productId, quantity }) => {
  await connection.execute(
    `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
      VALUES (?, ?, ?)`,
    [saleId, productId, quantity],
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
  // `SELECT s.date AS date, sp.product_id AS productId, sp.quantity AS quantity
  // FROM StoreManager.sales AS s
  // JOIN StoreManager.sales_products AS sp
  // ON s.id = sp.sale_id
  // WHERE s.id = ?
  // ORDER BY sale_id ASC, product_id ASC;`,
  [id],
  );
  return camelize(results);
};

module.exports = {
  insertSale,
  insertSaleProd,
  allSales,
  salesID,
};
