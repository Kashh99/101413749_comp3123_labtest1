// Kashyap Mavani 
// 101413749

const fs = require('fs');
const path = require('path');

// Path to the Logs directory
const logsDir = path.join(__dirname, 'Logs');

// Check if Logs directory exists
if (fs.existsSync(logsDir)) {
    // Read all files in the Logs directory
    fs.readdirSync(logsDir).forEach(file => {
        // Output the file names to delete
        console.log(`delete files ... ${file}`);
        // Remove each file
        fs.unlinkSync(path.join(logsDir, file));
    });
    // Remove the Logs directory
    fs.rmdirSync(logsDir);
}
