const fs = require('fs');
const path = require('path');

const directory = path.join(__dirname, 'src');

function replaceInFile(filepath) {
    try {
        const content = fs.readFileSync(filepath, 'utf8');
        let newContent = content.replace(/AI Building/g, 'New Academic Block');
        newContent = newContent.replace(/AI Department/g, 'New Academic Block');
        
        if (newContent !== content) {
            fs.writeFileSync(filepath, newContent, 'utf8');
            console.log(`Updated ${filepath}`);
        }
    } catch (e) {
        console.error(`Error processing ${filepath}:`, e);
    }
}

function walkWalk(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const filepath = path.join(dir, file);
        const stat = fs.statSync(filepath);
        if (stat && stat.isDirectory()) {
            walkWalk(filepath);
        } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
            replaceInFile(filepath);
        }
    }
}

walkWalk(directory);
console.log('Done');
