import { Router } from "express";
import { totalNumber } from "../controllers/stats.controller.js";
import { protect } from "../middleware/authMiddelware.js";

const router = Router();

router.route("/generalStats").get(protect,totalNumber);

export default router;
