import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/services/mongodb";
import { authMiddleware } from "../../../../middleware/authMiddleware";

type ResponseData = {
  message: string;
};

const handler = async function (
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const mongoClient = await clientPromise;
  const database = mongoClient.db("videogames-ec");
  const collection = database.collection("catalogue");
  const documents = await collection.find({}).toArray();
  console.log({ documents });

  res.json(documents);
};

export default authMiddleware(handler);
