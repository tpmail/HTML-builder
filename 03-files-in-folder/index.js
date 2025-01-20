const { stat } = require('fs');
const fs = require('fs/promises');
const { stdout } = require('process');
const path = require('path');

const readInfo = async () => {
  const pathToFolder = path.join(__dirname, 'secret-folder');
  const files = await fs.readdir(pathToFolder, { withFileTypes: true });
  files.forEach((file) => {
    stat(path.join(pathToFolder, file.name), (err, stats) => {
      if (err) {
        stdout.write(err.message);
        return;
      }
      if (stats.isFile()) {
        stdout.write(
          `${path.parse(path.join(pathToFolder, file.name)).name} - ${path
            .extname(file.name)
            .slice(1)} - ${stats.size} bytes\n`,
        );
      }
    });
  });
};

readInfo();
