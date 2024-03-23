const express = require('express');
const router = express.Router();
const { makeMeals, getIngredientsList } = require('../controllers/generateController');
const { parseReceipt } = require('../controllers/receiptController');

const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.get('/makeMeals', makeMeals);
router.get('/getIngredientsList', getIngredientsList);
router.put('/parseReceipt', upload.single('image'), parseReceipt);

module.exports = router;
