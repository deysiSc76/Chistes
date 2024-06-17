const Joke = require("../models/jokes.model");

//Obtener todos los chistes
module.exports.findAllJokes = (req, res) => {
    return Joke.find()
        .then((jokes) => {
            return res.status(200).json(jokes);
        })
        .catch((error) => {
            return res.status(500).json({mensaje: 'Algo salió super mal', error})
        });
}

module.exports.findJoke = (req, res) => {
	Joke.findOne({ _id: req.params.id })
		.then(oneSingleJoke => res.json({ joke: oneSingleJoke }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
    const newJoke = {
        joke_name: req.body.joke_name,
        joke: req.body.joke,
        
    };

    return Joke.create(newJoke)
        .then((jokeConId) => {
            return res.status(201).json(jokeConId);
        })
        .catch((error) => {
            return res.status(500).json({mensaje: 'Algo salió mal', error})
        });
}
module.exports.deleteJoke = (req, res) => {
    return Joke.deleteOne({joke_name: req.body.joke_name})
        .then((jokeRemovido) => {
            console.log(jokeRemovido);
            return res.status(204).end();
        })
        .catch((error) => {
            return res.status(500).json({mensaje: 'Algo salió mal', error})
        });
}
module.exports.updateJoke = (req, res) => {
    const joke_name = req.body.joke_name;
    const camposParaActualizar={
        joke: req.body.joke
    }
    return Joke.updateOne({joke_name: req.params.joke_name}, camposParaActualizar)
    .then((jokeActualizado) => {
        console.log(jokeActualizado);
        return res.status(204).end();
    })
}