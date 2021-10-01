const { Router } = require('express');
const router = Router();

const service = require('../services/politicosService')
const ErrorResponse = require('../services/ErrorResponse')

router.get('/', (req, res) => {
    const limite = req.query.limite || 5;
    const politicos = [];

    for (let i = 0; i < limite; i++) {
        politicos.push(service.generatePolitico());
    }

    res.send(politicos);
});

router.get('/random', (req, res) => {
    res.send(service.generatePolitico());
});

router.post('/:propriedade', (req, res) => {
    const propriedade = req.params.propriedade;
    const valor = req.query.valor;

    try {
        service.addProperty(propriedade, valor);
        res.sendStatus(200);
    } catch (err) {
        res.status(err.status).send(new ErrorResponse(err.status, err.message));
    }
})

module.exports = router;