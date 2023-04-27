const express = require('express'); // grab express lib
const app = express(); // init express app

// a lot more here
const characterRouter = require('./routes'); // import routes file and db
const {db}=require('.db');

const setup = async ()=>{
    try {

        // send hello world back at base url
        app.get('/', function(req, res){
            res.send("<h1>Hello World</h1>")
        })


        // routes to other things in my app
        app.use('/characters', characterRouter);

        // error handling
        app.use((err, req, res)=>{
            console.log("Error is", err.status); // console.log error status
            const status = err.status || 500;
            res.status(status).send(err.message); // send this error message
        })

        // sync database to run everything
        await db.sync();


        // listening on a port

        app.listen(8080, ()=>{
            console.log("litening on port 8080");
        })
    } catch (e) {
        console.log(e);
    }
}

setup(); // call the () before you npm start to view on http://localhost:8080/