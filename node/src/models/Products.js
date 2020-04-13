const { Schema, model } = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');


//Campos que pode ter e tipo dos valores que devem conter
const ProductSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);

module.exports = model('Product', ProductSchema);