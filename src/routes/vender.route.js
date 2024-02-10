import { Router } from "express";
import {
  createVender,
  deleteVender,
  getVenders,
  // getSingleVender,
  updateVender,
} from "../controllers/vender.controller.js";

export const venderRouter = Router();

venderRouter.route("/").get(getVenders).post(createVender);
venderRouter.route("/:_id").patch(updateVender).delete(deleteVender);
// .get(getSingleVender)
