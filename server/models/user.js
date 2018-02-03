var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [4, 'Length is required.']
    },

    appmnts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Appmnt"
    }]

}, { timestamps: true});

module.exports = mongoose.model('User', UserSchema);