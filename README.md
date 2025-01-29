# Interface d'Administration Immobilier (immo-admin-react)

Interface d'administration développée avec React pour la gestion immobilière.

## Description

Cette interface d'administration fait partie d'un ensemble de trois projets :
- API Backend (PHP/Slim 4)
- Interface d'administration (React) - Ce projet
- Interface client (Vue.js)

## Technologies Utilisées

- React 18+
- Vite
- Tailwind CSS
- Node.js
- Docker & Docker Compose
- JWT pour l'authentification

## Fonctionnalités

- Authentification administrateur
- Gestion des biens immobiliers (CRUD)
- Upload et gestion des images
- Interface responsive
- Tableau de bord administrateur
- Gestion des utilisateurs

## Installation

### Avec Docker (Recommandé)

1. Cloner le dépôt :
```bash
git clone https://github.com/SachaDodane/immo-admin-react.git
cd immo-admin-react
```

2. Créer le fichier `.env` :
```bash
cp .env.exemple .env
```

3. Configurer les variables d'environnement dans `.env`

4. Lancer les conteneurs Docker :
```bash
docker-compose up -d
```

L'interface sera disponible sur `http://localhost:3000`

### Installation Manuelle

1. Cloner le dépôt
2. Copier `.env.exemple` vers `.env`
3. Installer les dépendances :
```bash
npm install
```
4. Lancer en développement :
```bash
npm run dev
```

## Variables d'Environnement

Configuration requise dans le fichier `.env` :

- `VITE_API_URL` : URL de l'API backend
- `VITE_APP_PORT` : Port de l'application (défaut: 3000)

## Structure du Projet

```
immo-admin-react/
├── src/
│   ├── components/     # Composants React réutilisables
│   ├── pages/         # Pages de l'application
│   ├── services/      # Services (API, auth, etc.)
│   ├── store/         # État global de l'application
│   ├── styles/        # Styles CSS/Tailwind
│   └── utils/         # Fonctions utilitaires
├── public/           # Ressources statiques
└── docker/          # Configuration Docker
```

## GitFlow

Le projet suit la méthodologie GitFlow :

- `main` : Branche de production
- `develop` : Branche de développement
- `feature/*` : Branches de fonctionnalités
- `hotfix/*` : Branches de corrections urgentes

### Processus de développement :
1. Créer une branche feature : `git checkout -b feature/ma-fonctionnalite`
2. Développer la fonctionnalité
3. Créer une Pull Request vers `develop`
4. Après review, merger dans `develop`

## Scripts Disponibles

- `npm run dev` : Lance le serveur de développement
- `npm run build` : Compile le projet pour la production
- `npm run preview` : Prévisualise la version de production
- `npm run lint` : Vérifie le code avec ESLint

## Contribution

1. Fork le projet
2. Créer une branche feature
3. Commit les changements
4. Pousser la branche
5. Créer une Pull Request

## Licence

MIT
