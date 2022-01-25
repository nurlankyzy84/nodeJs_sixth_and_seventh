
const express = require("express");
const fs = require("fs")
let app = express();
const qs = require("querystring")


console.log(__dirname)

app.use("/static", express.static(__dirname + "/public"))

app.get("/admin", function (req, res) {

    res.sendFile(__dirname + "/html/admin.html")
})


let urlParser = express.urlencoded({ extended: false });

app.post("/products", urlParser, function (req, res) {

    let Object = {
        "name": + req.body.name,
        "price": + req.body.price,
        "img": + req.body.img
    }
    fs.appendFileSync("ex.txt", JSON.stringify(Object))
    console.log(Object)

    res.send("Форма отправлена")
});


app.get("/products", function (req, res) {
    fs.readFile("db.txt", "utf-8", (err, data) => {
        res.send(data)

    })
})

let PORT = process.argv[2]
app.listen(PORT)
