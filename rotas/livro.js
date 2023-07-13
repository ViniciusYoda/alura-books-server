const { Router } = require("express")
const { getLivros, getLivro, postLivro, patchLivro, deleteLivro } = require('../controladores/livro')

const router = Router()

router
    .get('/', getLivros)
    .get('/:id', getLivro)
    .post('/', postLivro)
    .patch('/:id', patchLivro)
    .delete('/:id', deleteLivro)

module.exports = router