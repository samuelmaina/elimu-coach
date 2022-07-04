import express, { NextFunction, Request, Response } from "express";

import { perfectConvertor } from "../services/convertor";
const router = express.Router();

router
  .route("/convert")
  .post((req: Request, res: Response, next: NextFunction) => {
    const { number, from, to } = req.body;
    const result = perfectConvertor(number, from, to);
    res.send(result);
  });

router
  .route("/get-conversion/:id")
  .get((req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
  });

export default router;
