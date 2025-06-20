import mongoose from "mongoose";
//MongoDB stores the note info (metadata).
const noteSchema = new mongoose.Schema({  //mongoBD stores the uploaded file information in document type, the schema of that document is:
  title: { type: String, required: true },
  subject: { type: String, required: true },
  semester: { type: String, required: false },
  uploaderName: { type: String, required: false },
  fileUrl: { type: String, required: true }, // path or S3 URL
  fileName: { type: String, required: true },
  size: { type: Number },
  createdAt: { type: Date, default: Date.now }
});

const Note = mongoose.model("Note", noteSchema); //Compiles the schema into a Model called Note. A Model is a class with which you create and query documents. Models are the primary API you interact with in your application.
export default Note;                                // in or case models means documents



// total blueprint
// 1) User uploads file → React sends a POST request to the backend.
// 2) Node + Express receive it:
//     Middleware (like multer) handles the file upload.
//     Server uploads file to AWS S3 / Firebase.
//     Saves metadata to MongoDB.
// 3) MongoDB stores the note info.
// 4) Backend sends a response → “File uploaded successfully”.
// 5) React updates UI to show the new note.
