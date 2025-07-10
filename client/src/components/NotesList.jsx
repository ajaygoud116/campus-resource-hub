import { useState } from "react";
import axiosInstance from "../api/axiosInstance";
import NoteModal from "./NoteModal";

function NotesList({ notes, fetchNotes }) {
  const [selectedNote, setSelectedNote] = useState(null);

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await axiosInstance.delete(`/notes/${id}`);
      fetchNotes();
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to delete note");
    }
  };

  return (
    <div>
      <h2 className="text-xl mb-2">Your Notes</h2>
      {notes.length === 0 ? (
        <p>No notes found</p>
      ) : (
        <ul>
          {notes.map((note) => (
            <li
              key={note._id}
              className="mb-2 p-2 border rounded bg-gray-50 flex justify-between items-center cursor-pointer"
            >
              <div onClick={() => setSelectedNote(note)}>
                <h3 className="font-bold">{note.title}</h3>
                <p>{note.content.slice(0, 50)}{note.content.length > 50 ? "..." : ""}</p>
              </div>
              <button
                onClick={() => handleDelete(note._id)}
                className="bg-red-500 text-white px-2 py-1 rounded h-fit"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      <NoteModal note={selectedNote} onClose={() => setSelectedNote(null)} />
    </div>
  );
}

export default NotesList;
