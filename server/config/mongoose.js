var mongoose = require('mongoose'),
    db_name  = 'belt3';

mongoose.connect(`mongodb://localhost/${db_name}`);