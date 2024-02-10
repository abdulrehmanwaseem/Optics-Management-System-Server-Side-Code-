import { Account } from "../models/account.model.js";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./components/factoryFuncHandler.js";

const getAccounts = getAll(Account);
const createAccount = createOne(Account);
const updateAccount = updateOne(Account);
const deleteAccount = deleteOne(Account);

export { getAccounts, createAccount, updateAccount, deleteAccount };
