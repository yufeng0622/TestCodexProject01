# 像素藝術問答遊戲

一款使用 React + Vite 構建的復古風格問答遊戲，具有像素藝術美學並整合了 Google Sheets 後端。

## 🎮 功能特點
- **像素藝術設計**：2000 年代街機風格介面。
- **動態內容**：透過 Google Apps Script 從 Google Sheets 載入題目。
- **頭像系統**：使用 DiceBear API 產生獨特的像素頭像。
- **排行榜**：在 Google Sheets 中追蹤分數。

## 🛠️ 設定與開發

### 1. 前置需求
- Node.js (v18+)
- 用於 Sheets 和 Script 的 Google 帳戶

### 2. 安裝
```bash
npm install
```

### 3. 環境變數
複製 `.env.example` 到 `.env` 並填入您的數值：
```bash
cp .env.example .env
```
- `VITE_GOOGLE_APP_SCRIPT_URL`：您從 Google Apps Script 部署的 Web App URL。
- `VITE_PASS_THRESHOLD`：通過所需的正確答案數量。
- `VITE_QUESTION_COUNT`：每輪的題目數量。

### 4. 本地運行
```bash
npm run dev
```

## 🚀 部署 (GitHub Pages)

本專案配置為使用 GitHub Actions 自動部署到 GitHub Pages。

### 設定步驟
1.  前往您的 GitHub Repository **Settings** -> **Secrets and variables** -> **Actions**。
2.  新增以下 **Repository secrets**：
    -   `VITE_GOOGLE_APP_SCRIPT_URL`：您的 GAS Web App URL。
    -   (選填) `VITE_PASS_THRESHOLD`
    -   (選填) `VITE_QUESTION_COUNT`
    *(注意：如果這些不是敏感資訊，您也可以將其新增為 "Variables")*
3.  前往 **Settings** -> **Pages**。
4.  在 "Build and deployment" 下，將 **Source** 設定為 **GitHub Actions**。
5.  推送您的程式碼到 `main` 分支。Action 將會自動運行並部署。

## 📜 後端設定 (Google Sheets)
1. 建立一個新的 Google Sheet。
2. 建立兩個分頁：`Questions` 和 `Responses`。
3. 開啟 **Extensions** (擴充功能) -> **Apps Script**。
4. 貼上後端程式碼（提供於 `server/Code.gs` - *待新增*）。
5. 部署為 **Web App**，存取權限設定為 "Anyone" (任何人)。
