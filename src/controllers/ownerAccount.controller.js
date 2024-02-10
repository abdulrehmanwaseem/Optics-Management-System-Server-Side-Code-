import { Owner } from "../models/ownerAccount.model.js";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./components/factoryFuncHandler.js";

const getOwnerAccounts = getAll(Owner);
const createOwnerAccount = createOne(Owner);
const updateOwnerAccount = updateOne(Owner);
const deleteOwnerAccount = deleteOne(Owner);

export {
  getOwnerAccounts,
  createOwnerAccount,
  updateOwnerAccount,
  deleteOwnerAccount,
};
