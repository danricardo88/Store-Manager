const { expect } = require('chai');
const sinon = require('sinon');
const productsServices = require('../../../src/services/products.services');
const productsModel = require('../../../src/models/products.model');

const { productsList, idProducts, productInsert } = require("./mocks/productsServices.mock");

describe("Verifica service de Products", () => {
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
    const result = await productsServices.insertProduct('boletos');
    expect(result.type).to.be.deep.equal(null);
  });

  it('deleta um produto em products/id', async function () {
    sinon.stub(productsModel, "delet").resolves(1);
    const result = await productsServices.delet(1);
    expect(result.type).to.be.deep.equal(null);
  });

  it("atualiza um produto em products/id", async function () {
    sinon.stub(productsModel, "upProducts").resolves(1);
    const result = await productsServices.upProducts(1, "Quero FÉRIAS");
    expect(result.type).to.be.deep.equal(null);
    expect(result.message).to.be.deep.equal(productInsert);
  });

});
