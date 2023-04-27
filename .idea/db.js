const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/muppets', {logging:false})
/*  This code imports the Sequelize library and creates a new instance of it called "db". 
It then connects to a PostgreSQL database called "muppets" running on the local machine 
at port 5432, with logging turned off.   */

const Character = db.define('character',{
    name:{
        type: Sequelize.STRING,
        allowNull:false,
        unique: true
    },
    animal:{
        ype: Sequelize.STRING,
        allowNull:false,
        unique: false
    }
})

module.exports =  {
    db,
    Character
}

/*
    The code then defines a Sequelize model called "Character" with two properties: "name" 
and "animal". "name" is a required string that must be unique, while "animal" is also a 
string but not required to be unique.
    Finally, the code exports an object with two properties: "db" and "Character", which can 
be imported into other files to interact with the database and the "Character" model.
*/