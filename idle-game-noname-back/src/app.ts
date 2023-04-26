import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

app.listen(process.env.DB_PORT || 3306,()=> {`Server running on port ${process.env.DB_PORT || 3306}`})

export default app; 