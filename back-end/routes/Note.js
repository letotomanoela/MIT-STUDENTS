import {
  getNoteEtudiantWithMatiereByAsc,
  updateNotes,
  searchNoteEtudiant,
  getNoteByMatiere,
  researchNotes,
  totalSearchNotes
  
} from "../controllers/note.controller.js";
import { protect } from "../middleware/authMiddelware.js";
import { Router } from "express";

const router = Router();

router.route("/").put(updateNotes);
router.route("/asc/:asc/classe/:classe/skip=:skip").get(protect,getNoteEtudiantWithMatiereByAsc);
router.route("/etudiant/:id/asc/:asc").get(protect,searchNoteEtudiant);
router.route("/matiere/:id/asc/:asc").get(protect,getNoteByMatiere);
router.route("/research=:value/asc=:asc/classe=:classe/skip=:skip").get(protect,researchNotes)
router.route("/total/research=:value/asc=:asc/classe=:classe").get(protect,totalSearchNotes)

export default router;
