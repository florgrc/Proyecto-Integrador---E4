/*const path = require('path');
const multer = require ('multer');

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null, path.resolve(__dirname, '../../public/images/users'))
    },
    filename: function(req,file,cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({storage: storage})

module.exports = upload
<div class="row">
               <div class="col-25">
                  <label for="idProduct">ID del producto</label>
               </div>
               <div class="col-75">
                  <input type="number" id="idProduct" name="idProduct" value=<%= newProductID%> readonly>
                  <br>
               </div>
            </div>*/
