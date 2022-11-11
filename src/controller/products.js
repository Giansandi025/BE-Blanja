const ModelProduct = require("./../model/products");
const { response } = require("./../middleware/common");


const ProductController = {
    insert:(req,res,next)=>{
        
        const Port = process.env.PORT
        const Host = process.env.HOST
        const photo = req.file.filename
        const url = `http://${Host}:${Port}/img/${photo}`
        req.body.photo = url
        req.body.stock = parseInt(req.body.stock)
        req.body.price = parseInt(req.body.price)


        ModelProduct.insertData(req.body)
        .then((result) => res.send({ status: 200, message: `berhasil memasukan data`, data: result.rows}))
        .catch((err) => res.send({ message: "error", err }));  
    },
    update:(req,res,next)=>{
        ModelProduct.updateData(req.params.id, req.body)
        .then((result) => res.send({ status: 200, message: `berhasil ubah data`}))
        .catch((err) => res.send({ message: "error", err }));
    },
    delete:(req,res,next)=>{
        ModelProduct.deleteData(req.params.id)
         .then((result) => res.send({ status: 200, message: `berhasil hapus data` }))
         .catch((err) => res.send({ message: "error", err }));
    },
    getProduct:(req,res,next)=>{   
        const search = req.query.search || '';
        const sorby = req.query.sorby || 'stock';
        const sort = req.query.sort || 'DESC';
        const limit = req.query.limit || 5;
        const page = req.query.page || 1;      
        ModelProduct.selectData(search,sorby,sort,limit,page)
        .then((result) => response(res, 200,true, result.rows,"get data success" ))
        .catch((err) => response(res, 404,false, err, "get data fail"));
    },
    getProductDetail:(req,res,next)=>{
        ModelProduct.selectDatabyid(req.params.id)
        .then((result) => {
            response(res, 200, true, result.rows,"get berhasil")
        })
        .catch((err) => response(res, 404,false, err, "get data fail"));
    },
}

exports.ProductController = ProductController