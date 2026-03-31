import Service from "../../models/Service.js";

const getServices = async (req, res) => {
  try {
    const response = await Service.find({ status: "active" }).populate(
      "category",
      "name",
    );

    return res.status(200).json({
      data: response,
      message: "Category fetched successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Some thing went to wrong.",
    });
  }
};

const getServiceById = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await Service.findOne({
      status: "active",
      _id: id,
    }).populate("category", "name");

    return res.status(200).json({
      data: response,
      message: "Category fetched successfully.",
    });
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Some thing went to wrong.",
    });
  }
};

export { getServices, getServiceById };
