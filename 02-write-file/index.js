const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const fs = require('fs');
const path = require('path');

const readLine = readline.createInterface({ input, output });
const pathToFile = path.join(__dirname, 'text.txt');
const writeStream = fs.createWriteStream(pathToFile);

readLine.question('Enter some text:\n', (text) => {
  if (exit(text.trim())) {
    writeStream.write(`${text}\n`);
  }
});

readLine.on('line', (text) => {
  if (exit(text.trim())) {
    writeStream.write(`${text}\n`);
  }
});

readLine.on('SIGINT', () => {
  exit('exit');
});

const exit = (message) => {
  if (message === 'exit') {
    output.write('Good bye!\n');
    readLine.close();
    writeStream.end();
    return false;
  }
  return true;
};
