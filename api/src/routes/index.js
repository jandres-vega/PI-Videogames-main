const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const games = require('./videoGames')
const genres = require('./Genre')
const plat = require('./Platform')
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', games)
router.use('/videogame', games)
router.use('/genres', genres)
router.use('/platforms', plat)

module.exports = router;
