// //** Create Read */

import * as express from "express";
import { Cat, CatType } from "./cats/cats.model";

const app: express.Express = express();

//* logggin middleware
app.use((req, res, next) => {
  console.log(req.rawHeaders[1]);
  console.log("this is middleware");
  next();
});

//app.use(express.json());
// app.get("/cats/som", (req, res, next) => {
//   console.log("this is som middleware");
//   next();
// });

app.get("/", (req: express.Request, res: express.Response) => {
  res.send({ cats: Cat });
});

// app.get("/cats/blue", (req, res, next: express.NextFunction) => {
//   res.send({ blue: Cat[0] });
// });

// app.get("/cats/som", (req, res) => {
//   res.send({ som: Cat[1] });
// });

//* READ 고양이 전체 데이터 다 조회
/*
app.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;

    console.log(params);
    const cats = Cat.find((cat) => {
      return cat.id === params.id;
    });
    //const cats = Cat;
    //throw new Error("db connect error");
    res.status(200).send({
      success: true,
      data: {
        cats,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});
*/

//* Create 새로운 고양이 만들기
app.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data); // create
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: {},
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* 404 middleware
app.use((req, res, next) => {
  console.log("this is error middleware");
  res.send({ error: "404 not found error" });
});

app.listen(8000, () => {
  console.log("server is on...");
});
