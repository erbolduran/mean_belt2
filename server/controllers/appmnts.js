var session = require('express-session'),
    Appmnt  = require('../models/appmnt');

module.exports = {
    create: (req, res) => {
        console.log(req.body)
        const newAppmnt = new Appmnt(req.body);

        newAppmnt._user = session.user_id;

        newAppmnt.save((err) => {
            if(err) {
                return res.status(400).json(err);
            }
            return res.json(newAppmnt);
        });
    },

    getAll: (req, res) => {
        Appmnt.find({})
        .populate('_user')
        .exec((err, appmnts) => {
            if (err) {
                return res.json(err.errors);
            }

            return res.json(appmnts)
        });
    }
}