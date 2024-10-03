// Kashyap Mavani 
// 101413749

const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Create Logs directory if it doesn't exist
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
}

// Change the current process to the new Logs directory
process.chdir(logsDir);

// Create 10 log files and write some text into each file
for (let i = 0; i < 10; i++) {
    const fileName = `log${i}.txt`;
    fs.writeFileSync(fileName, `This is log file ${i}`);
    // Output the file names to console
    console.log(fileName);
}
