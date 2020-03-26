const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

// em produção
// app.use(cors({    origin: 'http://meuapp.com' }));

// em desenolvimento
app.use(cors());

app.use(express.json());
app.use(routes);

  /**
   * Tipos de parâmetros
   * 
   * Query Params: Parâmetros nomeados enviados na rota apóa "?" (Filtros, paginação)
   * Route Params: Parâmetros utilizados para identificar recursos
   * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
   */

app.listen(3333);
