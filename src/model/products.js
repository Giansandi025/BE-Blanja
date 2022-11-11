const Pool = require('./../config/db');

const selectData = (search,sorby, sort, limit,page) => {
    return Pool.query(`SELECT product.id, product.name, product.stock,product.price, category.name as category, photo FROM product INNER JOIN category ON product.category_id = category.id WHERE product.name ILIKE '%${search}%' ORDER BY ${sorby} ${sort} LIMIT ${limit} OFFSET ${(page - 1) * limit} `);
}
const selectDatabyid = (id) => {
   return Pool.query(`SELECT product.id, product.name, product.stock,product.price, category.name as category FROM product INNER JOIN category ON product.category_id = category.id WHERE product.id='${id}'`);
}
const insertData = (data) => {
   const {id,name,stock,price,category_id,photo} = data;
   return Pool.query(`INSERT INTO product(id,name,stock,price,category_id,photo) VALUES(${id},'${name}',${stock},${price}, ${category_id}, '${photo}')`);
}
const updateData = (id,data) => {
   const {name,stock,price} = data;
   return Pool.query(`UPDATE product SET name='${name}' ,stock=${stock}, price=${price} WHERE id='${id}'`);
}
const deleteData = id => {
   return Pool.query(`DELETE FROM product where id='${id}'`);
}
 module.exports = {selectData, insertData,updateData,deleteData,selectDatabyid}
 
 