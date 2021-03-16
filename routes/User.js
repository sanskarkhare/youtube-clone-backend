const express = require('express');
const router = express.Router();

const { User } = require('../models');

router.post('/', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const googleId = req.body.googleId;
    const channelName = req.body.channelName;
    const profilePictureurl = req.body.imageUrl;

    User.create({
        name: name,
        email:email,
        googleId: googleId,
        channelName: channelName,
        profilePictureurl: profilePictureurl,
    }).catch((err) => {
        console.log(err);
    })

    res.send("inserted into database")
})

module.exports = router;