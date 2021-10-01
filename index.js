const express = require('express');
const politicosRoutes = require('./routes/politicos');

const app = express();

app.use('/api/politicos', politicosRoutes);

app.listen(process.env.PORT || 8080, () => console.log('Listening...'));