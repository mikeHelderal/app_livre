import { Auteur } from "../models/index.js";


const  add = async(req,res) => {
    try {
        const result = await Auteur.create(req.body);
        res.status(201).json({message : "auteur créé"});
    } catch (error) {
        res.status(500).json({message : "erreur lors de la création de l'auteur"})        
    }
}
const  getAll = async(req,res) => {
    try {
        const result = await Auteur.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : "erreur lors de la récupération des auteurs "})
    }
}

const updateById = async (req, res) => {
    try {
        const auteur = await Auteur.findByPk(req.params.id);
        if (!auteur) return res.status(404).json({message: "Auteur non trouné"});
        await auteur.update(req.body);
        res.status(200).json({message : "auteur modifié"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la modification"})
    }
}

const deleteById = async (req,res) => {
    try {
        const auteurDelete = await Auteur.destroy({where: {id: req.params.id}});
        if (!auteurDelete) return res.status(404).json({message: "Auteur non trouvé"});
        res.status(200).json({message: "auteur supprimé"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la suppression"})

        
    }
}


export {
    add, getAll, updateById, deleteById
}