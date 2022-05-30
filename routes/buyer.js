const express = require('express');
const router = express.Router();

// Items models
const Buyer = require('../models/buyerinfo');

// Get all the items
router.get('/', (req, res) => {
    Buyer.find()
        .sort({ date: -1 })
        .then( buyer => res.json(buyer))
});

//login
router.get('/login',(req,res) => {
    const email = req.body.email
    const password = req.body.password
    Buyer.findOne({email, password})
        .then(buyer => {
            if(!buyer){
                return res.status(404).json({
                    error: "Email not found",
                });
            }
            else
            {
                res.send(buyer);
                return buyer;
            }
        })
})

// Create new item
router.post('/register', (req, res) => {
    const newBuyer = new Buyer({
        name: req.body.name,
        email: req.body.email,
        contact_no: req.body.con_no,
        age: req.body.age,
        batch: req.body.batch,
        password: req.body.password,
    }); 
    console.log(req.body)    
    newBuyer.save()
        .then(Buyer => {res.status(200).json(Buyer)})
        .catch(err => {res.status(400).send(err)})
});

// Delete an item
router.delete('/:id',(req,res) => {
    Buyer.findById(req.params.id)
        .then(buyer => buyer.remove()
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