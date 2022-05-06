
const {Router} = require("express");
const { Genre } =  require('../db')
const { getGenreApi } = require('../services/informatioApiDb')
const router = Router()

router.get('/', async(req, res) => {

    try {
        let getGener = await Genre.findAll();
        getGener = getGener.map((data) => {
            return data;
        });
        res.send(getGener)

    }catch (e) {
        console.error(e)
    }


})

module.exports = router