import { useState } from "react";
import axiosInstance from "../api/axiosInstance";

function UploadForm({ fetchNotes }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/notes", { title, content });
      setTitle("");
      setContent("");
      fetchNotes(); // refresh notes list
    } catch (err) {
      console.log(err);
      alert(err.response?.data?.message || "Failed to upload note");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-4 border rounded bg-white shadow">
      <h2 className="text-xl mb-2">Add a Note</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        className="mb-2 p-2 border rounded w-full"
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
        className="mb-2 p-2 border rounded w-full"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Upload
      </button>
    </form>
  );
}

export default UploadForm;
