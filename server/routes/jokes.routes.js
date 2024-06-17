const ControladorJokes = require('./../controllers/jokes.controllers');
module.exports =(app)=>{
    app.get('/api/jokes',ControladorJokes.findAllJokes);
    app.get('/api/joke/:id',ControladorJokes.findJoke);
    
    app.post('/api/add/joke',ControladorJokes.createNewJoke); 
    app.delete('/api/remove/joke', ControladorJokes.deleteJoke);
    app.put('/api/update/joke/:joke_name', ControladorJokes.updateJoke)
}