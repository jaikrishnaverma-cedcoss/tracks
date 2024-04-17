// posts.js

import clientPromise from "../../../lib/mongodb";

export default async function handler(req: any, res: any) {
	const client = await clientPromise;
	const db = client.db("tracktrack");
	switch (req.method) {
		case "POST":
			let bodyObject = JSON.parse(req.body);
			let myPost = await db.collection("users").insertOne(bodyObject);
			res.json({ h: "Sdfsdf" });
			break;
		case "GET":
			const allPosts = await db.collection("users").find({}).toArray();
			res.json({
				status: 200,
				data: [
					{
						sAS: "ASAS",
					},
				],
			});
			break;
	}
}
