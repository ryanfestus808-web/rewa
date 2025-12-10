import { 
  type User, type InsertUser,
  type ContactMessage, type InsertContactMessage,
  type NewsletterSubscription, type InsertNewsletterSubscription,
  type PartnerInquiry, type InsertPartnerInquiry,
  type UserRegistration, type InsertUserRegistration,
  type BusinessRegistration, type InsertBusinessRegistration,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Users
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact Messages
  createContactMessage(message: InsertContactMessage): Promise<ContactMessage>;
  getContactMessages(): Promise<ContactMessage[]>;
  
  // Newsletter Subscriptions
  createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription>;
  getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined>;
  
  // Partner Inquiries
  createPartnerInquiry(inquiry: InsertPartnerInquiry): Promise<PartnerInquiry>;
  getPartnerInquiries(): Promise<PartnerInquiry[]>;
  
  // User Registrations
  createUserRegistration(registration: InsertUserRegistration): Promise<UserRegistration>;
  getUserRegistrationByEmail(email: string): Promise<UserRegistration | undefined>;
  
  // Business Registrations
  createBusinessRegistration(registration: InsertBusinessRegistration): Promise<BusinessRegistration>;
  getBusinessRegistrationByEmail(email: string): Promise<BusinessRegistration | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private contactMessages: Map<string, ContactMessage>;
  private newsletterSubscriptions: Map<string, NewsletterSubscription>;
  private partnerInquiries: Map<string, PartnerInquiry>;
  private userRegistrations: Map<string, UserRegistration>;
  private businessRegistrations: Map<string, BusinessRegistration>;

  constructor() {
    this.users = new Map();
    this.contactMessages = new Map();
    this.newsletterSubscriptions = new Map();
    this.partnerInquiries = new Map();
    this.userRegistrations = new Map();
    this.businessRegistrations = new Map();
  }

  // Users
  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Contact Messages
  async createContactMessage(message: InsertContactMessage): Promise<ContactMessage> {
    const id = randomUUID();
    const contactMessage: ContactMessage = {
      ...message,
      id,
      createdAt: new Date(),
    };
    this.contactMessages.set(id, contactMessage);
    return contactMessage;
  }

  async getContactMessages(): Promise<ContactMessage[]> {
    return Array.from(this.contactMessages.values());
  }

  // Newsletter Subscriptions
  async createNewsletterSubscription(subscription: InsertNewsletterSubscription): Promise<NewsletterSubscription> {
    const id = randomUUID();
    const newsletterSubscription: NewsletterSubscription = {
      ...subscription,
      id,
      subscribedAt: new Date(),
      isActive: true,
    };
    this.newsletterSubscriptions.set(id, newsletterSubscription);
    return newsletterSubscription;
  }

  async getNewsletterSubscriptionByEmail(email: string): Promise<NewsletterSubscription | undefined> {
    return Array.from(this.newsletterSubscriptions.values()).find(
      (sub) => sub.email === email,
    );
  }

  // Partner Inquiries
  async createPartnerInquiry(inquiry: InsertPartnerInquiry): Promise<PartnerInquiry> {
    const id = randomUUID();
    const partnerInquiry: PartnerInquiry = {
      ...inquiry,
      id,
      createdAt: new Date(),
    };
    this.partnerInquiries.set(id, partnerInquiry);
    return partnerInquiry;
  }

  async getPartnerInquiries(): Promise<PartnerInquiry[]> {
    return Array.from(this.partnerInquiries.values());
  }

  // User Registrations
  async createUserRegistration(registration: InsertUserRegistration): Promise<UserRegistration> {
    const id = randomUUID();
    const userRegistration: UserRegistration = {
      ...registration,
      id,
      createdAt: new Date(),
    };
    this.userRegistrations.set(id, userRegistration);
    return userRegistration;
  }

  async getUserRegistrationByEmail(email: string): Promise<UserRegistration | undefined> {
    return Array.from(this.userRegistrations.values()).find(
      (reg) => reg.email === email,
    );
  }

  // Business Registrations
  async createBusinessRegistration(registration: InsertBusinessRegistration): Promise<BusinessRegistration> {
    const id = randomUUID();
    const businessRegistration: BusinessRegistration = {
      ...registration,
      id,
      createdAt: new Date(),
    };
    this.businessRegistrations.set(id, businessRegistration);
    return businessRegistration;
  }

  async getBusinessRegistrationByEmail(email: string): Promise<BusinessRegistration | undefined> {
    return Array.from(this.businessRegistrations.values()).find(
      (reg) => reg.email === email,
    );
  }
}

export const storage = new MemStorage();
