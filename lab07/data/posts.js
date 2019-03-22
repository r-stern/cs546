const mongoCollections = require("../config/mongoCollections");
const posts = mongoCollections.posts;
const animals = require("./animals");
const uuid = require("node-uuid");

module.exports = {
	async create(title, author, content) {
		if (!title || typeof title !== "string") throw "you must provide a title";
		if (!author || typeof title !== "string") throw "you must provide an author";
		if (!content || typeof title !== "string") throw "you must provide content";

		const postCollection = await posts();

		const newPostInfo = {
			title: title,
			author: author,
			content: content,
		};

		const insertinfo = await postCollection.insertOne(newPostInfo);
		if (insertinfo.insertedCount === 0) throw "could not add new post";

		const newPostId = insertinfo.insertedId;

		const p = await this.get(newPostId);

		return p;
	},

	async getAllPosts() {
		const postCollection1 = await posts();
		return await postCollection1.find({}).toArray();
	},

	async getPostsByAuthor(author) {
		if (!author || typeof(author) !== "string") throw "no author provided";

		const postCollection2 = await posts();
		return await postCollection2.find({ author: author }).toArray();
	},

	async getPostsByTitle(title) {
		if (!title || typeof(title) !== "string") throw "no title provided";

		const postCollection3 = await posts();
		const apost = await postCollection3.findOne({ title: title }).toArray();
		if (!apost) throw "post not found";
		return apost;
	},

	async getPostsById(id) {
		if (!id || typeof(id) !== "string") throw "error no id provided";

		const postCollection4 = await posts();
		const post = await postCollection4.findOne({ _id: id });

		if (!post) throw "post not found";
		return post;
	},

	async update(id, updatedPost) {
		const postCollection5 = await posts();

		const updatedPostData = {};

		if (updatedPost.author) {
			updatedPostData.author = updatedPost.author;
		}

		if (updatedPost.title) {
			updatedPostData.title = updatedPost.title;
		}

		if (updatedPost.content) {
			updatedPostData.content = updatedPost.content;
		}	

		let updateCommand = {
			$set: updatedPostData
		};
		const query = {
			_id: id
		};
		await postCollection5.updateOne(query, updateCommand);

		return await this.getPostById(id);	
	},

	async delete(id) {
		const postCollection6 = await posts();

		const deletionInfo = await postCollection6.removeOne({ _id: id });
		if (deletionInfo.deletedCount === 0) {
			throw "could not delete post with id of ${id}";
		}
	},

}
