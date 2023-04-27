const router = require('express').Router();
const {Character}= require('./db'); // Character is in obj notation because of export module in db.js

// grabs all characters
router.get('/', async (req, res, next)=>{
    try{
        const characters = await Character.findAll(); // in db findAll characters before executing any other code
        res.send(characters)
    } catch(e){
        next(e)
    }
})

// grabs all characters by id
router.get('/:id', async (req, res, next)=>{
    try{                                    // find By Primary Key
        const character = await Character.findByPk(req.params.id) // When a request is made to this route with an ID parameter, it uses the Sequelize method findByPk
        res.send(character);                                      // to retrieve a character from a database table called Character
    } catch(e) {
        next(e)
    }
})

module.export = router;

