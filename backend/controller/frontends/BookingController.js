import Booking from "../../models/Booking.js";

export const storeBooking = async (req, res) => {
  const { name, phone, service, date, time, address } = req.body;

  if (!name || !phone || !service || !date || !time || !address) {
    return res.status(400).json({
      message: "name, phone, service, date, address and time are required",
    });
  }

  try {
    const booking = new Booking({
      name,
      phone,
      service,
      date,
      time,
      address,
    });

    await booking.save();
    return res.status(201).json({
      booking,
      success: true,
      message: "Booking created successfully",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: error.message || "Failed to create booking" });
  }
};
