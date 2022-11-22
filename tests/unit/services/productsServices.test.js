const { expect } = require('chai');
const sinon = require('sinon');
const productsService = require('../../../src/services/products.services');
const productsModel = require('../../../src/models/products.model');

const { productsList, idProducts } = require("./mocks/productsServices.mock");

describe("Verifica service de Products", () => {
  afterEach(sinon.restore);

  describe("Testa se recebe todos /products", async function () {
    sinon.stub(productsModel, 'getAll').resolves(productsList);
    const results = await productsService.getAll();
    expect(results.message).to.be.been.equal(productsList);
  });

  describe("Testa se recupera um produto /products/:id", async function () {
    sinon.stub(productsModel, "getProductsID").resolves(idProducts);
    const results = await productsService.getProductsID(1);
    expect(results).to.be.deep.equal(idProducts);
  });

});
