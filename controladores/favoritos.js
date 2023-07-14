const { getTodosFavoritos, insereFavorito, deletaFavoritoPorId } = require("../servicos/favorito")

function getFavoritos(req, res) {
    try {
        const favoritos = getTodosFavoritos()
        res.send(favoritos)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function postFavorito(req, res) {
    try {
        const id = req.params.id
        insereFavorito(lid)
        res.status(201)
        res.send('Livro adicionado no favorito')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

function deleteFavorito(req, res) {
    try {
        const id = req.params.id

        if(id && Number(id)) {
            deletaFavoritoPorIdPorId(id)
            res.send('Livro deletado com sucesso')
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

module.exports = {
    getFavoritos,
    postFavorito,
    deleteFavorito
}