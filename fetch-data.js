const fs = require('fs');

async function updateModels() {
  // Remplace bien par ton URL d'application Web Google (terminant par /exec)
  const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbzCnTVBr68vot7fDAgyoiRZyKUpDMC1wTPzjTlARIL76nRLUceOOhQpiZCleprGRnZ3TA/exec';

  try {
    const response = await fetch(googleScriptUrl, {
      method: 'GET',
      redirect: 'follow' // Force le suivi de la redirection Google
    });

    const rawText = await response.text();

    // Vérifie si la réponse commence par du HTML au lieu du JSON
    if (rawText.trim().startsWith('<')) {
      throw new Error("L'URL Google renvoie du HTML. Vérifie que le déploiement est réglé sur 'Qui a accès: N'importe qui'.");
    }

    const data = JSON.parse(rawText);

    if (!Array.isArray(data)) {
      throw new Error('Les données reçues ne forment pas un tableau.');
    }

    fs.writeFileSync('./data.json', JSON.stringify(data, null, 2), 'utf8');
    console.log(`data.json généré avec succès ! (${data.length} modèles)`);

  } catch (error) {
    console.error('Erreur :', error.message);
    process.exit(1);
  }
}

updateModels();
