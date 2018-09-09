const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const tokenSchema = new Schema({
    _id: {
        type: String,
        required: true,
    },
    tokens: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "ERC20Contract",
        required: true,
        index: true
    }]
}, {
    versionKey: false,
});

tokenSchema.plugin(mongoosePaginate);

export const Token = mongoose.model("Token", tokenSchema );
