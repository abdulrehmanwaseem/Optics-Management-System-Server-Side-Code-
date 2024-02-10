import { Router } from "express";
import {
  createOwnerAccount,
  deleteOwnerAccount,
  getOwnerAccounts,
  updateOwnerAccount,
} from "../controllers/ownerAccount.controller.js";

export const ownerAccountRouter = Router();

ownerAccountRouter.route("/").get(getOwnerAccounts).post(createOwnerAccount);
ownerAccountRouter
  .route("/:_id")
  .patch(updateOwnerAccount)
  .delete(deleteOwnerAccount);
