import { Router } from "express";
import {
  createAccount,
  deleteAccount,
  getAccounts,
  updateAccount,
} from "../controllers/account.controller.js";

export const accountRouter = Router();

accountRouter.route("/").get(getAccounts).post(createAccount);
accountRouter.route("/:_id").patch(updateAccount).delete(deleteAccount);
