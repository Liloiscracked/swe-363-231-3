const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const copyFile = promisify(fs.copyFile);

if (process.argv.length !== 4) {
  console.log('Usage: node copy-files.js <source-directory> <target-directory>');
  process.exit(1);
}

const sourceDir = process.argv[2];
const targetDir = process.argv[3];
const allowedExtensions = ['.html', '.css','.js']; // Add your desired file extensions here

// Function to filter files by extension
function filterByExtension(file) {
  const ext = path.extname(file).toLowerCase();
  return allowedExtensions.includes(ext);
}

// Read the source directory
fs.readdir(sourceDir, (err, files) => {
  if (err) {
    console.error('Error reading source directory:', err);
    process.exit(1);
  }

  // Create the target directory if it doesn't exist
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Filter and copy files
  files.forEach(async (file) => {
    const sourceFilePath = path.join(sourceDir, file);
    if (fs.statSync(sourceFilePath).isFile() && filterByExtension(file)) {
      const targetFilePath = path.join(targetDir, file);
      try {
        await copyFile(sourceFilePath, targetFilePath);
        console.log(`Copied: ${file}`);
      } catch (copyErr) {
        console.error(`Error copying ${file}:`, copyErr);
      }
    }
  });
});
