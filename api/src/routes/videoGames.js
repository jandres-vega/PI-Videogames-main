require('dotenv').config();
const {Router} = require('express')
const router = Router()
const {getInfoApi, getInfoDb, getInfoApiDb} = require('../services/informatioApiDb')
const { Videogame, Genre, Platform} = require('../db')
const axios = require("axios");

const {API_KEY} = process.env

router.get('/', async(req, res) => {
    const name = req.query.name
    try {
        const apiInfo = await getInfoApiDb()
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
            let arrayApi = []
            const apiInfo = await axios.get(`https://rawg.io/api/games/${numId}?key=${API_KEY}`)
            // const detailById = apiInfo.data.map(data => data.name)
            // res.send(detailById)
            const genre = apiInfo.data.genres.map( data => data.name)
            const platform =  apiInfo.data.platforms.map( data => data.platform.name)
            const detailById = {
                id: apiInfo.data.id,
                name: apiInfo.data.name,
                description: apiInfo.data.description.replace(/<[^>]+>/g, ''),
                released: apiInfo.data.released,
                rating: apiInfo.data.rating,
                background_image: apiInfo.data.background_image,
                platform: platform,
                genres: genre
            }
            arrayApi.push(detailById)
            Object.keys(detailById).length === 0 ?
                res.status(404).send("Not Found Game"):
                res.status(200).send( arrayApi)
        }catch (e) {
            console.error(e)
        }
    }else{
        try {
            const apiInfo = await getInfoDb()
            const filterDb = apiInfo.filter(data => data.id === id)
            res.send(filterDb)

        }catch (e) {
            console.error(e)
        }
    }
})

router.post('/', async(req, res) => {
    const {
        name,
        description,
        released,
        rating,
        background_image,
        genres,
        platforms
    }=req.body;
    try {
        let createGame = await Videogame.create({
            name,
            description,
            released,
            rating,
            background_image,
        })
        if (genres.length && platforms.length) {
            try {
                genres.map(async (res) => {
                    let generos = await Genre.findOrCreate({
                        where: {name: res}
                    })
                    createGame.addGenre(generos[0])
                })
                platforms.map(async (res) =>{
                    let platforms = await Platform.findOrCreate({
                        where: {name: res}
                    })
                    createGame.addPlatform(platforms[0])
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
