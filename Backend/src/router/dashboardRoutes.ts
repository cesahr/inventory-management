import { Router } from "express";
import { getDashboardMetrics } from "../controllers/dashboarController";

const router = Router();

router.get("/", getDashboardMetrics);

export default router;