import express from 'express';
import { add, deleteById, getAll, updateById } from '../controllers/auteur.controller.js';

const router = express.Router();



router.post("/add", add);
router.get("/all", getAll);
router.put("/update/:id", updateById);
router.delete("/delete/:id", deleteById);


export default router;