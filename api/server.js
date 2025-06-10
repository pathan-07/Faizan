
import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? true  // Allow all origins in production, or specify your domain
    : ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// API routes - Remove the /api prefix since Vercel handles this
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.post('/contact', (req, res) => {
  const { name, email, subject, message } = req.body;
  
  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ 
      success: false, 
      error: 'Name, email, and message are required' 
    });
  }

  // Here you would typically send an email or store the contact request
  console.log('Contact form submission:', { name, email, subject, message });
  
  res.json({ 
    success: true, 
    message: 'Message sent successfully!' 
  });
});

// Catch all handler
app.use('*', (req, res) => {
  res.status(404).json({ error: 'API endpoint not found' });
});

// Export the Express app as a Vercel serverless function
export default app;
