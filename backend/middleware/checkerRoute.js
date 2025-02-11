import jwt from "jsonwebtoken";
import User from ".././models/user.model.js";
 const checkerRoute = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;
    if (!token) {
      return res
        .status(401)
        .json({ error: "Unauthorized - no token provided " });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res.status(401).json({ error: "Unauthorized - invalid token" });
    }
    const user = await User.findById(decoded.userId).select("-password");
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }

    req.user = user;
    next();

  } catch (err) {
    console.log("Error in checker router")
    return res.status(500).json({ message: err.message });
  }
};
export {checkerRoute}