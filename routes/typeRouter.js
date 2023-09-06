const typeController = require("../controllers/typeController");
const router = require("express").Router();

router.post("/addType", typeController.addType);

router.get("/getTypes", typeController.getTypes);

router.get("/:id", typeController.typeById);
module.exports = router;
