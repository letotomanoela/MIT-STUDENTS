import { Router } from "express";
import { 
    getMatiereByClassByParcours,
    createMatiereByClassByParcours,
    updateMatiereByClassByParcours,
    deleteMatiere

} from "../controllers/matiere.controller.js";

import { protect } from "../middleware/authMiddelware.js";

const router = Router();

router
    .route("/")
    .post(protect,createMatiereByClassByParcours)
router
    .route('/:id')
    .get(protect,getMatiereByClassByParcours)
    .put(protect,updateMatiereByClassByParcours)
    .delete(protect,deleteMatiere)

export default router;
