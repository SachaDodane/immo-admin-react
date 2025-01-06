# Immo Admin React

Application d'administration immobilière développée avec React et Vite.

## Description

Cette application permet de gérer les biens immobiliers, les locataires et les propriétaires. Elle est construite avec React et utilise Vite comme outil de build.

## Prérequis

- Node.js (v18 ou supérieur)
- Docker et Docker Compose
- Git

## Installation

### Installation locale

1. Cloner le repository
```bash
git clone https://github.com/SachaDodane/immo-admin-react.git
cd immo-admin-react
```

2. Installer les dépendances
```bash
npm install
```

3. Créer le fichier .env
```bash
cp .env.exemple .env
```

4. Lancer l'application en mode développement
```bash
npm run dev
```

### Installation avec Docker

1. Cloner le repository
```bash
git clone https://github.com/SachaDodane/immo-admin-react.git
cd immo-admin-react
```

2. Construire et démarrer les conteneurs
```bash
docker-compose up --build
```

L'application sera accessible à l'adresse : http://localhost:5173

## Structure du projet

```
immo-admin-react/
├── src/               # Code source de l'application
├── public/            # Fichiers statiques
├── docker-compose.yml # Configuration Docker Compose
├── Dockerfile        # Configuration Docker
└── README.md         # Documentation
```

## Workflow Git

Ce projet suit les principes de GitFlow :

1. La branche principale est `main`
2. La branche de développement est `develop`
3. Pour chaque nouvelle fonctionnalité :
   - Créer une branche `feature/*` depuis `develop`
   - Développer la fonctionnalité
   - Créer une Pull Request vers `develop`

## Technologies utilisées

- React
- Vite
- Tailwind CSS
- Docker

## Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request
