const {Router} = require('express');
const {Platform} = require('../db')
const router = Router()

router.get('/', async (req, res) => {
    try {
        let getPlatform = await Platform.findAll();
        getPlatform = getPlatform.map((data) => {
            return data
        })
        res.send(getPlatform)
    }catch (e){
        console.error(e)
    }
});


module.exports = router;