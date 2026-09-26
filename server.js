const express = require("express")
const app = express()

const PORT = 6060

app.get("/", (req, res, next) => {
    res.send("Hello World from Express!")
})

app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})