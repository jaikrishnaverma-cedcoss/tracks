import { NextResponse } from "next/server";
import clientPromise from "../../../lib/mongodb";
export async function GET() {
	const client = await clientPromise;
	const db = client.db("tracktrack");
	const users = await db.collection("users").find({}).toArray();
	return NextResponse.json({ users });
}

export async function POST(req) {
	try {
		// Extract user data from request body
		const { username, email } = req.body;

		// Connect to MongoDB
		const client = await clientPromise;
		const db = client.db("tracktrack");

		// Insert user into the database
		const result = await db.collection("users").insertOne({ username, email });

		// Respond with success message
		return NextResponse.json({ success: true, message: "data inserted" });
	} catch (error) {
		// Respond with error message
		console.error(error);
		return NextResponse.json({
			success: false,
			message: "Internal server error",
		});
	}
}

export async function PUT() {
	return NextResponse.json({ message: "Hello - PUT" });
}

export async function DELETE() {
	return NextResponse.json({ message: "Hello - DELETE" });
}
