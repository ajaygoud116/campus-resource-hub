import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function NoteModal({ note, onClose, fetchNotes }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note?.title || "");
  const [content, setContent] = useState(note?.content || "");

  // Update local state if note changes
  if (note && title !== note.title) setTitle(note.title);
  if (note && content !== note.content) setContent(note.content);

  const handleUpdate = async () => {
    try {
      await axiosInstance.put(`/notes/${note._id}`, { title, content });
      fetchNotes(); // refresh notes
      setIsEditing(false);
      onClose();
    } catch (err) {
      alert(err.response?.data?.message || "Failed to update note");
    }
  };

  if (!note) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow w-96 relative">
        <button
          className="absolute top-2 right-2 text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>

        {isEditing ? (
          <div className="flex flex-col gap-2">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 rounded"
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border p-2 rounded"
            />
            <button
              onClick={handleUpdate}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        ) : (
          <div>
            <h2 className="text-xl font-bold mb-2">{note.title}</h2>
            <p>{note.content}</p>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-2 bg-yellow-500 px-3 py-1 rounded text-white"
            >
              Edit
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default NoteModal;
