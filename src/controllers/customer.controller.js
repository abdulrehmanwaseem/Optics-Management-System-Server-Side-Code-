import { Customer } from "../models/customer.model.js";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./components/factoryFuncHandler.js";

const getCustomers = getAll(Customer);
const createCustomer = createOne(Customer);
const updateCustomer = updateOne(Customer);
const deleteCustomer = deleteOne(Customer);

export { getCustomers, createCustomer, updateCustomer, deleteCustomer };
