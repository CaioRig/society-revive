import app from "./app";
import { StockRouter } from "./Router/StockRouter";

app.use("/stock", StockRouter)