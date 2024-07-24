const ServiceLayer = require("../services/email-service");

const serviceLayer = new ServiceLayer();

const create = async (req, res) => {
  try {
    const response = await serviceLayer.createTicket(req.body);
    console.log(response);
    return res.status(201).json({
      data: response,
      success: true,
      message: "Ticket created successfully",
      err: {},
    });
  } catch (error) {
    return res.status(500).json({
      data: {},
      success: false,
      message: "Error creating ticket ",
      err: {},
    });
  }
};

module.exports = {
  create,
};
