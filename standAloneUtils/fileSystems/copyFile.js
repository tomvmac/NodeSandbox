var fs = require('fs');

fs.createReadStream('c:/MyTemp/test.txt').pipe(fs.createWriteStream('c:/MyDocs/test.txt'));