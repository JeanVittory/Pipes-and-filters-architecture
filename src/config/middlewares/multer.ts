import multer from 'multer';
import path from 'path';
import { FILE_EXTENSION } from '../../constants';

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname.toLowerCase());
    if (ext !== FILE_EXTENSION)
      return cb(new Error('Only .txt files are allowed!'));
    return cb(null, true);
  },
});

export default upload.single('file');
