const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../src/services/products.services');
const productsModel = require('../../../src/models/products.model');

const { productsList, idProducts, productInsert, test } = require("./mocks/productsServices.mock");

describe("Verifica service", () => {
  afterEach(sinon.restore);
  it("recebe todos /products", async function () {
    sinon.stub(productsModel, 'getAll').resolves(productsList);
    const results = await productsServices.getAll();
    expect(results.message).to.be.been.equal(productsList);
  });

  it("recupera um produto em products/id", async function () {
    sinon.stub(productsModel, "getProductsID").resolves(idProducts);
    const results = await productsServices.getProductsID(1);
    expect(results).to.be.deep.equal(idProducts);
  });

  it('insere um produto em /products', async function () {
    sinon.stub(productsModel, "insertProduct").resolves(1);
    const results = await productsServices.insertProduct('boletos');
    expect(results.type).to.be.deep.equal(null);
  });

  it('deleta um produto em products/id', async function () {
    sinon.stub(productsModel, "delet").resolves(1);
    const results = await productsServices.delet(1);
    expect(results.type).to.be.deep.equal(null);
  });

  // it("atualiza um produto em products/id", async function () {
  //   sinon.stub(productsModel, "upProducts").resolves(1);
  //   const results = await productsServices.upProducts(1, "test de UP");
  //   expect(results.type).to.be.deep.equal(null);
  //   expect(results.message).to.be.deep.equal(test);
  // });

});
