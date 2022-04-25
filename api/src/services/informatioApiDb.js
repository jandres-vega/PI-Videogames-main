const axios = require('axios');
const { Videogame, Genre} = require('../db')


const getInfoApi = async () => {

    let arrayGamesData = [];
    let arrayGames = [];
    try {
        for (let i = 1; i < 6; i++) {
            arrayGamesData.push(await axios.get(`https://rawg.io/api/games?key=6c10878e4c02424886c485451fb037de&page=${i}`))
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
    return await Videogame.findAll({
        include: {
            model: Genre,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    })
}

const getGenreApi = async  () => {
    const getGenreApi = await axios.get('https://api.rawg.io/api/genres?key=6c10878e4c02424886c485451fb037de')
    const generos = getGenreApi.data.results.map(data => data.name);
    return generos
}


module.exports = {
    getInfoApi, getGenreApi,getInfoDb
}

