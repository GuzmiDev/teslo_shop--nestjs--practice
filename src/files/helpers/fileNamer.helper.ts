import { v4 as uuid } from 'uuid';

export const fileNamer = (
  req: Express.Request,
  file: Express.Multer.File,
  callback: Function,
) => {
  if (!file) return callback(new Error('file is empty'), false);

  const fileExtensions = file.mimetype.split('/')[1];
  const fileName = `${uuid()}.${fileExtensions}`;

  callback(null, fileName);
};
