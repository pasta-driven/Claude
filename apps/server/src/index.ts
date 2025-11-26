import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Claude Whiteboard API is running' });
});

// API Routes (to be implemented)
app.get('/api', (req, res) => {
  res.json({
    message: 'Claude Whiteboard API',
    version: '0.1.0',
    endpoints: {
      health: '/health',
      api: '/api',
    },
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 Tech Stack: Node.js + Express + TypeScript`);
  console.log(`✅ US-001 completed: Tech stack defined`);
});

export default app;
