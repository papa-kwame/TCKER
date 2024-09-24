let tickets = JSON.parse(localStorage.getItem('tickets')) || [];
const ticketModal = document.getElementById('ticketModal');
const newTicketBtn = document.getElementById('newTicketBtn');
const closeModal = document.getElementsByClassName('close')[0];
const TICKETS_PER_PAGE = 6; // Number of tickets displayed at a time
let currentTicketIndex = 0;

newTicketBtn.onclick = () => {
  ticketModal.style.display = 'block';
};

closeModal.onclick = () => {
  ticketModal.style.display = 'none';
};

window.onclick = (event) => {
  if (event.target === ticketModal) {
    ticketModal.style.display = 'none';
  }
};

document
  .getElementById('ticketForm')
  .addEventListener('submit', function (event) {
    event.preventDefault();

    const subject = document.getElementById('subject').value;
    const category = document.getElementById('category').value;
    const priority = document.getElementById('priority').value;
    const description = document.getElementById('description').value;
    const assignment = document.getElementById('dev-assignment').value;

    const newTicket = {
      id: Math.floor(Math.random() * 1000),
      subject,
      category,
      priority,
      description,
      assignment,
      status: 'Open',
    };

    tickets.push(newTicket);
    localStorage.setItem('tickets', JSON.stringify(tickets));
    currentTicketIndex = 0; // Reset index for new ticket
    renderTickets();

    document.getElementById('ticketForm').reset();
    ticketModal.style.display = 'none';
  });

function renderTickets(filter = 'all', searchQuery = '') {
  const ticketList = document.getElementById('ticketList');
  ticketList.innerHTML = '';

  let filteredTickets = tickets;

  if (filter !== 'all') {
    filteredTickets = tickets.filter(
      (ticket) => ticket.status.toLowerCase() === filter.toLowerCase()
    );
  }

  if (searchQuery) {
    filteredTickets = filteredTickets.filter((ticket) =>
      ticket.subject.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const ticketsToDisplay = filteredTickets.slice(
    currentTicketIndex,
    currentTicketIndex + TICKETS_PER_PAGE
  );
  ticketsToDisplay.forEach((ticket) => {
    const ticketCard = `
      <div class="ticket-card">
        <h2 class="id-num"> #${ticket.id} </h2>
        <h4>${ticket.subject}</h4>
        <p>Category: ${ticket.category}</p>
        <p>Assigned to: ${ticket.assignment}</p>
        <p class="status">Status: ${ticket.status}</p>
        <span class="priority ${getPriorityClass(ticket.priority)}">${
      ticket.priority
    }</span>
      </div>
    `;
    ticketList.innerHTML += ticketCard;
  });

  currentTicketIndex += TICKETS_PER_PAGE;

  const loadMoreButton = document.getElementById('loadMore');
  loadMoreButton.style.display =
    currentTicketIndex < filteredTickets.length ? 'block' : 'none';
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
  currentTicketIndex = 0; // Reset index for new filter
  renderTickets(this.value);
});

document.getElementById('searchBar').addEventListener('input', function () {
  currentTicketIndex = 0; // Reset index for new search
  renderTickets('all', this.value);
});

document.getElementById('loadMore').addEventListener('click', () => {
  renderTickets(
    document.getElementById('filterStatus').value,
    document.getElementById('searchBar').value
  );
});
