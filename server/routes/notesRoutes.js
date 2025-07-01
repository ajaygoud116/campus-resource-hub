import express from "express";
import upload from "../middleware/upload.js";  // ✅ use the config, don’t redefine
import authMiddleware from "../middleware/authMiddleware.js";
import { uploadNote } from "../controllers/notesController.js";
import { getNotes } from "../controllers/getallnotes.js";
import { deleteNote } from "../controllers/deletenote.js";
import { updateNote } from "../controllers/update.js";

const router = express.Router();

router.post("/upload", authMiddleware,upload.single("file"), uploadNote);
router.get("/",getNotes);
router.delete("/:id",authMiddleware, deleteNote);
router.put("/:id",updateNote);
export default router;


// the above code can be re-written as :

// import express from "express";
// import multer from "multer";
// import { uploadNote } from "../controllers/notesController.js";

// const router = express.Router();

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => cb(null, "uploads/"),
//   filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname)
// });

// const upload = multer({ storage });

// router.post("/upload", upload.single("file"), uploadNote);

// export default router;

// C:\Users\Ajay Goud\Downloads\Campus Resource Hub\Campus-Resource-Hub\server