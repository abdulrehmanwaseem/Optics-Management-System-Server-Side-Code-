import { Vender } from "../models/vender.model.js";
import {
  createOne,
  deleteOne,
  getAll,
  updateOne,
} from "./components/factoryFuncHandler.js";

const getVenders = getAll(Vender, { path: "companyName" });
const createVender = createOne(Vender);
const updateVender = updateOne(Vender);
const deleteVender = deleteOne(Vender);
// const getSingleVender = getOne(Vender);

export { getVenders, createVender, updateVender, deleteVender };
