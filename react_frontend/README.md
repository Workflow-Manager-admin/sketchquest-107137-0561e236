# Lightweight React Template for KAVIA

This project provides a minimal React template with a clean, modern UI and minimal dependencies.

## Features

- **Lightweight**: No heavy UI frameworks - uses only vanilla CSS and React
- **Modern UI**: Clean, responsive design with KAVIA brand styling
- **Fast**: Minimal dependencies for quick loading times
- **Simple**: Easy to understand and modify
- **Firebase Ready**: Integrated Firebase JS SDK for real-time features and authentication

## Firebase JS SDK Integration

This app is configured to use [Firebase](https://firebase.google.com/) for real-time multiplayer support and authentication.

### Config & Environment Setup

- **Secrets are NOT committed:** Configure your API keys and secrets via environment variables.
- Copy `.env.example` to `.env` in this directory and fill in actual secret values (see below).
- All Firebase config values are referenced via `REACT_APP_FIREBASE_...` environment variables.

### Quickstart

1. Install dependencies:
    ```bash
    npm install
    ```
2. Create `.env`:
    ```bash
    cp .env.example .env
    ```
   Fill in the Firebase config for your project.

3. Start the app as normal.

### Usage in Code

- The Firebase app and auth instance are initialized in `src/firebase.js`.
- Username-based (anonymous) authentication is provided via utility methods in `src/auth.js`:
  - `signInWithUsername(username)` – signs in anonymously and stores a username locally.
  - `getCurrentUsername()` – retrieves the locally-stored username.
  - `listenToAuthState(callback)` – subscribes to auth state changes.

### Environment Variables

See `.env.example` for required keys/structure.

| Variable                     | Purpose                  |
|------------------------------|--------------------------|
| REACT_APP_FIREBASE_API_KEY         | Firebase API Key         |
| REACT_APP_FIREBASE_AUTH_DOMAIN     | Auth Domain              |
| REACT_APP_FIREBASE_PROJECT_ID      | Project ID               |
| REACT_APP_FIREBASE_STORAGE_BUCKET  | Storage Bucket           |
| REACT_APP_FIREBASE_MESSAGING_SENDER_ID | Messaging Sender ID      |
| REACT_APP_FIREBASE_APP_ID          | App ID                   |
| REACT_APP_FIREBASE_MEASUREMENT_ID  | Measurement ID           |

**Never commit your filled `.env` file.**

## Getting Started

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## Customization

### Colors

The main brand colors are defined as CSS variables in `src/App.css`:

```css
:root {
  --kavia-orange: #E87A41;
  --kavia-dark: #1A1A1A;
  --text-color: #ffffff;
  --text-secondary: rgba(255, 255, 255, 0.7);
  --border-color: rgba(255, 255, 255, 0.1);
}
```

### Components

This template uses pure HTML/CSS components instead of a UI framework. You can find component styles in `src/App.css`. 

Common components include:
- Buttons (`.btn`, `.btn-large`)
- Container (`.container`)
- Navigation (`.navbar`)
- Typography (`.title`, `.subtitle`, `.description`)

## Learn More

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
