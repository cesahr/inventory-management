import { Router } from "express";
import { getProducts, createProducts } from "../controllers/productController";

const router = Router();

router.get("/", getProducts);
router.post("/", createProducts);

export default router;