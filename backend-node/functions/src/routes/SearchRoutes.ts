import { Router } from "express";
import { SearchController } from "../controllers";

const router = Router();
const searchController = new SearchController();

router.get("/", searchController.search);

export default router;
