//testLogicos
const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

//logicas
const productsServices = require('../../../src/services/products.services');
const productsController = require('../../../src/controllers/products.controller');

//mocks
const { productsList, idProducts, productInsert } = require('./mocks/productController.mock');

//testeRapidinh
const OK = 200;
const SUCCESS = 201;
const NO_CONTENT = 204;
const ERRO = 404;
const OUTROERRO = 422;
//test
describe('Testa o Controller', () => {
  afterEach(sinon.restore);
  it('retorna a mensagem de sucesso', async function () {
    const request = {};
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getAll').resolves({ type: null, message: productsList })
    await productsController.getAll(request, response);

    expect(response.status).to.have.been.calledWith(OK);
    expect(response.json).to.have.been.calledWith(productsList);
  });

  it('recupera um produto em product/id', async function () {
    const request = { params: { id: 1 } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getProductsID').resolves(idProducts);
    await productsController.getProductsID(request, response);

    expect(response.status).to.have.been.calledWith(OK);
    expect(response.json).to.have.been.calledWith(idProducts);
  });

  // it('retorna uma mensagem de falha', async function () {
  //   const response = {};
  //   const request = { params: { id: 999 } };

  //   response.status = sinon.stub().returns(response);
  //   response.json = sinon.stub().returns([]);
  //   sinon.stub(productsServices, 'getProductsID').resolves({ type: 'error', message: 'Product not found' });
  //   await productsController.getProductsID(request, response);

  //   expect(response.status).to.have.been.calledWith(ERRO);
  //   expect(response.json).to.have.been.calledWith({ message: 'Product not found' });
  // });

  it('insere em /products', async function () {
    const request = { body: { name: 'daniel' } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsServices, 'insertProduct').resolves({ type: null, message: productInsert });
    await productsController.insertProduct(request, response);

    expect(response.status).to.have.been.calledWith(SUCCESS);
    expect(response.json).to.have.been.calledWith(productInsert);
  });

  // it('retorna uma mansagem de sucesso', async function () {
  //   const response = {};
  //   const request = { params: { productId: 1 } };

  //   response.status = sinon.stub().returns(response);
  //   response.json = sinon.stub().returns();
  //   sinon.stub(productsServices, 'getProductsID').resolves({ type: null, message: idProducts });
  //   await productsController.getProductsID(request, response);

  //   expect(response.status).to.have.been.calledWith(OK);
  //   expect(response.json).to.have.been.calledWith(idProducts);
  // });

  // it('deleta um produto em products/id', async function () {
  //   const request = { params: { id: 1 } };
  //   const response = {};

  //   response.status = sinon.stub().returns(response);
  //   response.json = sinon.stub().returns();
  //   sinon.stub(productsServices, 'delet').resolves({ type: null, message: null });
  //   await productsController.delet(request, response);

  //   expect(response.status).to.have.been.calledWith(NO_CONTENT);
  // });

  // it('Teste de retorno com falha', async function () {
  //   const request = { params: { productID: 900 } };
  //   const response = {};

  //   response.status = sinon.stub().returns(response);
  //   response.json = sinon.stub().returns();
  //   sinon.stub(productsServices, 'delet').resolves({ type: 'PRODUCT_NOT_FOUND', message: 'Product not found' })
  //   await productsController.delet(request, response);

  //   expect(response.status).to.have.been.calledWith(ERRO);
  //   expect(response.json).to.have.been.calledWith({ message: 'Product not found' });
  // });

  it('atualiza um produto em products/id', async function () {
    const request = { params: { id: 1 }, body: { name: 'teste' } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsServices, 'upProducts').resolves({ type: null, message: productInsert });
    await productsController.upProducts(request, response);

    expect(response.status).to.have.been.calledWith(OK);
    expect(response.json).to.have.been.calledWith(productInsert);
  });

  it('retorna com sucesso', async function () {
    const request = { body: { name: 'Ta sofrido' } };
    const response = {};

    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns({ id: 34, name: 'Ta sofrido' });
    sinon.stub(productsServices, 'insertProduct').resolves({ type: null, message: { id: 34, name: 'To sofrendo' } });
    await productsController.insertProduct(request, response);

    expect(response.status).to.have.been.calledWith(SUCCESS);
    expect(response.json).to.have.been.calledWith({ id: 34, name: 'To sofrendo' });
  });

});

