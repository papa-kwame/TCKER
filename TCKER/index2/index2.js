let tickets = JSON.parse(localStorage.getItem('tickets')) || [
  {
    id: 1,
    subject: 'Fix Frontend Bug',
    category: 'Technical',
    priority: 'High',
    description: 'There is a bug in the frontend component.',
    assignment: 'Mike (S.I)',
    status: 'Open',
  },
  {
    id: 23,
    subject: 'Database Optimization',
    category: 'Technical',
    priority: 'High',
    description: 'Optimize the database queries for better performance.',
    assignment: 'Sara (DBA)',
    status: 'Open',
  },
  {
    id: 3,
    subject: 'User Authentication Issue',
    category: 'Technical',
    priority: 'High',
    description: 'Users are facing issues logging in.',
    assignment: 'John (Backend)',
    status: 'Pending',
  },
  {
    id: 4,
    subject: 'API Documentation Update',
    category: 'Technical',
    priority: 'Low',
    description: 'Update the API documentation for new endpoints.',
    assignment: 'Alice (Documentation)',
    status: 'Open',
  },
  {
    id: 5,
    subject: 'Mobile Responsiveness',
    category: 'Design',
    priority: 'Medium',
    description: 'Ensure the website is responsive on mobile devices.',
    assignment: 'Emma (Design)',
    status: 'Open',
  },
  {
    id: 6,
    subject: 'Payment Gateway Integration',
    category: 'Billing',
    priority: 'High',
    description: 'Integrate the new payment gateway.',
    assignment: 'Fred (FrontEnd)',
    status: 'In Progress',
  },
  {
    id: 7,
    subject: 'Customer Feedback Review',
    category: 'Support',
    priority: 'Medium',
    description: 'Review customer feedback for the last quarter.',
    assignment: 'Lisa (Support)',
    status: 'Open',
  },
  {
    id: 8,
    subject: 'Feature Request: Dark Mode',
    category: 'Feature',
    priority: 'Medium',
    description: 'Implement dark mode for the application.',
    assignment: 'Ryan (UI)',
    status: 'Open',
  },
  {
    id: 9,
    subject: 'SEO Audit',
    category: 'Marketing',
    priority: 'Low',
    description: 'Conduct an SEO audit for the website.',
    assignment: 'Tom (Marketing)',
    status: 'Open',
  },
  {
    id: 10,
    subject: 'Data Backup Setup',
    category: 'Infrastructure',
    priority: 'High',
    description: 'Set up a regular data backup schedule.',
    assignment: 'Jenna (Ops)',
    status: 'Open',
  },
];

if (localStorage.getItem('tickets') === null) {
  localStorage.setItem('tickets', JSON.stringify(tickets));
}

function updateTicketStatus(ticketId, newStatus) {
  const ticket = tickets.find((ticket) => ticket.id === ticketId);
  ticket.status = newStatus;
  localStorage.setItem('tickets', JSON.stringify(tickets));
  renderTickets();
}

function renderTickets(filter = 'all', searchQuery = '') {
  const ticketList = document.getElementById('ticketList');
  ticketList.innerHTML = '';

  let filteredTickets = tickets;

  if (filter !== 'all') {
    filteredTickets = filteredTickets.filter(
      (ticket) => ticket.status.toLowerCase() === filter.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredTickets = filteredTickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  filteredTickets.forEach((ticket) => {
    const ticketCard = `
        <div class="ticket-card">
          <h4>${ticket.subject}</h4>
          <p>Category: ${ticket.category}</p>
          <p>Assigned to: ${ticket.assignment}</p>
          <p class="status">Status: ${ticket.status}</p>
          <span class="priority ${getPriorityClass(ticket.priority)}">${
      ticket.priority
    }</span>
          <p>Description: ${ticket.description}</p>
        </div>
      `;
    ticketList.innerHTML += ticketCard;
  });
}

function getPriorityClass(priority) {
  switch (priority) {
    case 'High':
      return 'priority-high';
    case 'Medium':
      return 'priority-medium';
    case 'Low':
      return 'priority-low';
    default:
      return '';
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderTickets();
});

document.getElementById('filterStatus').addEventListener('change', function () {
  renderTickets(this.value);
});

document.getElementById('searchBar').addEventListener('input', function () {
  renderTickets('all', this.value);
});
