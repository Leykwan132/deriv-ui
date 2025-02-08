////////////////////////////////////////////////////////////////////////////////
// 🛑 Nothing in here has anything to do with Nextjs, it's just a fake database
////////////////////////////////////////////////////////////////////////////////

import { matchSorter } from 'match-sorter'; // For filtering

export const delay = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

// Define the shape of Dispute data
export type Dispute = {
  id: number;
  buyer_name: string;
  seller_name: string;
  status: string;
  created_at: string;
  category: string;
};

// Mock dispute data store
export const fakeDisputes = {
  records: [] as Dispute[], // Holds the list of dispute objects

  // Initialize with sample data
  initialize() {
    this.records = [
      {
        id: 1,
        buyer_name: 'Angel Chan',
        seller_name: 'Emma Lii',
        status: 'In Progress',
        created_at: '2024-02-08',
        category: 'Buyer not paid'
      },
      {
        id: 2,
        buyer_name: 'Clover Mint',
        seller_name: 'Smith Peter',
        status: 'In Progress',
        created_at: '2024-02-08',
        category: 'Seller not released'
      },
      {
        id: 3,
        buyer_name: 'Queen Zhang',
        seller_name: 'Lina Ng ',
        status: 'Done',
        created_at: '2024-02-07',
        category: 'Buyer underpaid'
      },
      {
        id: 4,
        buyer_name: 'Lee Anne',
        seller_name: 'Sara Pooh',
        status: 'Done',
        created_at: '2024-02-07',
        category: 'Buyer overpaid'
      }
    ];
  },

  // Get all disputes with optional category filtering and search
  async getAll({
    categories = [],
    search
  }: {
    categories?: string[];
    search?: string;
  }) {
    let disputes = [...this.records];

    // Filter disputes based on selected categories
    if (categories.length > 0) {
      disputes = disputes.filter((dispute) =>
        categories.includes(dispute.category)
      );
    }

    // Search functionality across multiple fields
    if (search) {
      disputes = matchSorter(disputes, search, {
        keys: ['name', 'description', 'category']
      });
    }

    return disputes;
  },

  // Get paginated results with optional category filtering and search
  async getDisputes({
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
    const allDisputes = await this.getAll({
      categories: categoriesArray,
      search
    });
    const totalDisputes = allDisputes.length;

    // Pagination logic
    const offset = (page - 1) * limit;
    const paginatedDisputes = allDisputes.slice(offset, offset + limit);

    // Mock current time
    const currentTime = new Date().toISOString();

    // Return paginated response
    return {
      success: true,
      time: currentTime,
      message: 'Sample data for testing and learning purposes',
      total_disputes: totalDisputes,
      offset,
      limit,
      disputes: paginatedDisputes
    };
  },

  // Get a specific dispute by its ID
  async getDisputeById(id: number) {
    await delay(1000); // Simulate a delay

    // Find the dispute by its ID
    const dispute = this.records.find((dispute) => dispute.id === id);

    if (!dispute) {
      return {
        success: false,
        message: `Dispute with ID ${id} not found`
      };
    }

    // Mock current time
    const currentTime = new Date().toISOString();

    return {
      success: true,
      time: currentTime,
      message: `Dispute with ID ${id} found`,
      dispute
    };
  }
};

// Initialize sample disputes
fakeDisputes.initialize();
