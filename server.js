import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Configuration de la connexion MySQL
const connection = mysql.createConnection({
  host: 'db', // Nom du service dans docker-compose
  user: 'immo_user',
  password: 'immo_password',
  database: 'immo_admin',
  port: 3306
});

// Test de la connexion
connection.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à MySQL:', err);
    return;
  }
  console.log('Connecté à MySQL!');
});

// Route de test pour récupérer les propriétés
app.get('/api/properties', (req, res) => {
  connection.query('SELECT * FROM property', (err, results) => {
    if (err) {
      console.error('Erreur lors de la requête:', err);
      res.status(500).json({ error: 'Erreur lors de la requête' });
      return;
    }
    res.json(results);
  });
});

// Route de test pour récupérer les options
app.get('/api/options', (req, res) => {
  connection.query('SELECT * FROM `option`', (err, results) => {
    if (err) {
      console.error('Erreur lors de la requête:', err);
      res.status(500).json({ error: 'Erreur lors de la requête' });
      return;
    }
    res.json(results);
  });
});

const PORT = 3002;
app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
