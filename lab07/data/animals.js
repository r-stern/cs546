const mongoCollections = require('./mongoCollections');
const animals = mongoCollections.animals;


module.exports = {
	async create(name, animalType) {
		if (!name) throw "You must provide a name";
		if (!animalType) throw "You must provide an animal type";

		const animalCollection = await animals();

		const newAnimalInfo = {
			name: name,
			animalType: animalType,
			"likes": [],
			"posts": []
		};

		const insertinfo = await animalCollection.insertOne(newAnimalInfo);
		if (insertinfo.insertedCount === 0) throw "could not add new animal";

		const newId = insertinfo.insertedId;

		const ani = await this.get(newId);

		return ani;
	},

	async getAll() {
		const animalCollection = await animals();

		const animals2 = await animalCollection.find({}).toArray();

		return animals2;
	},

	async get(id) {
		if (!id) throw "error: you must provide an id.";

		const animalCollection = await animals();
		const animalia = await animalCollection.findOne({ _id: id });

		if (animalia === null) throw "no animal with that id";

		return animalia;
	},

	async remove(id) {
		if (!id) throw "error: you must provide an id";

		const animalCollection = await animals();
		const deletionInfo = await animalCollection.removeOne({ _id: id });

		if (deletionInfo.deletedCount === 0) {
			throw `error: could not delete animal with id of ${id}`;
		}
	},

	async rename(id, newName) {
		if (!id) throw "error: you must provide an id";
		if (!newName) throw "error: you must provide a new name";

		const animalCollection = await animals();
		const updatedAnimal = {$set: {name: newName,
		}}

		const updateInfo = await animalCollection.updateOne({ _id: id }, updatedAnimal);
		if (updateInfo.modifiedCount === 0) {
			throw "error: could not update animal successfully";
		}

		return await this.get(id);
	}

	async like(animalid, postid, postTitle) {
		if (!animalid || !postid || !postTitle) throw "error: at least one argument is not provided.";
		if (typeof(animalid) !== "string" || typeof(postid) !== "string" || typeof(postTitle) !== "string") throw "error: all arguments must be strings.";

		return this.get(id).then(currentUser => {
			return animalCollection.updateOne(
				{ _id: id },
				{
					$addToSet: {
						posts: {
							id: postId,
							title: postTitle
						}
					}
				});
		});
	},

	async dislike(animalid, postid) {
		return this.get(id).then(currentUser => {
			return animalCollection.updateOne(
				{ _id: id },
				{
					$pull: {
						posts: {
							id: postid
						}
					}
				}
			);
		});
	}
}
