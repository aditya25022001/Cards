const fs = require('fs');
const path = require('path');

// Path to the cards folder
const cardsFolder = path.join(__dirname, 'cards-frontend', 'src', 'assets', 'cards');

// Mapping function to convert card names
function convertCardName(filename) {
  const nameWithoutExt = filename.replace(/\.(png|jpg|jpeg)$/, '');
  const ext = filename.match(/\.(png|jpg|jpeg)$/)?.[0] || '';

  // Mapping for ranks
  const rankMap = {
    'ace': '1',
    'jack': 'J',
    'queen': 'Q',
    'king': 'K',
    'black_joker': 'BJ',
    'red_joker': 'RJ',
    'back': 'BACK'
  };

  // Mapping for suits
  const suitMap = {
    'hearts': 'H',
    'diamonds': 'D',
    'clubs': 'C',
    'spades': 'S'
  };

  // Handle special cases
  if (nameWithoutExt === 'back' || nameWithoutExt === 'back@2x') {
    return { name: nameWithoutExt, withExt: nameWithoutExt + ext };
  }

  // Handle jokers
  if (nameWithoutExt === 'black_joker') {
    return { name: 'BJ', withExt: 'BJ' + ext };
  }
  if (nameWithoutExt === 'red_joker') {
    return { name: 'RJ', withExt: 'RJ' + ext };
  }

  // Parse regular cards (e.g., "4_of_spades")
  const parts = nameWithoutExt.split('_of_');
  if (parts.length === 2) {
    const rank = rankMap[parts[0]] || parts[0];
    const suit = suitMap[parts[1]] || parts[1];
    return {
      name: rank + suit,
      withExt: rank + suit + ext
    };
  }

  return { name: nameWithoutExt, withExt: nameWithoutExt + ext };
}

// Read all files in the cards folder
fs.readdir(cardsFolder, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  // Filter for files (not directories)
  const cardFiles = files.filter(file => {
    const filePath = path.join(cardsFolder, file);
    return fs.statSync(filePath).isFile();
  });

  // Create two lists: one with extensions, one without
  const cardsWithExtension = [];
  const cardsWithoutExtension = [];

  cardFiles.forEach(file => {
    const converted = convertCardName(file);
    cardsWithoutExtension.push(converted.name);
    cardsWithExtension.push(converted.withExt);

    // Rename the file
    const oldPath = path.join(cardsFolder, file);
    const newPath = path.join(cardsFolder, converted.withExt);
    
    fs.renameSync(oldPath, newPath);
    console.log(`Renamed: ${file} → ${converted.withExt}`);
  });

  console.log('\n--- Files renamed successfully ---');
  console.log('\nCards with file extensions:');
  console.log(cardsWithExtension);
  console.log(`\nCards without file extensions:`);
  console.log(cardsWithoutExtension);
  console.log(`\nTotal cards: ${cardsWithExtension.length}`);
});
