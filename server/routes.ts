import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertContactMessageSchema, 
  insertNewsletterSubscriptionSchema,
  insertPartnerInquirySchema,
  insertUserRegistrationSchema,
  insertBusinessRegistrationSchema,
} from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Contact Form
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      const message = await storage.createContactMessage(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Your message has been sent. We'll get back to you within 24 hours.",
        data: message 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to send message" });
      }
    }
  });

  // Newsletter Subscription
  app.post("/api/newsletter", async (req, res) => {
    try {
      const validatedData = insertNewsletterSubscriptionSchema.parse(req.body);
      
      // Check if already subscribed
      const existing = await storage.getNewsletterSubscriptionByEmail(validatedData.email);
      if (existing) {
        res.status(200).json({ 
          success: true, 
          message: "You're already subscribed to our newsletter!" 
        });
        return;
      }
      
      const subscription = await storage.createNewsletterSubscription(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Thanks for subscribing! You'll receive our latest updates.",
        data: subscription 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to subscribe" });
      }
    }
  });

  // Partner Inquiry
  app.post("/api/partners", async (req, res) => {
    try {
      const validatedData = insertPartnerInquirySchema.parse(req.body);
      const inquiry = await storage.createPartnerInquiry(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Thanks for your interest! Our partnerships team will contact you soon.",
        data: inquiry 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to submit inquiry" });
      }
    }
  });

  // User Registration (Personal)
  app.post("/api/register/personal", async (req, res) => {
    try {
      const validatedData = insertUserRegistrationSchema.parse({
        ...req.body,
        accountType: "personal",
      });
      
      // Check if email already exists
      const existing = await storage.getUserRegistrationByEmail(validatedData.email);
      if (existing) {
        res.status(409).json({ 
          success: false, 
          message: "An account with this email already exists" 
        });
        return;
      }
      
      const registration = await storage.createUserRegistration(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Welcome to REWA! Your account has been created.",
        data: { id: registration.id, email: registration.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create account" });
      }
    }
  });

  // Business Registration
  app.post("/api/register/business", async (req, res) => {
    try {
      const validatedData = insertBusinessRegistrationSchema.parse(req.body);
      
      // Check if email already exists
      const existing = await storage.getBusinessRegistrationByEmail(validatedData.email);
      if (existing) {
        res.status(409).json({ 
          success: false, 
          message: "A business account with this email already exists" 
        });
        return;
      }
      
      const registration = await storage.createBusinessRegistration(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "Welcome to REWA! Your business account has been created.",
        data: { id: registration.id, businessName: registration.businessName, email: registration.email }
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ success: false, errors: error.errors });
      } else {
        res.status(500).json({ success: false, message: "Failed to create business account" });
      }
    }
  });

  // Health check endpoint
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  return httpServer;
}
