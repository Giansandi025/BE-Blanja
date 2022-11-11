const express = require('express')
const router = express.Router()
const {CategoryController} = require('./../controller/category')
//const {validateCategory} = require("./../helper/category")
const {protect} = require("./../middleware/auth")

router.get('/',protect,CategoryController.getCategory)
router.get('/:id',CategoryController.getCategoryDetail)
router.post('/',protect, CategoryController.insert)
router.put('/:id',protect,CategoryController.update)
router.delete('/:id',protect,CategoryController.delete)

module.exports = router