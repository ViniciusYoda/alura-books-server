const { Router } = require("express")
const { getFavoritos, postFavorito, deleteFavorito } = require("../controladores/favoritos")

const router = Router()

router
    .get('/', getFavoritos)
    .post('/', postFavorito)
    .delete('/:id', deleteFavorito)

module.exports = router