import {
  createClasse,
  getClasse,
  updateClasse,
  deleteClasse,
  getClassesByParcours,
} from "../controllers/classe.controller.js";
import { Router } from "express";
import { protect } from "../middleware/authMiddelware.js";
const router = Router();

router.route("/").get(protect,getClasse).post(protect,createClasse);
router.route("/:id").delete(protect,deleteClasse).put(protect,updateClasse);
router.route("/parcours/:name").get(protect,getClassesByParcours);


export default router;
