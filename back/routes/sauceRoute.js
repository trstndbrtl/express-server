const express = require("express");
const router = express.Router();
const multer = require("../middleware/multer-config");
const auth = require("../middleware/auth");
const checkSauce = require("../middleware/check-sauce")
const sauceCtrl = require("../controllers/sauceController");

router.get("/", auth, sauceCtrl.getAllSauces);
router.get('/:id', auth, sauceCtrl.getOneSauce);
router.post("/", auth, multer, checkSauce, sauceCtrl.createSauce);
router.put("/:id", auth, multer, checkSauce, sauceCtrl.updateSauce)
router.delete("/:id", auth, sauceCtrl.deleteSauce)

module.exports = router;