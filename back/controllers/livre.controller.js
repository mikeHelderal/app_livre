import { Livre } from "../models/index.js";


const  add = async(req,res) => {
    try {
        const result = await Livre.create(req.body);
        res.status(201).json({message : "livre créé"});
    } catch (error) {
        res.status(500).json({message : "erreur lors de la création de l'livre"})        
    }
}
const  getAll = async(req,res) => {
    try {
        const result = await Livre.findAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({message : "erreur lors de la récupération des livres "})
    }
}

const updateById = async (req, res) => {
    try {
        const livre = await Livre.findByPk(req.params.id);
        if (!livre) return res.status(404).json({message: "Livre non trouné"});
        await livre.update(req.body);
        res.status(200).json({message : "livre modifié"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la modification"})
    }
}

const deleteById = async (req,res) => {
    try {
        const livreDelete = await Livre.destroy({where: {id: req.params.id}});
        if (!livreDelete) return res.status(404).json({message: "Livre non trouvé"});
        res.status(200).json({message: "livre supprimé"});
    } catch (error) {
        res.status(500).json({message: "erreur lors de la suppression"})

        
    }
}


export {
    add, getAll, updateById, deleteById
}
