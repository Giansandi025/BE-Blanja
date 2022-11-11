const multer = require('multer');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'./upload')
    },
    filename: function(req,file,cb){
        const uniq = Date.now()+Math.round(Math.random()*1E9)
        cb(null,file.fieldname+'-'+uniq+'.png')   
    }
})

const uploadPicture = multer({
    fileFilter: (req, file, cb) => {
      if (file.mimetype === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg') {
        cb(null, true);
      } else {
        cb(null, false);
        return cb(new Error('Only Format .png, .jpg and .jpeg allowed!'));
      }
    }
  })

const upload = multer({storage, uploadPicture})

module.exports = upload