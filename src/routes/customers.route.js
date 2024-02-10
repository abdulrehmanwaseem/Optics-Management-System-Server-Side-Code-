import { Router } from "express";
import {
  createCustomer,
  deleteCustomer,
  getCustomers,
  updateCustomer,
} from "../controllers/customer.controller.js";

export const customerRouter = Router();

customerRouter.route("/").get(getCustomers).post(createCustomer);
customerRouter.route("/:_id").patch(updateCustomer).delete(deleteCustomer);
