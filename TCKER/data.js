const ticketsData = [
  {
    id: 1,
    user: 'User1',
    title: 'Issue with login',
    status: 'Open',
    comments: '3',
    priority: 'High',
    category: 'Bug',
    private: 'Yes',
    approved: 'No',
    date: '2024-09-15',
    actions: '<button>Edit</button> <button>Delete</button>',
  },
  {
    id: 2,
    user: 'User2',
    title: 'Feature request',
    status: 'Closed',
    comments: '0',
    priority: 'Medium',
    category: 'Feature',
    private: 'No',
    approved: 'Yes',
    date: '2024-09-14',
    actions: '<button>Edit</button> <button>Delete</button>',
  },
  // Add more data as needed
];

// Sample data for admins
const adminsData = [
  {
    id: 1,
    name: 'Admin1',
    role: 'Moderator',
    status: 'Active',
    lastActive: '2024-09-15 10:00 AM',
  },
  {
    id: 2,
    name: 'Admin2',
    role: 'Admin',
    status: 'Inactive',
    lastActive: '2024-09-14 03:00 PM',
  },
  // Add more data as needed
];

// Export data
export { ticketsData, adminsData };
