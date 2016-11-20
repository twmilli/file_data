import express from "express";
var router = express.Router();
import multer from 'multer';

var upload = multer();

router.get('/favicon.ico', function(req, res){
   res.sendStatus(200); 
});

router.get('/', (req,res) => {
    res.sendFile('index.html');
});

router.post('/file-upload', upload.single('user-file'), (req,res) => {
    
    if (req.file == undefined){
        res.json({
            size: undefined
        });
    }
    else{
        var size = req.file.size;
        res.json({
            "size": size
        });
    }

});

module.exports = router;