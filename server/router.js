import express from "express";
var router = express.Router();

router.get('/', (req,res) => {
    res.sendFile('index.html');
});

router.post('/file-upload', (req,res) => {
    console.log(req.body);
    console.log(req.files);
    res.send("test");
});

module.exports = router;