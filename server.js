// (A) SETTINGS - CHANGE TO YOUR OWN!
const port = 80,
      mail = "your@email.com",
      publicKey = "BJztwj9VH5ri7YbfJDTxz2qR3zObHc_rWq3ktzXo2ugU_NFTrhBG6yFxW3tUcYdj24-Mci_dVU1mEdX874aKlTI",
      privateKey = "fIrHkH8BbL4ohQCdkxEqrAi6saPsGPipZyxXZCHw6sY";
 
// (B) LOAD MODULES
const express = require("express"),
      bodyParser = require("body-parser"),
      path = require("path"),
      webpush = require("web-push");

var fs = require('fs');
var http = require('http');
var https = require('https');

var pk  = fs.readFileSync('key.pem', 'utf8');
var cr = fs.readFileSync('cert.pem', 'utf8');
var credentials = {key: pk, cert: cr};
 
// (C) SETUP SERVER
webpush.setVapidDetails("mailto:" + mail, publicKey, privateKey);
const app = express();
app.use(express.static(__dirname)); // serve static files
app.use(bodyParser.json()); // json parser

// (D) SERVE TEST HOME PAGE
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "/index.html")));
 
// (E) SEND TEST PUSH NOTIFICATION
app.post("/mypush", (req, res) => {
  res.status(201).json({}); // reply with 201 (created)
  webpush.sendNotification(req.body, JSON.stringify({
    title: "Welcome!",
    body: "Yes, it works!",
    icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
    image: "https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg"
  }))
  .catch(err => console.log(err));
});
 
// (F) START!
//app.listen(port, () => console.log(`Server deployed at ${port}`));


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);

httpServer.listen(8080, () => {
    console.log("httpServer is runing at port 8080");
  });
httpsServer.listen(8443, () => {
    console.log("httpsServer is runing at port 8443");
  });