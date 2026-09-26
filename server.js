const express = require("express")
const app = express()

const PORT = 6060

app.get("/", (req, res, next) => {
    res.send("Hello World from Express!")
})


app.get("/welcome", (req, res, next) => {
    res.send("Welcome to the Express server!")
})

app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})