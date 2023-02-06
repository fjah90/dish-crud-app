const express = require('express');
const app = express();
const dishRoute = express.Router();
// Dish model
let Dish = require('../models/Dish');
// Add Dish
dishRoute.route('/create').post((req, res, next) => {
    Dish.create(req.body, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
});
// Get All Dishs
dishRoute.route('/').get((req, res) => {
    Dish.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})
// Get single dish
dishRoute.route('/read/:id').get((req, res) => {
    Dish.findById(req.params.id, (error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    })
})

// Update dish
dishRoute.route('/update/:id').put((req, res, next) => {
    Dish.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (error, data) => {
        if (error) {
            return next(error);
            console.log(error)
        } else {
            res.json(data)
            console.log('Data updated successfully')
        }
    })
})
// Delete dish
dishRoute.route('/delete/:id').delete((req, res, next) => {
    Dish.findOneAndRemove(req.params.id, (error, data) => {
        if (error) {
            return next(error);
        } else {
            res.status(200).json({
                msg: data
            })
        }
    })
})
module.exports = dishRoute;