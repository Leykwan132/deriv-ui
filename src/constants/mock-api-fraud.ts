////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { faker } from '@faker-js/faker';
import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Fraud data
export type Fraud = {
  id: number;
  buyer_name: string;
  seller_name: string;
  assignee_name: string;
  description: string;
  created_at: string;
  category: string;
};

// Mock fraud data store
export const fakeFrauds = {
  records: [] as Fraud[], // Holds the list of fraud objects

  // Initialize with sample data
  initialize() {
    this.records = [
      {
        id: 1,
        buyer_name: 'John Doe',
        seller_name: 'Emily K.',
        assignee_name: 'Jasmine Chong',
        description: 'Seller sent suspicious links before the transaction.',
        created_at: '2024-02-08',
        category: 'Actions Needed'
      },
      {
        id: 2,
        buyer_name: 'Jane Lily',
        seller_name: 'Smith L.',
        assignee_name: 'Jennie Kim',
        description: 'Seller sent suspicious messages to buyer.',
        created_at: '2024-02-09',
        category: 'Reviewing'
      },
      {
        id: 3,
        buyer_name: 'Alex Y',
        seller_name: 'Johnson M.',
        assignee_name: 'Lisa BP',
        description: 'Buyer sent suspicious links to seller.',
        created_at: '2024-02-03',
        category: 'Solved'
      },
      {
        id: 4,
        buyer_name: 'Jessica Lee',
        seller_name: 'Brown James',
        assignee_name: 'Rosie Anne',
        description: 'Seller sent suspicious Telegram link to buyer.',
        created_at: '2024-02-02',
        category: 'Solved'
      },
      {
        id: 5,
        buyer_name: 'Michael',
        seller_name: 'Julian White',
        assignee_name: 'Rachel Green',
        description: 'Buyer sent suspicious WhatsApp link to seller.',
        created_at: '2024-02-01',
        category: 'Solved'
      }
    ];
  },

  // Get all frauds with optional category filtering and search
  async getAll({
    categories = [],
    search
  }: {
    categories?: string[];
    search?: string;
  }) {
    let frauds = [...this.records];

    // Filter frauds based on selected categories
    if (categories.length > 0) {
      frauds = frauds.filter((fraud) => categories.includes(fraud.category));
    }

    // Search functionality across multiple fields
    if (search) {
      frauds = matchSorter(frauds, search, {
        keys: ['name', 'description', 'category']
      });
    }

    return frauds;
  },

  // Get paginated results with optional category filtering and search
  async getFrauds({
    page = 1,
    limit = 10,
    categories,
    search
  }: {
    page?: number;
    limit?: number;
    categories?: string;
    search?: string;
  }) {
    await delay(1000);
    const categoriesArray = categories ? categories.split('.') : [];
    const allFrauds = await this.getAll({
      categories: categoriesArray,
      search
    });
    const totalFrauds = allFrauds.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedFrauds = allFrauds.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_frauds: totalFrauds,
      offset,
      limit,
      frauds: paginatedFrauds
    };
  },

  // Get a specific fraud by its ID
  async getFraudById(id: number) {
    await delay(1000); // Simulate a delay

    // Find the fraud by its ID
    const fraud = this.records.find((fraud) => fraud.id === id);

    if (!fraud) {
      return {
        success: false,
        message: `Fraud with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Fraud with ID ${id} found`,
      fraud
    };
  }
};

// Initialize sample frauds
fakeFrauds.initialize();
