const express = require('express')
const router = express.Router()
const {TransactionController} = require('./../controller/transaction')
//const {validateTransaction} = require("./../helper/transactions")
const {protect} = require("./../middleware/auth")



router.get('/',protect,TransactionController.getTransaction)
router.get('/:id',protect,TransactionController.getTransactionDetail)
router.post('/',protect,TransactionController.insert)
router.put('/:id',protect,TransactionController.update)
router.delete('/:id',protect,TransactionController.delete)

module.exports = router;
