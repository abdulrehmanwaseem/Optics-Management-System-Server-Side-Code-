import { Router } from "express";
import {
  createCompany,
  deleteCompany,
  getCompanys,
  updateCompany,
} from "../controllers/company.controller.js";

export const companyRouter = Router();

companyRouter.route("/").get(getCompanys).post(createCompany);
companyRouter.route("/:_id").patch(updateCompany).delete(deleteCompany);
