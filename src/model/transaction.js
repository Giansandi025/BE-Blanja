const Pool = require('./../config/db');

const selectData = () => {
    return Pool.query(`SELECT * FROM transactions`);
}

/* const selectDatabyid = (id) => {
   return Pool.query(`SELECT transactions.id, transactions.email, transactions.product_id, transactions.amount, transactions.total as category FROM product INNER JOIN category ON product.category_id = category.id WHERE category.id='${id}'`);
} */

const insertData = (data) => {
   const {id,email,product_id,amount,total} = data;
   return Pool.query(`INSERT INTO transactions(id,email,product_id,amount,total) VALUES(${id},'${email}',${product_id},${amount},${total})`);
}
const updateData = (id,data) => {
   const {email,product_id,amount,total} = data;
   return Pool.query(`UPDATE transactions SET email='${email}', product_id=${product_id}, amount=${amount}, total=${total}  WHERE id='${id}'`);
}
const deleteData = id => {
   return Pool.query(`DELETE FROM transactions where id='${id}'`);
}
 module.exports = {insertData,selectData,deleteData,updateData}