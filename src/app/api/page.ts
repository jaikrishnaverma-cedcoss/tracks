// posts.js
import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	const client = await clientPromise;
	const db = client.db("tracktrack");
	const users = await db.collection("users").find({}).toArray();
	res.json({
		status: 200,
		data: users,
	});
};
export const config = {
	api: {
		bodyParser: false, // Defaults to true. Setting this to false disables body parsing and allows you to consume the request body as stream or raw-body.
		responseLimit: false, // Determines how much data should be sent from the response body. It is automatically enabled and defaults to 4mb.
		externalResolver: true, // Disables warnings for unresolved requests if the route is being handled by an external resolver like Express.js or Connect. Defaults to false.
	},
};
