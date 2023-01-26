const router = require("express").Router();
const studentController = require('../Controllers/controller'); 

// add new student detail
router.post("/", studentController.studentCreate);

// get all student information
router.get("/");

// get single student info 
router.get("/:productId");

//update single student information
router.put("/:productId");

//delete single student info
router.delete("/:productId");

 module.exports = router;