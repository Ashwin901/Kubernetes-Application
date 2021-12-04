const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/urlModel");
const { urlencoded } = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(urlencoded({ extended: true }));
app.use(express.json());

mongoose
    .connect(
        `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_IP}:${process.env.MONGO_PORT}/?authSource=admin`,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => {
        console.log("Connected to mongo db");
    })
    .catch((err) => {
        console.log(err);
        console.log("Error connecting to mongo db");
    });

app.get("/", (req, res) => {
    res.send("Welcome");
});

app.get("/url", async (req, res) => {
    const shortUrls = await ShortUrl.find();
    res.render("home", { shortUrls: shortUrls });
});

app.post("/createURL", async (req, res) => {
    await ShortUrl.create({ longUrl: req.body.longUrl });

    res.redirect("/url");
});

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
    const data = await ShortUrl.findOne({ shortUrl: shortId });

    if (data == null) return res.sendStatus(404);

    data.views++;
    data.save();

    res.redirect(data.longUrl);
});

app.listen(process.env.PORT, () =>
    console.log(`Server is running on Port ${process.env.PORT}`)
);
