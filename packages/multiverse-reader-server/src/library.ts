import * as fs from 'fs-extra';
import * as Zip from 'node-7z';
import * as path from 'path';

export const watchFolders = (folders: string[]) => {
  folders.forEach((folder) => {
  });
};

export interface UnarchivedFile {
  name: string;
  path: string;
}

export const IMAGE_TYPES = ['.jpg', '.jpeg', '.png', '.gif', '.tiff', '.bmp'];
export const ARCHIVE_TYPES = ['.cbr', '.cbz'];

export const unarchiveFile = async (source, destination): Promise<UnarchivedFile> => {
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

  return  {
    name: outputFolderName,
    path: path.join(path.join(destination, outputFolderName)),
  };
};

export const getAllFiles = (folder, fileTypes: string[]) =>
  fs.readdirSync(folder).reduce((files, file) => {
    const name = path.join(folder, file);
    const isDirectory = fs.statSync(name).isDirectory();
    return isDirectory ? [...files, ...getAllFiles(name, fileTypes)] : [...files, name];
  }, [])
  .filter((file) => fileTypes.includes(path.extname(file)));
