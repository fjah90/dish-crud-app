const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// Define collection and schema
let Dish = new Schema({
    name: {
        type: String
    },
    color: {
        type: String
    },
    price: {
        type: Number
    },
    date: {
        type: String
    },
    start_activity: {
        type: String
    }
}, {
    collection: 'dishes'
})
module.exports = mongoose.model('dish', Dish)