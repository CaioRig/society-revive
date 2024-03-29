import express from "express";
import { StockController } from "../Controller/StockController";

export const StockRouter = express.Router()

const stockController = new StockController()

StockRouter.get("/get", stockController.GetStock)
StockRouter.post("/send", stockController.SendStock)