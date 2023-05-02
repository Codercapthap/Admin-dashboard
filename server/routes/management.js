import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/management.js";

const router = express.Router();
router.get("/performance/:id", getUserPerformance);
router.get("/admin", getAdmins);

export default router;
