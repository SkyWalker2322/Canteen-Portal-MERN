const express = require('express');
const router = express.Router();

// Items models
const Vendor = require('../models/vendorinfo');

// Get all the items
router.get('/', (req, res) => {
    Vendor.find()
        .sort({ date: -1 })
        .then( vendor => res.json(vendor))
});

// Create new item
router.post('/register', (req, res) => {
    const newVendor = new Vendor({
        name: req.body.name,
        email: req.body.email,
        contact_no: req.body.con_no,
        shopName: req.body.shop,
        opentime: req.body.open,
        cloetime: req.body.close
    }); 
    console.log(req.body)    
    newVendor.save()
        .then(vendor => {res.status(200).json(vendor)})
        .catch(err => {res.status(400).send(err)})
});

// Delete an item
router.delete('/:id',(req,res) => {
    Vendor.findById(req.params.id)
        .then(vendor => vendor.remove()
            .then(() => res.json({success: true}))
            .catch(err => res.json({success: false})))
        .catch(err => res.status(404).json({success: false}))
});

// Update an item
// router.put('/:id', (req,res) => {
//     Item.findById(req.params.id)
//         .then(item => item.)
// })

module.exports = router;