var mongoose = require('mongoose');

var AppmntSchema = new mongoose.Schema({
    content: {
        type: String,
        required: [true, "Content is required."]
    },
    
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, { timestamps: true });

module.exports = mongoose.model('Appmnt', AppmntSchema)