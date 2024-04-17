// pages/api/addUser.js

import { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../../lib/mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
	if (req.method === "POST") {
	} else {
		// Respond with method not allowed error
		res.setHeader("Allow", ["POST"]);
		res.status(405).json({ message: `Method ${req.method} Not Allowed` });
	}
};
