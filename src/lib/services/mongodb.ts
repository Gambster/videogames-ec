import mongoDB, { MongoClient } from "mongodb";

declare global {
  var _mongoClientPromise: any;
}

const uri = process.env.MONGODB_URI;
const options = {};
let client;
let clientPromise: any;

if (!uri) {
  throw new Error("Please add your mongoDB URI to your env file!");
}

if (process.env.NODE_ENV === "development") {
  client = new MongoClient(uri, options);
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
