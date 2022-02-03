const express = require('express');
const Certificate = require('../models/certificateModel');
const router = express.Router();

router
.get('/', function(req,res) {
    res.render('index')
})

router
.post('/search', async function(req,res) {
    let id = req.body.id;
    try {
        let certificate  = await Certificate.find({id: id});
        res.render('certificate', {
            certificate: certificate
        })
    }
    catch (error) {
        console.log(error)
        res.render('certificate', {
            error: error
        })
    }
    
})

module.exports = router;