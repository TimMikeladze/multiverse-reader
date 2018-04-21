import * as fs from 'fs-extra';
import * as path from 'path';

const LIBRARY_PATH = path.join(__dirname, '..', '..', '..', 'library');
const CACHE_PATH = path.join(LIBRARY_PATH, '.cache');
const TESTA_PATH = path.join(LIBRARY_PATH, 'TestA 1-5 (2000)');
const TESTA_ONE_PATH = path.join(TESTA_PATH, 'TestA 001 (2000).cbz');

import {
  unarchiveFile,
} from '../src';

describe('unarchiveFile', () => {
  it('can unarchive a cbr/cbr file', async () => {
    const outputFolderName = await unarchiveFile(TESTA_ONE_PATH, CACHE_PATH);
    const outputFolderPath = path.join(CACHE_PATH, outputFolderName);
    expect(fs.existsSync(outputFolderPath)).toBeTruthy();
    fs.remove(outputFolderPath);
  });
});
