import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "@/lib/mongodb";

type ResponseData = {
  message: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  await clientPromise;

  res.status(200).json({ message: "Hello from Next.js!" });
}
