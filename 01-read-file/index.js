const process = require('process');
const fs = require('fs');
const path = require('path');

const pathToFile = path.join(__dirname, 'text.txt');
const readStream = fs.createReadStream(pathToFile, { encoding: 'utf8' });
readStream.on('data', (data) => {
  process.stdout.write(data);
});
