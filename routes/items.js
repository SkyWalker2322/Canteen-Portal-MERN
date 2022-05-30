const express = require('express');
const router = express.Router();

// Items models
const Item = require('../models/item');

// Get all the items
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then( item => res.json(item))
});

// Create new item
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        cost: req.body.cost,
        description: req.body.desc
    }); 
    console.log(req.body)    
    newItem.save()
        .then(Item => {res.status(200).json(Item)})
        .catch(err => {res.status(400).send(err)})
});

// Delete an item
router.delete('/:id',(req,res) => {
    Item.findById(req.params.id)
        .then(item => item.remove()
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