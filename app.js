// const http = require('http');
// const port = 5000;

// const app = http.createServer((req, res) => {
//     res.end('Hello World!');
// });

// app.listen(port, () => {
//     console.log(`Server is running on port`);
// })


// const fs = require('fs');

// fs.writeFileSync('fileOne.txt', 'This is first line....');

// const data = fs.readFileSync('fileOne.txt', 'utf-8');
// console.log(data);

// fs.writeFileSync('fileOne.txt', 'This is second line....');

// const data1 = fs.readFileSync('fileOne.txt', 'utf-8');
// console.log(data1);


const fs = require('fs').promises;
const path = require('path');

const filePath = path.join(__dirname, 'fileOne.txt');
const dirPath = path.join(__dirname, 'myDirectory');
const newFilePath = path.join(dirPath, 'newFile.txt');


async function manageFile() {
    try {
        // Create a directory
        await fs.mkdir(dirPath, { recursive: true });
        console.log('Directory created successfully.');

        //Write a file
        await fs.writeFile(filePath, 'Hello, this is an example text');
        console.log('File created successfully.');

        // Read the file
        const data = await fs.readFile(filePath, 'utf-8');
        console.log('File content:', data);

        // Append to the file
        await fs.appendFile(filePath, '\nAppent more content.');
        console.log('Content appended.');

        //Rename the file
        await fs.rename(filePath, newFilePath);
        console.log('File renamed.');

        // Delete the file
        await fs.unlink(newFilePath);
        console.log('File deleted.');

        // Delete the directory
        await fs.rmdir(dirPath, {recursive: true , force: true});
        console.log('Directory deleted.');
    } catch (error) {
        console.error('Error:', error);
}
}

manageFile();