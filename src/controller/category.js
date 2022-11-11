const ModelCategory = require("./../model/category");

const CategoryController = {
    insert:(req,res,next)=>{
        ModelCategory.insertData(req.body)
        .then((result) => res.send({ status: 200, message: `berhasil memasukan data`, data: result.rows}))
        .catch((err) => res.send({ message: "error", err }));  
    },
    update:(req,res,next)=>{
        ModelCategory.updateData(req.params.id, req.body)
        .then((result) => res.send({ status: 200, message: `berhasil ubah data`}))
        .catch((err) => res.send({ message: "error", err }));
    },
    delete:(req,res,next)=>{
        ModelCategory.deleteData(req.params.id)
         .then((result) => res.send({ status: 200, message: `berhasil hapus data` }))
         .catch((err) => res.send({ message: "error", err }));
    },
    getCategory:(req,res,next)=>{
        ModelCategory.selectData()
        .then((result) => res.send({ result: result.rows }))
        .catch((err) => res.send({ message: "error", err }));
    },
    getCategoryDetail:(req,res,next)=>{
        ModelCategory.selectDatabyid(req.params.id)
        .then((result) => res.send({ result: result.rows }))
        .catch((err) => res.send({ message: "error", err }));
    },
}

exports.CategoryController = CategoryController