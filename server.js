const express = require("express")
const app = express()

const PORT = 6060

app.get("/", (req, res, next) => {
    res.send("Hello World")
})

app.get("/welcome", (req, res, next) => {
    res.send("Welcome to the server")
})

app.get("/about", (req, res, next) => {
    res.send("This is the about page")
})

app.listen(PORT, () =>{
    console.log("Server is running on port", PORT)
})