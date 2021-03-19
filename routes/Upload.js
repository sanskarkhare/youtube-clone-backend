const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: './videos',
    filename: (req, file, cb) => {
        cb(null, "VIDEO-", + Date.now() + path.extname(file.originalname))
    },
});

const upload = multer({
    storage: storage,
}).single('video');

router.post('/video', upload, (req, res) => {
    res.send("Hey, you have uploaded a new video just.")
})

module.exports = router;