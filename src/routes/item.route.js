import { Router } from "express";
import {
  createItem,
  deleteItem,
  getItems,
  updateItem,
} from "../controllers/item.controller.js";

export const itemsRouter = Router();

itemsRouter.route("/").get(getItems).post(createItem);
itemsRouter.route("/:_id").patch(updateItem).delete(deleteItem);
// .get(getSingleItem)
