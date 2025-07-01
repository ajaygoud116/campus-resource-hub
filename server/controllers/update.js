import Note from "../models/Note.js";

// ✅ PUT route: update note details (like title, subject, semester)
export const updateNote = async (req, res) => {
  try {
    const noteId = req.params.id.trim();
    const { title, subject, semester } = req.body;

    const updatedNote = await Note.findByIdAndUpdate(
      noteId,
      { title, subject, semester },
      { new: true, runValidators: true } // returns updated document + validates schema
    );

    if (!updatedNote) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json({message: "Note updated successfully",note: updatedNote,});
  } catch (err) {
    console.error(err);
    return res.status(500).json({message: "Failed to update note",error: err.message,});
  }
};
