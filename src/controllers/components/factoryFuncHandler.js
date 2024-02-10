import APIFeatures from "./apiFeatures.js";
import { ApiError } from "../../utils/ApiError.js";
import catchAsync from "../../utils/catchAsync.js";

const deleteOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndDelete(req.params._id);

    if (!doc) {
      return next(new ApiError("No document found with that ID", 404));
    }

    res.status(204).json({
      status: "Success",
      data: {
        tour: null,
      },
    });
  });

const updateOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!doc) {
      return next(new ApiError("No document found with that ID", 404));
    }
    res.status(200).json({
      status: "Success",
      data: {
        data: doc,
      },
    });
  });

const createOne = (Model) =>
  catchAsync(async (req, res, next) => {
    const doc = await Model.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        data: doc,
      },
    });
  });

const getOne = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    let query = Model.findById({ _id: req.params._id });

    if (populateOptions) query = query.populate(populateOptions);

    const doc = await query;

    if (!doc) {
      return next(new ApiError("No document found with that ID", 404));
    }
    res.json({
      status: "success",
      data: {
        data: doc,
      },
    });
  });

const getAll = (Model, populateOptions) =>
  catchAsync(async (req, res, next) => {
    const {
      sort = "1",
      sortBy = "_id",
      search = "",
      searchBy = "",
      page = 1,
      perPage = 5,
    } = req.query;
    const features = new APIFeatures(Model.find(), {
      sort,
      sortBy,
      search,
      searchBy,
      page,
      perPage,
      populateOptions,
    })
      .populate()
      .paginate()
      .sort()
      .search();

    const doc = await features.query;

    const totalTours = await Model.countDocuments();
    res.json({
      status: "success",
      results: totalTours,
      data: {
        data: doc,
      },
    });
  });

export { deleteOne, updateOne, createOne, getOne, getAll };
