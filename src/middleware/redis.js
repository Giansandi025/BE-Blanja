const client = require('./../config/redis')
const {response} = require('./../middleware/common')


const hitCache = async(req,res,next) => {
    const id = req.params.id
    const product = client.get(`product/${id}`)
    if(!product){
        return response(res, 200, true, product,"get berhasil dari redis")
    }
    next()
}

const clearCache = async(req,res,next) => {
    const id = req.params.id
    client.del(`product/${id}`)
    next()
}

module.exports = {hitCache,clearCache}