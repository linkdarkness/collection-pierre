const fs = require('fs');

async function updateModels() {
  const affiliateTag = 'default';
  const apiUrl = `https://chaturbate.com/api/public/affiliates/onlinemodels/?wm=${affiliateTag}&limit=30`;

  try {
    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'application/json, text/plain, */*',
        'Accept-Language': 'fr-FR,fr;q=0.9,en-US;q=0.8,en;q=0.7'
      }
    });

    if (!response.ok) {
      throw new Error(`Erreur serveur Chaturbate: ${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('Les données reçues ne sont pas un tableau valide.');
    }

    // Écriture du fichier à la racine
    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
    console.log(`data.json généré avec succès ! (${data.length} modèles récupérés)`);

  } catch (error) {
    console.error('Erreur durant l\'exécution :', error.message);
    
    // Génère un fichier fallback pour éviter de laisser le site sans données
    const fallbackData = [];
    fs.writeFileSync('./data.json', JSON.stringify(fallbackData), 'utf8');
    process.exit(1);
  }
}

updateModels();
