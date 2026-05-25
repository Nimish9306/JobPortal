import multer from "multer";

const storage = multer.diskStorage({});


const fileFilter = (
  req,
  file,
  cb
) => {

  if (
    file.mimetype === "application/pdf"
  ) {
    cb(null, true);

  } else {

    cb(
      new Error("Only PDF allowed"),
      false
    );
  }
};
const upload = multer({
  storage,
  fileFilter,
    limits: {
    fileSize: 1024 * 1024 * 5
  }
});

export default upload;