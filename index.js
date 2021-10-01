const express = require('express');
const politicosRoutes = require('./routes/politicos');

const app = express();

app.use('/api/politicos', politicosRoutes);

app.listen(8080, () => console.log('Listening...'));