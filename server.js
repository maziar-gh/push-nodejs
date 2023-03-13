// (A) SETTINGS - CHANGE TO YOUR OWN!
const port = 80,
      mail = "your@email.com",
      publicKey = "YOUR-PUBLIC-KEY",
      privateKey = "YOUR-PRIVATE-KEY";
 
// (B) LOAD MODULES
const express = require("express"),
      bodyParser = require("body-parser"),
      path = require("path"),
      webpush = require("web-push");
 
// (C) SETUP SERVER
webpush.setVapidDetails("mailto:" + mail, publicKey, privateKey);
const app = express();
app.use(express.static(__dirname)); // serve static files
app.use(bodyParser.json()); // json parser

// (D) SERVE TEST HOME PAGE
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/3-perm-sw.html")));
 
// (E) SEND TEST PUSH NOTIFICATION
app.post("/mypush", (req, res) => {
  res.status(201).json({}); // reply with 201 (created)
  webpush.sendNotification(req.body, JSON.stringify({
    title: "Welcome!",
    body: "Yes, it works!",
    icon: "i-loud.png",
    image: "i-zap.png"
  }))
  .catch(err => console.log(err));
});
 
// (F) START!
app.listen(port, () => console.log(`Server deployed at ${port}`));