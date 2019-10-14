const animals = require('./data/animals');
const connection = require('./data/mongoConnection');

async function main() {
	const sasha = await animals.create("Sasha", "Dog");
	console.log("Sasha the dog has been added!");

	const lucy = await animals.create("Dog");
	console.log("Lucy the dog has been added!");

	const all = await animals.getAll();
	console.log(all);

	const duke = await animals.create("Duke", "Walrus");
	console.log("Duke the walrus has been added!");

	const sashita = await animals.rename(sasha._id, "Sashita");
	console.log(sashita);

	const remove_lucy = await animals.remove(lucy._id);

	const all2 = await animals.getAll();
	console.log(all2);

	const db = await connection();
  	await db.serverConfig.close();
}

main().catch(error => {
	console.log(error);
});
