require('dotenv').config();
const axios = require('axios');
const { Videogame, Genre, Platform} = require('../db')
const {API_KEY} = process.env

const getInfoApi = async () => {

    let arrayGamesData = [];
    let arrayGames = [];
    try {
        for (let i = 1; i < 6; i++) {
            arrayGamesData.push(await axios.get(`https://rawg.io/api/games?key=${API_KEY}&page=${i}`))
        }
        for (let i = 0; i < arrayGamesData.length ; i++) {
            arrayGames = arrayGames.concat( arrayGamesData[i].data.results)

        }
        return arrayGames.map(data => {
            return {
                id: data.id,
                name: data.name,
                released: data.released,
                rating: data.rating,
                background_image: data.background_image,
                platform: data.platforms.map(e => e.platform.name),
                genres: data.genres.map(g => g.name),
            }
        })
    }catch (e) {
        console.error(e)
    }
}

const getInfoDb = async () => {
    var videgamesDb = []
    videgamesDb = await Videogame.findAll({
        include: [{
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
            }, {
            model: Platform,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }]
    })
    videgamesDb = videgamesDb.map(p => {
        return {
                    id: p.id,
                    name: p.name,
                    released: p.released,
                    rating: p.rating,
                    description: p.description,
                    background_image: p.background_image,
                    genres: p.genres.map(data => data.name),
                    platform: p.platforms.map(data => data.name),
                    createDateBase: p.createDateBase
                }

    })
    return videgamesDb
}
const getInfoApiDb = async () => {

    const getApiInfo = await getInfoApi()
    const getDb = await getInfoDb()
    return getApiInfo.concat(getDb)
}

const getGenreApi = async  () => {
    const getGenreApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
    const generos = getGenreApi.data.results.map(data => data.name);
    return generos
}
const getPlatform = async () => {

    const allInfo = await getInfoApi()
    const platforms = allInfo.map(data => {
        for (let i = 0; i <data.platform.length; i++) {
            return data.platform[i]
        }
    })
    return platforms.filter(function (ele, pos) {
        return platforms.indexOf(ele) === pos;
    })
}
module.exports = {
    getInfoApi, getGenreApi,getInfoDb, getInfoApiDb, getPlatform
}

