const fs = require('fs/promises');
const path = require('path');

const copyDir = async (source, destination) => {
  await fs.rm(destination, { recursive: true, force: true });
  await fs.mkdir(destination, { recursive: true });
  const files = await fs.readdir(source, { withFileTypes: true });
  files.forEach((file) => {
    if (file.isFile()) {
      fs.copyFile(
        path.join(source, file.name),
        path.join(destination, file.name),
      );
    }
  });
};

copyDir(path.join(__dirname, 'files'), path.join(__dirname, 'files-copy'));
