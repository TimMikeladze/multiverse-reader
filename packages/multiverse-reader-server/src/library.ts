import * as Zip from 'node-7z';
import * as path from 'path';

export const unarchiveFile = async (source, destination): Promise<string> => {
  const task = new Zip();

  // Figure out the name of the folder that the archive will be extracted into
  const outputFolderName = await new Promise<string>((resolve, reject) => {
    task.list(source).progress((files) => {
      if (files.length === 0) {
        reject('archive is empty');
      }
      resolve(files[0].name);
    });
  });

  const res = await task.extractFull(source, destination);

  return outputFolderName;
};
