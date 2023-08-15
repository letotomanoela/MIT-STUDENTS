import { Router } from "express";
import {
  createEtudiant,
  getEtudiantByClassInASC,
  getSingleEtudiant,
  updateEtudiant,
  searchEtudiantByASC,
  total,
  totalASC,
  totalClasseASC,
  deleteEtudiant,
  totalSearchEtudiant
} from "../controllers/etudiant.controller.js";

import { protect } from "../middleware/authMiddelware.js";

const router = Router();

router.route("/").post(createEtudiant);

router
  .route("/:id")
  .get(getSingleEtudiant)
  .put(updateEtudiant)
  .delete(deleteEtudiant);

router.route("/classe/:classe/:asc/skip=:skip").get(protect,getEtudiantByClassInASC);
router.route("/search/:asc/:classe/:value/skip=:skip").get(protect,searchEtudiantByASC);
router.route("/total/search/:asc/:classe/:value").get(protect,totalSearchEtudiant);

router.route("/nombre/total").get(protect,total);
router.route("/nombre/total/asc/:asc").get(protect,totalASC);
router.route("/nombre/total/asc/:asc/classe/:classe").get(protect,totalClasseASC);

export default router;
