"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get("/", function (req, res) {
    res.send("Hello World! get");
});
app.post("/post", function (req, res) {
    res.send("Hello World! post");
});
app.listen(port, function () {
    console.log("Example app listening on port http://localhost." + port);
});
//# sourceMappingURL=app.js.map