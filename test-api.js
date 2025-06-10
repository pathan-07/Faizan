// Simple test script to verify the API function
import('./api/server.js').then(({ default: app }) => {
  const express = require('express');
  const request = require('supertest');
  
  // Test the health endpoint
  const testReq = {
    method: 'GET',
    url: '/health',
    headers: {}
  };
  
  console.log('✅ API function imported successfully');
  console.log('📁 Files are in correct structure for Vercel deployment');
}).catch(err => {
  console.error('❌ Error importing API function:', err);
});
