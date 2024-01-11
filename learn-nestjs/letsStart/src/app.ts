//const express = require("express");
import * as express from "express";

const app: express.Express = express();
const port: number = 8000;

app.get("/", (req: express.Request, res: express.Response) => {
  //console.log(req);
  res.send("Hello World! get");
  //res.send({ name: "유동수", age: 1 });
});

app.post("/post", (req: express.Request, res: express.Response) => {
  //console.log(req);
  res.send("Hello World! post");
  //res.send({ name: "유동수", age: 1 });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost.${port}`);
});
