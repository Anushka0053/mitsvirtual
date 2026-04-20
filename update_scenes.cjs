const fs = require('fs');
const path = 'src/data/scenes.ts';
let content = fs.readFileSync(path, 'utf8');
const normalScenes = ['ai-g-3', 'ai-g-r', 'ai-1', 'ai-2-1', 'ai-3-2', 'ai-g-6', 'ai-g-5', 'ai-g-4', 'ai-cabin-g', 'ai-g-2', 'ai-g-1', 'ai-g-wash', 'ai-g-stair'];
normalScenes.forEach(id => {
  const regex = new RegExp(`(id:\\s*'${id}'[\\s\\S]*?hotspots:\\s*\\[[\\s\\S]*?\\],)`, 'g');
  content = content.replace(regex, `$1\n    type: 'normal',`);
});
fs.writeFileSync(path, content);
