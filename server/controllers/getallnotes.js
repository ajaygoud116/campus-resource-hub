// ✅ GET route: fetch all uploaded notes
import Note from "../models/Note.js";

export const getNotes = async (req, res) => {
  try {
    // fetch all notes from MongoDB, sorted newest first
    const notes = await Note.find().sort({ createdAt: -1 });
    return res.status(200).json(notes);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Failed to fetch notes", error: err.message });
  }
};
