const express = require("express");

const router = express.Router();

const {
  postDocs,
  allDocs,
  oneDoc,
  updateDoc,
  deleteDoc,
} = require("../controller/devController");

router.route("/addDocs").post(postDocs);
router.route("/addedDocs").get(allDocs);
router.route("/getDoc/:id").get(oneDoc);
router.route("/update/:id").patch(updateDoc);
router.route("/deleteData/:id").delete(deleteDoc);

module.exports = router;
