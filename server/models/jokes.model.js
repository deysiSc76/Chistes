const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
	joke_name:{
		type: String,
	} ,
	joke:{
		type: String,
	}
});

const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;