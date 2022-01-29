const mongoose = require('mongoose');
const Partner = require('./partner');
const Schema = mongoose.Schema;

require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        require: true
    },
    cost: {
        type: Currency,
        require: true,
        min: 0
    },
    featured: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

const Promotion = mongoose.model('Promotion', promotionSchema);

module.exports = Promotion;