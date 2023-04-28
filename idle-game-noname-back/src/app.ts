import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

let port = 3003

app.listen(port, () => console.log(`Server running on port ${port}`))

export default app; 