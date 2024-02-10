import { Company } from "../models/company.model.js";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./components/factoryFuncHandler.js";

const getCompanys = getAll(Company);
const createCompany = createOne(Company);
const updateCompany = updateOne(Company);
const deleteCompany = deleteOne(Company);

export { getCompanys, createCompany, updateCompany, deleteCompany };
