import Listing from "../models/listing.model.js";
import { errorHandler } from "../utils/errorhandler.js";

export const createListing = async (req, res, next) => {
  try {
    const data = await Listing.create(req.body);
    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

export const deleteListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(401, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can only delete your own account!"));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing deleted successfully");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandler(404, "Listing not found!"));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandler(401, "You can  only  update your own listing!"));
  }
  try {
    const updatedListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updatedListing);
  } catch (error) {
    next(error);
  }
};

export const getListing = async (req, res, next) => {
  try {
    const listings = await Listing.findById(req.params.id);
    if (!listings) {
      return next(errorHandler(401, "Listing not found!"));
    } else {
      res.status(200).json(listings);
    }
  } catch (error) {
    next(error);
  }
};
