import { Router } from "express";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  updateExpense,
} from "../controllers/expense.controller.js";

export const expenseRouter = Router();

expenseRouter.route("/").get(getExpenses).post(createExpense);
expenseRouter.route("/:_id").patch(updateExpense).delete(deleteExpense);
