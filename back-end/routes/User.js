import { Router } from "express";
import {
  createUser,
  authUser,
  registerUser,
  checkUserAccount,
  verifyUser,
  changePseudo,
  updatePseudo,
  verifyPassword,
  changePassword,
  forgotPassword,
} from "../controllers/user.controller.js";
import { protect } from "../middleware/authMiddelware.js";

const router = Router();

router.route("/").post(createUser);
router.route("/login").post(authUser);
router.route("/register").put(registerUser);
router.route("/checkUser").post(checkUserAccount);
router.route("/verifyUser").get(verifyUser);
router.route("/changePseudo").post(protect, changePseudo);
router.route("/updatePseudo").put(protect, updatePseudo);
router.route("/verifyPassword").post(protect, verifyPassword);
router.route("/changePassword").put(protect, changePassword);
router.route("/forgotPassword").post(protect, forgotPassword);

export default router;
