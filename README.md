# Aura Studio 🪑✨

Aura Studio is a modern, full-stack luxury furniture e-commerce web application. It features a clean, high-end UI built with React, a persistent shopping cart, a mock secure checkout flow, and an intelligent Interior Design AI Assistant powered by Google's Gemini AI.

## 🌟 Features

*   **Modern UI/UX:** A tactile, elegant landing page and product catalog designed for luxury retail.
*   **Smart AI Assistant:** A built-in chatbot powered by Gemini (`gemini-1.5-flash`) that can recommend products from the catalog and mock custom furniture requests.
*   **Persistent Shopping Cart:** Slide-out cart drawer that synchronizes seamlessly with `localStorage`, keeping items secure across page reloads.
*   **Express Checkout:** A dedicated checkout page that pulls cart data, calculates GST (18%), and handles mock payment flows.
*   **Currency Integration:** Fully localized for the Indian market with INR (₹) formatting.

## 🛠️ Tech Stack

**Frontend (BASE):**
*   HTML5 / CSS3 (Custom Design System)
*   React 18 & Babel (via CDN for lightweight, build-free execution)
*   Lucide Icons

**Backend (Backend):**
*   Node.js & Express.js
*   Google Generative AI SDK (`@google/generative-ai`)
*   CORS & Dotenv

## 📂 Project Structure

```text
aura-studio/
├── Backend/
│   ├── .env                  # Environment variables (API Keys)
│   ├── package.json          # Node.js dependencies
│   └── server.js             # Express server and Gemini AI logic
└── BASE/
    ├── index.html            # Main landing page & catalog
    ├── checkout.html         # Secure checkout portal
    └── styles.css            # Global design system
```

## 🚀 Getting Started

To run this project locally on your machine, follow these steps:

### 1. Backend Setup
1. Open your terminal and navigate to the backend folder:
   ```bash
   cd Backend
   ```
2. Install the required Node dependencies:
   ```bash
   npm install express cors @google/generative-ai dotenv
   ```
3. Create a `.env` file in the `Backend` directory and add your Google Gemini API key:
   ```text
   GEMINI_API_KEY=your_api_key_here
   ```
4. Start the server:
   ```bash
   node server.js
   ```
   *The server will run on `http://127.0.0.1:5000`*

### 2. Frontend Setup
1. Open the `BASE` folder in your code editor (like VS Code).
2. Right-click on `index.html` and select **Open with Live Server** (requires the Live Server extension).
3. Alternatively, you can simply double-click `index.html` to open it in your browser.

## 🤝 Future Enhancements
*   Integrate a real payment gateway (like Razorpay or Stripe).
*   Connect the AI "custom generation" trigger to an image generation API (like OpenAI DALL-E 3 or Midjourney).
*   Migrate the product catalog to a database (MongoDB/PostgreSQL).