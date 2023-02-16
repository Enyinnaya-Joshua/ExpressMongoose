const devModel = require("../model/devModel");

const postDocs = async (req, res) => {
  try {
    const { firstName, lastName, gender, complexion, phoneNo, NameOfpc } =
      req.body;
    const addDocs = await devModel.create({
      firstName,
      lastName,
      gender,
      complexion,
      phoneNo,
      NameOfpc,
    });
    res.status(201).json({
      message: "Data has been created Successfully",
      data: addDocs,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const allDocs = async (req, res) => {
  try {
    const addedDocs = await devModel.find();
    res.status(200).json({
      message: "Data gotten successfully",
      data: addedDocs,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const oneDoc = async (req, res) => {
  try {
    const getDoc = await devModel.findById(req.params.id);
    res.status(200).json({
      message: "Data gotten successfully",
      data: getDoc,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const updateDoc = async (req, res) => {
  try {
    const { firstName, lastName, gender, complexion, phoneNo, NameOfpc } =
      req.body;
    const update = await devModel.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        gender,
        complexion,
        phoneNo,
        NameOfpc,
      },
      { new: true }
    );
    req.status(200).json({
      message: "Data has been updated successfully",
      data: update,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

const deleteDoc = async (req, res) => {
  try {
    const deleteData = await devModel.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "Data successfully deleted",
      data: deleteData,
    });
  } catch (error) {
    res.status(400).json({
      message: "An error occured",
      data: error.message,
    });
  }
};

module.exports = { postDocs, allDocs, oneDoc, updateDoc, deleteDoc };
