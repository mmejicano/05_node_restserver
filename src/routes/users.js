import { Router } from "express";
import { index, store, update, destroy } from "../controllers/users.js";

const router = Router();

router.get("/", index);

router.post("/", store);

router.put("/:id", update);

router.delete("/:id", destroy);

export default router;