// import { parse } from "cookie";
// import { verify } from "jsonwebtoken";

const secret = process.env.NEXT_PUBLIC_API_ACCESSTOKEN;

export const authMiddleware = (handler) => async (req, res) => {
  const access_token = req.headers.access_token;

  if (!access_token || access_token != secret) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  try {
    return handler(req, res);
  } catch (error) {
    return res.status(401).json({ error: "Unauthorized" });
  }
};
