import multer from 'multer';
import path from 'path';
import { FILE_EXTENSION, MULTER_MESSAGE_ERROR_EXT_FILE } from '../../constants';

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname.toLowerCase());
    if (ext !== FILE_EXTENSION)
      return cb(new Error(MULTER_MESSAGE_ERROR_EXT_FILE));
    return cb(null, true);
  },
});

export default upload.single('file');
