import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/services/mongodb";
import Product from "@/lib/types/product";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  const mongoClient = await clientPromise;
  const database = mongoClient.db("videogames");
  const collection = database.collection("catalogue");
  const documents = await collection.find({});
  console.log({ documents });

  res.json(documents);
}
