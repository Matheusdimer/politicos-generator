const fs = require('fs');
const politicos = require('../resources/politicos.json');
const NotFoundError = require('./NotFoundError');
const ValidationError = require('./NotFoundError copy');

function randomIndex(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function generatePolitico() {
    const politico = {
        nome: randomIndex(politicos.nome),
        sobrenome: randomIndex(politicos.sobrenome),
        posicao: randomIndex(politicos.posicao),
        partido: randomIndex(politicos.partido),
        idade: randomNumberInRange(30, 90),
        cargo: randomIndex(politicos.cargo)
    };

    politico.mensagem = `${politico.nome} ${politico.sobrenome} é um(a) ${politico.cargo} de ${politico.idade} que é filiado ao partido ${politico.partido} de posição ${politico.posicao}.`

    return politico;
}

function addProperty(key, value) {

    if (Object.keys(politicos).includes(key)) {
        if (!value) {
            throw new ValidationError('Valor não informado.');
        }

        const property = politicos[key]
        
        if (property.includes(value)) {
            throw new ValidationError('Valor já existente.');
        }
        
        property.push(value);
        fs.writeFile('./resources/politicos.json', JSON.stringify(politicos),
            { encoding: 'utf8', flag: 'w' }, () => console.log('Arquivo atualizado.'));
    } else {
        throw new NotFoundError('Propriedade não encontrada.');
    }
}

module.exports = {
    randomIndex,
    randomNumberInRange,
    generatePolitico,
    addProperty
}