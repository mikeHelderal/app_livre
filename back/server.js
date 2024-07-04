import express from 'express'
import cors from 'cors'
import { ENV } from './config/config.js'

import './models/index.js'


const app = express()

import routeurAuteur from './routes/auteur.routes.js'
import routeurLivre from './routes/livre.routeur.js'


app.use(express.json());
app.use(cors());


app.use("/api/auteur", routeurAuteur);
app.use("/api/livre", routeurLivre);

const PORT =  ENV.PORT || 8080

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})