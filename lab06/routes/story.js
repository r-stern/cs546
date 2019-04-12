const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
	try {
		const storyData = {
			"storyTitle": "spring forward",
			"story": "It's 3am right now but it should be 2am.\nI lost an hour and I'm very mad about it. \nAlso, I don't know what else to say, but I really wish I had that hour back."
		}
		res.json(storyData);
	} catch (e) {
		res.status(500).send()
	}
});

module.exports = router;
