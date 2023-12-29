import express from "express";
import { requireSignIn, isAdmin } from "./../middlewares/authMiddleware.js";
import {
    categoryController,
  createCategoryController,
  deleteCategoryController,
  singleCategoryController,
  updateCategoryController,
} from "../controllers/categoryController.js";
import categoryModel from "../models/categoryModel.js";

const router = express.Router();

//routes

//create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

//update category
router.put(
  "/update-category/:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

//getAll Category
router.get("/get-category",categoryController)

//single category
router.get("/single-category/:slug",singleCategoryController);

//Delete category
router.delete("/delete-category/:id",requireSignIn,isAdmin,deleteCategoryController);

export default router;
