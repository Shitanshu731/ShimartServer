import User from "../models/User.js";
export const adminMiddleware = async (req, res, next) => {
  const { id } = req.query;
  if (!id) {
    return res.status(400).json({ message: "ID is required" });
  }
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  if (user.role !== "admin") {
    return res.status(400).json({ message: "Access denied. Admins only." });
  }
  next();
};
