const fs = require('fs');
const path = require('path');

function getIconNames() {
  const iconsFolder = './zondicons';
  const iconFiles = fs.readdirSync(iconsFolder);

  // Filter the SVG files and extract the icon names
  const iconNames = iconFiles
    .filter((file) => file.endsWith('.svg'))
    .map((file) => file.replace('.svg', ''));

  return iconNames;
}

function getIconData(iconName) {
  const iconPath = path.join('./zondicons', `${iconName}.svg`);
  const iconContent = fs.readFileSync(iconPath, 'utf-8');

  return {
    name: iconName,
    filename: `${iconName}.svg`,
    content: iconContent,
  };
}

function createIconDataJson() {
  const iconNames = getIconNames();
  const iconData = iconNames.map((iconName) => getIconData(iconName));

  const jsonContent = JSON.stringify(iconData, null, 2);
  fs.writeFileSync('iconData.json', jsonContent);

  console.log('Icon data JSON file created successfully.');
}

createIconDataJson();
