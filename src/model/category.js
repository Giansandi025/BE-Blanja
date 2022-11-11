const Pool = require('./../config/db');

const selectData = () => {
    return Pool.query(`SELECT * FROM category`);
}

/* const selectDatabyid = (id) => {
   return Pool.query(`SELECT category.name, category.name as category FROM product INNER JOIN category ON product.category_id = category.id WHERE category.id='${id}'`);
} */

const insertData = (data) => {
   const {id,name} = data;
   return Pool.query(`INSERT INTO category(id,name) VALUES(${id},'${name}')`);
}
const updateData = (id,data) => {
   const {name} = data;
   return Pool.query(`UPDATE category SET name='${name}' WHERE id='${id}'`);
}
const deleteData = id => {
   return Pool.query(`DELETE FROM category where id='${id}'`);
}
 module.exports = {insertData,selectData,deleteData,updateData}