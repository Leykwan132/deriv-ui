////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Urgent data
export type Urgent = {
  id: number;
  buyer_name: string;
  seller_name: string;
  assignee_name: string;
  status: string;
  created_at: string;
  category: string;
};

// Mock urgent data store
export const fakeUrgents = {
  records: [] as Urgent[], // Holds the list of urgent objects

  // Initialize with sample data
  initialize() {
    this.records = [
      {
        id: 1,
        buyer_name: 'Billy Joe',
        seller_name: 'Tommy Woo',
        assignee_name: 'Joshua Lee',
        status: 'In Progress',
        created_at: '2024-02-08',
        category: 'Buyer not paid'
      },
      {
        id: 2,
        buyer_name: 'George Doe',
        seller_name: 'Quincy Woo',
        assignee_name: 'Ricky Lee',
        status: 'Done',
        created_at: '2024-02-07',
        category: 'Seller not released'
      }
    ];
  },

  // Get all urgent with optional category filtering and search
  async getAll({
    categories = [],
    search
  }: {
    categories?: string[];
    search?: string;
  }) {
    let urgents = [...this.records];

    // Filter urgents based on selected categories
    if (categories.length > 0) {
      urgents = urgents.filter((urgent) =>
        categories.includes(urgent.category)
      );
    }

    // Search functionality across multiple fields
    if (search) {
      urgents = matchSorter(urgents, search, {
        keys: ['name', 'description', 'category']
      });
    }

    return urgents;
  },

  // Get paginated results with optional category filtering and search
  async getUrgents({
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
    const allUrgents = await this.getAll({
      categories: categoriesArray,
      search
    });
    const totalUrgents = allUrgents.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedUrgents = allUrgents.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_urgents: totalUrgents,
      offset,
      limit,
      urgents: paginatedUrgents
    };
  },

  // Get a specific urgent by its ID
  async getUrgentById(id: number) {
    await delay(1000); // Simulate a delay

    // Find the urgent by its ID
    const urgent = this.records.find((urgent) => urgent.id === id);

    if (!urgent) {
      return {
        success: false,
        message: `Urgent with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Urgent with ID ${id} found`,
      urgent
    };
  }
};

// Initialize sample urgents
fakeUrgents.initialize();
