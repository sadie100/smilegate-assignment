import { Request, Response } from "express";

export const reserve = async (req: Request, res: Response) => {
  //logic
  try {
    console.log("들어왔습니다.");
    console.log(req.body);
    const { name, phone } = req.body;
    console.log(name, phone);
    res.send(200);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};
