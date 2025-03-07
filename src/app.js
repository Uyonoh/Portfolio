import express from "express";


const app = express();

app.get("/", function (req, res) {
    res.send("Hello World!");
});


const PORT = 3002;
app.listen(PORT, function() {
    console.log("Listeninng on {PORT}");
});