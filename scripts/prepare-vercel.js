// This script prepares your server code for deployment on Vercel
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Create api directory in the dist folder
const apiDir = path.join(__dirname, '../dist/api');
if (!fs.existsSync(apiDir)) {
  fs.mkdirSync(apiDir, { recursive: true });
}

// Create a server.js file that will be used as the Vercel Serverless Function
const serverHandlerContent = `
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-domain.vercel.app'] 
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// Contact form handling endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  // Here you would typically send an email or store the contact request
  // For now, we're just returning success response
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Message sent successfully!' 
  });
});

// Catch all handler for API routes
app.use('/api/*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Export the Express app as a Vercel serverless function
export default app;
`;

// Write the serverless handler to the api directory
fs.writeFileSync(path.join(apiDir, 'server.js'), serverHandlerContent);

console.log('✅ Vercel deployment files created successfully!');
