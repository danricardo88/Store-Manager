const { expect } = require('chai');
const sinon = require('sinon');

const connection = require('../../../src/models/connection');
const productsModel = require('../../../src/models/products.model');
const { productsList, idProducts, productInsert } = require('./mocks/productsModel.mocks');

describe('testa a Model de Prod', () => {
  afterEach(sinon.restore);
  it('recebe todos /products', async function () {
    sinon.stub(connection, 'execute').resolves([productsList]);
    const results = await productsModel.getAll();
    expect(results).to.be.deep.equal(productsList);
  });

  it('recupera um produto em products/id', async function () {
    sinon.stub(connection, 'execute').resolves([[idProducts]]);
    const results = await productsModel.getProductsID(1);
    expect(results).to.be.deep.equal(idProducts);
  });

  it('insere um produto /producst', async function () {
    sinon.stub(connection, 'execute').resolves([{ insertId: 1 }]);
    const prod = "Produto 1";
    const results = await productsModel.insertProduct(prod);
    expect(results).to.be.deep.equal(1);
  });

  it('atualiza products/id', async function () {
    sinon.stub(connection, 'execute').resolves([{ affectedRows: 1 }]);
    const prod = 'PMERJ';
    const results = await productsModel.upProducts(1, prod);
    expect(results).to.be.deep.equal(1);
  });

  it('deleta um produto em products/id', async function () {
    sinon.stub(connection, "execute").resolves([{ affectedRows: 1 }]);
    const results = await productsModel.delet('PMERJ');
    expect(results).to.be.deep.equal(1);
  });
});

