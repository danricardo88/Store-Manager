const camelize = require('camelize');
const connection = require('./connection');

const getAll = async () => {
  const [result] = await connection.execute(
    'SELECT * FROM products',
  );
  return camelize(result);
};

const getProductsID = async (id) => {
  console.log(id);
  const [[result]] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?',
    [id],
  );
  return camelize(result);
};

const insertProduct = async (prod) => {
  console.log(prod);
  const [{ insertId }] = await connection.execute(
    'INSERT INTO StoreManager.products (name) VALUES (?)',
    [prod],
  );
  console.log(insertId);
  return insertId;
};

module.exports = {
  getAll,
  getProductsID,
  insertProduct,
};
