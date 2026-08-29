const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/models', async (req, res) => {
  try {
    const affiliateTag = 'linkdarkness123';
    const response = await fetch(`https://chaturbate.com/api/public/affiliates/onlinemodels/?wm=${affiliateTag}&limit=20`);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Erreur lors de la récupération des données" });
  }
});

app.listen(3000, () => console.log('Serveur démarré sur http://localhost:3000'));
