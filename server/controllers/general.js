import User from "../models/User.js";

export const getUser = async (req, rrs) => {
  try {
    const { id } = req.params;
    const User = await User.findById(id);
    res.status(200).json(User);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};
