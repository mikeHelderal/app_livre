
import express from 'express'

import { Sequelize } from "sequelize";

import connection from "../config/dbConfig.js";
import auteurModel from "./auteur.model.js";
import livreModel from "./livre.model.js";

auteurModel(connection, Sequelize);
livreModel(connection, Sequelize);

const {
    Auteur,
    Livre
} = connection.models;

Auteur.hasMany(Livre , {as: 'Auteur', foreignKey: 'id_auteur'});


await connection.sync()

export {
    Auteur,
    Livre
}