const {Router} = require('express')
const router = Router()
const {getInfoApi, getInfoDb} = require('../services/informatioApiDb')
const { Videogame, Genre} = require('../db')
const axios = require("axios");

router.get('/', async(req, res) => {
    const name = req.query.name
    try {
        const apiInfo = await getInfoApi()
        if (name) {
            const gameFilter = apiInfo.filter(data => data.name.toLowerCase().includes(name.toLowerCase()))
            if (gameFilter.length === 0) {
                res.status(404).send("no se encuentra el juego")
            }else {
                res.status(200).send(gameFilter)
            }
        }else {
            res.status(200).send(apiInfo)
        }
    }catch (e) {
        console.error(e)
    }
})

router.get('/:id', async(req, res) => {

    const id = req.params.id;
    if (id.length < 10) {
        try {
            const numId = parseInt(id);
            const apiInfo = await axios.get(`https://rawg.io/api/games/${numId}?key=6c10878e4c02424886c485451fb037de`)
            const genres = apiInfo.data.genres.map( data => data.name)
            const platforms =  apiInfo.data.platforms.map( data => data.platform.name)
            const detailById = {
                name: apiInfo.data.name,
                description: apiInfo.data.description.replace(/<[^>]+>/g, ''),
                release_date: apiInfo.data.released,
                rating: apiInfo.data.rating,
                background_image: apiInfo.data.background_image,
                platform: platforms,
                gender: genres
            }
            Object.keys(detailById).length === 0 ?
                res.status(404).send("Not Found Game"):
                res.status(200).send(detailById)
        }catch (e) {
            console.error(e)
        }
    }else{
        try {
            const dbInfo = await getInfoDb()
            const dbFilter = dbInfo.filter(data => data.id === id)
        }catch (e) {
            console.error(e)
        }
    }
})

router.post('/', async(req, res) => {
    const {
        name,
        description,
        release_date,
        rating,
        background_image,
        platform,
        genres
    }=req.body;
    try {
        let createGame = await Videogame.create({
            name,
            description,
            release_date,
            rating,
            background_image,
            platform,
        })
        if (genres.length) {
            try {
                genres.map(async (res) => {
                    let generos = await Genre.findOrCreate({
                        where: {name: res}
                    })
                    createGame.addGenre(generos[0])
                })
            }catch (e) {
                console.error(e)
            }
        }
        res.send("juego creado con exito")
    }catch (e) {
        console.error(e)
    }
})
module.exports = router
