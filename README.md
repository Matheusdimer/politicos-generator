# politicos-generator

Gerador de políticos de âmbito nacional para avaliação de Programação para Web.
Não leve isso a sério.

- URL da API: [https://politicos-generator.herokuapp.com/api/politicos](https://politicos-generator.herokuapp.com/api/politicos)
- Link do [repositório GitHub](https://github.com/Matheusdimer/politicos-generator)

## Rotas
`GET /api/politicos?limite=[number]`

Retorna uma lista de 5 (ou o limite especificado) de políticos gerados aleatóriamente.

`GET /api/politicos/random`

Retorna um político gerado aleatóriamente.

`POST /api/politicos/:propriedade?valor=[string]`

Adiciona mais um valor na respectiva propriedade do político para geração aleatória.

## Exemplo de político

```json
{
  "nome": "Ciro",
  "sobrenome": "Almeida",
  "posicao": "comunista",
  "partido": "REDE",
  "idade": 48,
  "cargo": "deputado federal",
  "mensagem": "Ciro Almeida é um(a) deputado federal de 48 que é filiado ao partido REDE de posição comunista."
}
```
