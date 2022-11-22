const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const { productsList, idProducts } = require('./mocks/productsModel.mocks');

describe('testa a Model de Prod', () => {
  describe('testa se recebe todos /products', async function () {
    sinon.stub(connection, 'execute').resolves([productsList]);
    const results = await productsModel.getAll();
    expect(results).to.be.deep.equal(productsList);
  });

  describe('testa se recupera um produto /products/:id', async function () {
    sinon.stub(connection, 'execute').resolves([[idProducts]]);
    const results = await productsModel.getProductsID(1);
    expect(results).to.be.deep.equal(idProducts);
  });

  describe('testa se insere um produto /producst', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const prod = "Produto 1";
    const results = await productsModel.insertProduct(prod);
    expect(results).to.be.deep.equal(1);
  });

  // describe('testa se atualiza products/:id', async function () {
  //   sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
  //   const prod = 'Spiderman';
  //   const results = await productsModel.....
  // })
});

