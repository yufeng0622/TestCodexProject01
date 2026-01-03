# Pixel Art Quiz Game

A retro-style quiz game built with React + Vite, featuring pixel art aesthetics and Google Sheets backend integration.

## 🎮 Features
- **Pixel Art Design**: 2000s arcade style interface.
- **Dynamic Content**: Questions loaded from Google Sheets via Google Apps Script.
- **Avatar System**: Unique pixel avatars using DiceBear API.
- **Leaderboard**: Scores tracked in Google Sheets.

## 🛠️ Setup & Development

### 1. Prerequisites
- Node.js (v18+)
- A Google Account for Sheets & Script

### 2. Installation
```bash
npm install
```

### 3. Environment Variables
Copy `.env.example` to `.env` and fill in your values:
```bash
cp .env.example .env
```
- `VITE_GOOGLE_APP_SCRIPT_URL`: Your deployed Web App URL from Google Apps Script.
- `VITE_PASS_THRESHOLD`: Number of correct answers needed to pass.
- `VITE_QUESTION_COUNT`: Number of questions per round.

### 4. Running Locally
```bash
npm run dev
```

## 🚀 Deployment (GitHub Pages)

This project is configured to automatically deploy to GitHub Pages using GitHub Actions.

### Setup Steps
1.  Go to your GitHub Repository **Settings** -> **Secrets and variables** -> **Actions**.
2.  Add the following **Repository secrets**:
    -   `VITE_GOOGLE_APP_SCRIPT_URL`: Your GAS Web App URL.
    -   (Optional) `VITE_PASS_THRESHOLD`
    -   (Optional) `VITE_QUESTION_COUNT`
    *(Note: You can also add these as "Variables" if they are not sensitive)*
3.  Go to **Settings** -> **Pages**.
4.  Under "Build and deployment", set **Source** to **GitHub Actions**.
5.  Push your code to the `main` branch. The action will run and deploy automatically.

## 📜 Backend Setup (Google Sheets)
1. Create a new Google Sheet.
2. Create two tabs: `Questions` and `Responses`.
3. Open **Extensions** -> **Apps Script**.
4. Paste the backend code (provided in `server/Code.gs` - *to be added*).
5. Deploy as **Web App** with access set to "Anyone".
