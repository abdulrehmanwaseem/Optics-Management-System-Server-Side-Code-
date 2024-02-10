import { Expense } from "../models/expense.model.js";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./components/factoryFuncHandler.js";

const getExpenses = getAll(Expense);
const createExpense = createOne(Expense);
const updateExpense = updateOne(Expense);
const deleteExpense = deleteOne(Expense);

export { getExpenses, createExpense, updateExpense, deleteExpense };
