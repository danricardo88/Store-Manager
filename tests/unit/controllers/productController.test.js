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
const { productsList, idProducts } = require('./mocks/productController.mock');

//test
describe('Testa o Controller sobre os Products', () => {
  describe('testa a getAll', () => {
    it('Testa se retorna a mensagem de sucesso', async function () {
      const request = {};
      const response = {};

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      sinon.stub(productsServices, 'getAll').resolves({ type: null, message: productsList })
      await productsController.getAll(request, response);

      expect(response.status).to.have.been.calledWith(200);
      expect(response.json).to.have.been.calledWith(productsList);
    });
  });
  describe('testa a getProductsId()', async function () {
    const request = { params: { id: 1 } };
    const response = {};
    response.status = sinon.stub().returns(response);
    response.json = sinon.stub().returns();
    sinon.stub(productsServices, 'getProductsID').resolves({ type: null, message: idProducts });
    await productsController.getProductsID(request, response);

    expect(response.status).to.have.been.calledWith(200);
    expect(response.json).to.have.been.calledWith(idProducts);
  });
  // describe('testa se retorna um 404', async function () {
  //   const request = {};
  //   const response = {};
  //   response.status = sinon.stub().returns(response);
  //   response.json = sinon.stub().returns();
  //   sinon.stub(productsServices, 'getAll').resolves({ type: 'error', message: 'not found' })
  //   await productsController.getAll(request, response);

  //   expect(response.status).to.have.been.calledWith(404);
  //   expect(response.json).to.have.been.calledWith({ message: 'not found' });
  // });
  // describe('testa se o retorno do erro é um 404 mesmo', async function () {
  //   const request = { params: { id: 999 } };
  //   const response = {};
  //   response.status = sinon.stub().returns(response);
  //   response.json = sinon.stub().returns();
  //   sinon.stub(productsServices, 'getProductsID').resolves({ type: 'error', message: 'not found' })
  //   await productsController.getAll(request, response);

  //   expect(response.status).to.have.been.calledWith(404);
  //   expect(response.json).to.have.been.calledWith({ message: 'not found' });
  // });

});
