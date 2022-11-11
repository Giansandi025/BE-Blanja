const express = require('express')
const upload = require('./../middleware/upload')
const router = express.Router()
const {ProductController} = require('./../controller/products')
//const {validateStock} = require("./../helper/stock")
const {protect} = require("./../middleware/auth")
//const {hitCache,clearCache} = require("./../middleware/redis")



router.get('/',ProductController.getProduct)
//router.get('/:id',protect,hitCache,ProductController.getProductDetail)
router.post('/',protect, upload.single('photo'), ProductController.insert)
//router.put('/:id',protect,clearCache,ProductController.update)
//router.delete('/:id',protect,clearCache,ProductController.delete)

module.exports = router;