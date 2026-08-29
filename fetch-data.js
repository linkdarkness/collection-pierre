const fs = require('fs');

async function updateModels() {
  const affiliateTag = 'default';
  const apiUrl = `https://chaturbate.com/api/public/affiliates/onlinemodels/?wm=${affiliateTag}&limit=30`;

  try {
    const response = await fetch(apiUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const data = await response.json();
    
    // Sauvegarde des données dans un fichier JSON local
    fs.writeFileSync('data.json', JSON.stringify(data, null, 2));
    console.log('Fichier data.json mis à jour avec succès !');
  } catch (error) {
    console.error('Erreur lors de la récupération :', error.message);
    process.exit(1);
  }
}

updateModels();
