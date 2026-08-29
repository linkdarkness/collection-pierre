const fs = require('fs');

async function updateModels() {
  // Remplace par ton URL Google Apps Script exacte
  const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxtbjuaqxsqbajrehnP0nJLX6c3mxNxgTSVUGarlg0EBYE3bQ0kOtXt65BMyaIbfdbBQA/exec';

  try {
    const response = await fetch(googleScriptUrl);

    if (!response.ok) {
      throw new Error(`Erreur HTTP: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Données reçues invalides.');
    }

    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
    console.log(`data.json généré avec succès ! (${data.length} modèles)`);

  } catch (error) {
    console.error('Erreur :', error.message);
    process.exit(1);
  }
}

updateModels();
