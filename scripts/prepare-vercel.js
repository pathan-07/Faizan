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
import { createServer } from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import the server code
import '../server/index.js';

// This is a helper file for Vercel deployment
// The actual server logic is in ../server/index.js
`;

// Write the serverless handler to the api directory
fs.writeFileSync(path.join(apiDir, 'server.js'), serverHandlerContent);

console.log('✅ Vercel deployment files created successfully!');
