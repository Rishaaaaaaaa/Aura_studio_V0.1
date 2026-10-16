// server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();

// Enable CORS for all local development ports
app.use(cors({
    origin: '*', 
    methods: ['GET', 'POST']
}));

app.use(express.json());

// Check if API key is present
if (!process.env.GEMINI_API_KEY) {
    console.error("CRITICAL ERROR: GEMINI_API_KEY is missing from your .env file!");
} else {
    console.log("✅ Gemini API Key found.");
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const CATALOG = [
  { id: 'velvet-sofa', name: 'Velvet Cloud Sofa', price: 120450, specs: 'Deep Olive Velvet' },
  { id: 'brass-lamp', name: 'Minimalist Brass Arc Lamp', price: 4900, specs: 'Brushed Brass' },
  { id: 'oak-coffee-table', name: 'Solstice Oak Coffee Table', price: 89000, specs: 'Natural White Oak' },
  { id: 'kyoto-lounge-chair', name: 'Bouclé Kyoto Lounge Chair', price: 115320, specs: 'Oatmeal Bouclé' }
];

app.post('/api/chat', async (req, res) => {
  const { message } = req.body;
  
  if (!message) {
      return res.status(400).json({ reply: "Message is required." });
  }

  const userText = message.toLowerCase();
  console.log(`\n💬 Received user message: "${message}"`);

  try {
    if (userText.includes('generate') || userText.includes('custom')) {
      console.log("🎨 Triggered custom generation mock.");
      return res.json({
        reply: "Here is a custom AI-generated concept based on your description:",
        imageUrl: "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?auto=format&fit=crop&w=400&q=80" 
      });
    }

    console.log("🤖 Asking Gemini...");
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = `You are Aura AI, a helpful interior design assistant. 
    Here is our current catalog with prices in INR: ${JSON.stringify(CATALOG)}. 
    Reply in short, elegant sentences. Recommend products from the catalog if they match the user's need.
    User asks: "${message}"`;

    const result = await model.generateContent(prompt);
    const reply = result.response.text();
    
    console.log("✅ Gemini replied successfully.");
    res.json({ reply, imageUrl: null });

  } catch (error) {
    console.error("❌ BACKEND ERROR:", error);
    res.status(500).json({ reply: "Sorry, my design circuits are taking a break. (Check terminal for error)" });
  }
});

const PORT = 5000;
app.listen(PORT, '127.0.0.1', () => {
    console.log(`🚀 Server running on http://127.0.0.1:${PORT}`);
});

module.exports = app;