import { Router, json } from "express";
import { StockController } from "../Controller/StockController";

const stockRouter = Router();
const stockController = new StockController();

stockRouter.use(json());
stockRouter.get("/get", stockController.getStock);
stockRouter.post("/send", stockController.sendStock);

export default stockRouter;