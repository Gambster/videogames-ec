import mongoDB, { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise: MongoClient;

if (!uri) {
  throw new Error("Please add your mongoDB URI to your env file!");
}

client = new MongoClient(uri, options);

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  clientPromise = client.connect();
}

export default clientPromise;
