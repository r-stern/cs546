const express = require("express");
const router = express.Router();


router.get("/", (req,res) => {
	try {
		const aboutData = {
			"name": "rachel stern",
			"cwid": "10413057",
			"biography": "hi i'm rachel stern. i'm a cybersecurity major at stevens institute of technology, and i'm interested in art, finance, and agile.\nin my free time, i listen to music and play the piano.",
			"favoriteShows": ["friends", "the end of the f***ing world", "bojack horseman", "exo next door"],
			"hobbies": ["video games", "piano", "sleeping"]
		}
		res.json(aboutData);
	} catch (e) {
		res.status(500).send()
	}
});

module.exports = router;
