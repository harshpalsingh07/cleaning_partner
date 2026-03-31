import express from "express";

import {
  getServices,
  getServiceById,
} from "../controller/frontends/FrontendController.js";

import { storeBooking } from "../controller/frontends/BookingController.js";

const router = express.Router();

router.get("/services", getServices);
router.get("/service/:id", getServiceById);
router.post("/bookings", storeBooking);

export default router;
