const express = require('express');
const bodyParser = require('body-parser');
const day_date = require(__dirname + "/day_date.js");

const items = [];
const workItems = [];
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const day = day_date.getDate();

app.get('/', function(req, res) {
    res.render('list', { listTitle: day, newListItem: items });
});

app.post("/", function(req, res) {
    const item = req.body.task;
    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
});

app.get("/work", function(req, res) {
    res.render("list", { listTitle: "Work List", newListItem: workItems });
});

app.get("/about", function(req, res) {
    res.render("about");
});
app.listen(3000, function() {
    console.log("Server is running on port 3000");
});