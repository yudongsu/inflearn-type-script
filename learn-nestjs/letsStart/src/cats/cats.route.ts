import { Cat } from "./cats.model";
import { Router } from "express";

const router = Router();

//* READ 고양이 전체 데이터 다 조회
router.get("/cats", (req, res) => {
  try {
    const cats = Cat;
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

//* READ 특정 고양이 데이터 조회 -> GET
router.get("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    console.log(params);
    const cat = Cat.find((cat) => {
      return cat.id === params.id;
    });
    res.status(200).send({
      success: true,
      data: {
        cat,
      },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* Create 새로운 고양이 만들기
router.post("/cats", (req, res) => {
  try {
    const data = req.body;
    console.log(data); // create
    Cat.push(data);
    res.status(200).send({
      success: true,
      data: { data },
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});

//* Update 고양이 데이터 업데이트 -> put
router.put("/cats/:id", (req, res) => {
  try {
    const params = req.params;
    const body = req.body;
    //console.log(params, body);

    const catIndex = Cat.findIndex((cat) => {
      return cat.id === params.id;
    });
    console.log(catIndex);
    Cat[catIndex] = {
      ...Cat[catIndex],
      ...body,
    };
    res.status(200).send({
      success: true,
      data: Cat[catIndex],
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
    });
  }
});
//* Update 고양이 데이터 업데이트-> patch

//* Delte  고양이 삭제 -> delete

export default router;
