# 📸 Photo Gallery

Une application mobile de galerie photo développée avec **Ionic** et **Angular**.

## Fonctionnalités
- Prendre des photos avec la caméra
- Afficher les photos dans une galerie
- Sauvegarde locale des images

## Prérequis
- [Node.js](https://nodejs.org/)
- [Ionic CLI](https://ionicframework.com/docs/cli)
- [Android Studio](https://developer.android.com/studio) (pour Android)

## Installation
```bash
npm install
```

## Lancer en mode développement (web)
```bash
ionic serve
```

## Build et exécution sur Android
```bash
ionic build
ionic cap add android   # (à faire une seule fois)
ionic cap copy android
ionic cap open android  # Ouvre Android Studio
```

Dans Android Studio, lance l'application sur un émulateur ou un appareil physique.

## Structure du projet
- `src/app/` : code source principal
- `src/assets/` : images et ressources
- `android/` : projet Android natif (généré par Capacitor)

## Notes
- Les dossiers comme `node_modules/` et `android/` sont ignorés par Git et doivent être régénérés après un clone.
- Pour toute question, consulte la documentation Ionic ou demande de l'aide !
