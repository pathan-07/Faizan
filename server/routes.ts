import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the portfolio website
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Contact form handling endpoint
  app.post("/api/contact", (req, res) => {
    const { name, email, subject, message } = req.body;
    
    // Here you would typically send an email or store the contact request
    // For now, we're just returning success response
    res.json({
      success: true,
      message: "Message received successfully!",
      data: { name, email, subject, message }
    });
  });

  const httpServer = createServer(app);
  return httpServer;
}
