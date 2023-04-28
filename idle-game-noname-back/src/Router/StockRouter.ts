import express from "express";
import { StockController } from "../Controller/StockController";

export const StockRouter = express.Router()

const stockController = new StockController()

StockRouter.get("/get", stockController.GetStock)
StockRouter.get("/ping", stockController.ping)