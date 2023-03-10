const express = require('express');
const { productsRouter } = require('./routers');
const { salesRouter } = require('./routers');

const app = express();
app.use(express.json());

// não remova esse endpoint, é para o avaliador funcionar
app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter); // <-----  O PROBLEMA TA AQUI, PURA FALTA DE ATENÇÃO
module.exports = app;
