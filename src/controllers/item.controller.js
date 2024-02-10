import { Item } from "../models/item.model.js";
import {
  createOne,
  deleteOne,
  getAll,
  getOne,
  updateOne,
} from "./components/factoryFuncHandler.js";

const getItems = getAll(Item, { path: "companyName" });
// const getSingleItem = getOne(Item);
const createItem = createOne(Item);
const updateItem = updateOne(Item);
const deleteItem = deleteOne(Item);

export { getItems, createItem, updateItem, deleteItem };
