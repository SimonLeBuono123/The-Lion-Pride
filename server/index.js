import express from 'express';
import mongoose from "mongoose";
import {password} from "./password.js";

const api = express()

const port = 3030;
const uri = `mongodb+srv://food-project:${password}@food-cluster0.a9dyz1j.mongodb.net/?retryWrites=true&w=majority`

api.listen(port, ()=> {
    mongoose.connect(uri, { dbName: 'LionDB' }).then((result, error)=> {
        if(result){
            console.log(`listening in on http://localhost:${port}`)
        } else if(error){
            console.error(error)}
    })

} )

import router from "./routes/test-routes.js";
api.use(express.json())
api.use('/rest/test', router)