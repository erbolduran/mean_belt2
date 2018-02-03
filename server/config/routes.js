var path = require ('path'),
   users = require ('../controllers/users');
 appmnts = require ('../controllers/appmnts');
sessions = require ('../controllers/sessions');

module.exports = (app) => {
    app.post('/users', users.create);

    app.get('/sessions', sessions.find);
    app.delete('/sessions', sessions.delete);

    app.post('/appmnts', appmnts.create)
    app.get('/appmnts', appmnts.getAll)
    
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'))
    });
}