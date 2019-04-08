const aboutData = require("./about");
const storyData = require("./story");
const educationData = require("./education");

const constructorMethod = app => {
	app.use("/about", aboutData);
	app.use("/story", storyData);
	app.use("/education", educationData);

	app.use('*', (req,res) => {
		res.status(404).json({error: "Not Found"})
	});
};

module.exports = constructorMethod;
