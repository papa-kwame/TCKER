document.addEventListener('DOMContentLoaded', () => {
  const data = [
    {
      id: 1,
      user: 'John Doe',
      title: 'Ticket Issue',
      status: 'Open',
      hasComments: 'Yes',
      priority: 'High',
      category: 'Support',
      isPrivate: 'No',
      approved: 'Yes',
      date: '2023-09-16',
    },
    {
      id: 2,
      user: 'Jane Smith',
      title: 'Feature Request',
      status: 'Closed',
      hasComments: 'No',
      priority: 'Low',
      category: 'Enhancement',
      isPrivate: 'Yes',
      approved: 'No',
      date: '2023-09-12',
    },
    {
      id: 3,
      user: 'Mike Johnson',
      title: 'Bug Report',
      status: 'In Progress',
      hasComments: 'Yes',
      priority: 'Medium',
      category: 'Bug',
      isPrivate: 'No',
      approved: 'Yes',
      date: '2023-09-10',
    },
  ];

  const tableBody = document.querySelector('#userTable tbody');

  data.forEach((item) => {
    const row = document.createElement('tr');

    let priorityClass = '';
    if (item.priority === 'High') {
      priorityClass = 'priority-high';
    } else if (item.priority === 'Medium') {
      priorityClass = 'priority-medium';
    } else if (item.priority === 'Low') {
      priorityClass = 'priority-low';
    }

    let statusClass = '';
    if (item.status === 'Open') {
      statusClass = 'status-open';
    } else if (item.status === 'In Progress') {
      statusClass = 'status-in-progress';
    } else if (item.status === 'Closed') {
      statusClass = 'status-closed';
    }

    row.innerHTML = `
      <td>${item.id}</td>
      <td>${item.user}</td>
      <td>${item.title}</td>
      <td><span class="${statusClass}">${item.status}</span></td>
      <td>${item.hasComments}</td>
      <td><span class="${priorityClass}">${item.priority}</span></td>
      <td>${item.category}</td>
      <td>${item.isPrivate}</td>
      <td>${item.approved}</td>
      <td>${item.date}</td>
      <td class="actions">
        <button onclick="editRow(${item.id})">Edit</button>
        <button onclick="deleteRow(${item.id})">Delete</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
});

function editRow(id) {
  alert(`Edit row with ID: ${id}`);
}

function deleteRow(id) {
  alert(`Delete row with ID: ${id}`);
}
document.addEventListener('DOMContentLoaded', () => {
  const activeAdmins = [
    {
      id: 1,
      name: 'John Doe',
      role: 'Super Admin',
      status: 'Online',
      lastActive: '2 minutes ago',
    },
    {
      id: 2,
      name: 'Jane Smith',
      role: 'Admin',
      status: 'Away',
      lastActive: '10 minutes ago',
    },
    {
      id: 3,
      name: 'Mike Johnson',
      role: 'Moderator',
      status: 'Offline',
      lastActive: '1 hour ago',
    },
  ];

  const tableBody = document.querySelector('#adminTable tbody');

  activeAdmins.forEach((admin) => {
    const row = document.createElement('tr');

    let statusClass = '';
    if (admin.status === 'Online') {
      statusClass = 'status-online';
    } else if (admin.status === 'Away') {
      statusClass = 'status-away';
    } else if (admin.status === 'Offline') {
      statusClass = 'status-offline';
    }

    row.innerHTML = `
      <td>${admin.id}</td>
      <td>${admin.name}</td>
      <td>${admin.role}</td>
      <td><span class="${statusClass}">${admin.status}</span></td>
      <td>${admin.lastActive}</td>
    `;

    tableBody.appendChild(row);
  });
});
document.querySelectorAll('.menu-items').forEach((item) => {
  item.addEventListener('click', () => {
    const targetId = item.getAttribute('data-target');

    document.querySelectorAll('.section').forEach((section) => {
      section.classList.remove('active');
    });

    document.getElementById(targetId).classList.add('active');
  });
});

document.getElementById('dashboard').classList.add('active');
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
    actions:
      '<button onclick="editRow(1)">Edit</button> <button onclick="deleteRow(1)">Delete</button>',
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
    actions:
      '<button onclick="editRow(2)">Edit</button> <button onclick="deleteRow(2)">Delete</button>',
  },
];

const tableBody = document.querySelector('#ticketsTable tbody');
const filterSelect = document.querySelector('#filter');
const searchInput = document.querySelector('#search');

function populateTicketsTable(data) {
  tableBody.innerHTML = '';

  data.forEach((ticket) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${ticket.id}</td>
      <td>${ticket.user}</td>
      <td>${ticket.title}</td>
      <td class="status">${ticket.status}</td>
      <td>${ticket.comments}</td>
      <td class="priority">${ticket.priority}</td>
      <td>${ticket.category}</td>
      <td>${ticket.private}</td>
      <td>${ticket.approved}</td>
      <td>${ticket.date}</td>
      <td class="actions">${ticket.actions}</td>
    `;
    tableBody.appendChild(row);
  });
}

function filterTickets() {
  const filterValue = filterSelect.value;
  const searchValue = searchInput.value.toLowerCase();

  const filteredData = ticketsData.filter((ticket) => {
    const statusMatch =
      filterValue === 'all' ||
      ticket.status.toLowerCase() === filterValue.toLowerCase();
    const searchMatch = Object.values(ticket).some((value) =>
      value.toLowerCase().includes(searchValue)
    );
    return statusMatch && searchMatch;
  });

  populateTicketsTable(filteredData);
}

function editRow(id) {
  const ticket = ticketsData.find((ticket) => ticket.id === id);
  if (ticket) {
    // Prompt user for new details
    const newTitle = prompt('Edit title:', ticket.title);
    const newStatus = prompt('Edit status (Open/Closed):', ticket.status);
    if (newTitle && newStatus) {
      // Update ticket
      ticket.title = newTitle;
      ticket.status = newStatus;
      ticket.actions = `
        <button onclick="editRow(${id})">Edit</button> 
        <button onclick="deleteRow(${id})">Delete</button>
      `;
      filterTickets(); // Refresh table
    }
  }
}

function deleteRow(id) {
  const confirmDelete = confirm(
    `Are you sure you want to delete ticket with ID: ${id}?`
  );
  if (confirmDelete) {
    // Remove ticket from data
    const index = ticketsData.findIndex((ticket) => ticket.id === id);
    if (index > -1) {
      ticketsData.splice(index, 1);
      filterTickets(); // Refresh table
    }
  }
}

filterSelect.addEventListener('change', filterTickets);
searchInput.addEventListener('input', filterTickets);

document.addEventListener('DOMContentLoaded', () => {
  populateTicketsTable(ticketsData);
});
let comments = [];
let editId = null;
let pinnedComments = [];
let visibleComments = 5;
let sortCriteria = 'recent';

function addComment() {
  const commentInput = document.getElementById('comment-input').value.trim();
  const commentImage = document.getElementById('comment-image').files[0];
  const anonymousMode = document.getElementById('anonymous-mode').checked;

  if (commentInput === '' && !commentImage) {
    alert('Comment cannot be empty!');
    return;
  }

  const commentId = comments.length + 1;
  const timestamp = new Date().toLocaleString();
  const newComment = {
    id: commentId,
    text: commentInput,
    image: commentImage ? URL.createObjectURL(commentImage) : null,
    likes: 0,
    dislikes: 0,
    replies: [],
    timestamp: timestamp,
    anonymous: anonymousMode,
    author: anonymousMode ? 'Anonymous' : 'User',
    history: [],
  };

  comments.push(newComment);
  renderComments();
}

function renderComments() {
  const commentsContainer = document.getElementById('comments-container');
  commentsContainer.innerHTML = '';

  const sortedComments = sortCommentsData(comments);
  const visible = sortedComments.slice(0, visibleComments);

  visible.forEach((comment) => {
    const commentCard = document.createElement('div');
    commentCard.classList.add('comment-card');

    let attachments = '';
    if (comment.image) {
      attachments = `<div class="comment-attachments"><img src="${comment.image}" /></div>`;
    }

    commentCard.innerHTML = `
            <div class="comment-text">${comment.text}</div>
            <div class="comment-meta">
                <strong>${
                  comment.anonymous ? 'Anonymous' : comment.author
                }</strong> | 
                Posted at: ${comment.timestamp}
            </div>
            ${attachments}
            <div class="likes-dislikes">
                <button onclick="likeComment(${comment.id})">Like (${
      comment.likes
    })</button>
                <button onclick="dislikeComment(${comment.id})">Dislike (${
      comment.dislikes
    })</button>
            </div>
            <div class="comment-actions">
                <button onclick="openEditModal(${comment.id})">Edit</button>
                <button onclick="openPinModal(${comment.id})">Pin</button>
                <button onclick="openDeleteModal(${comment.id})">Delete</button>
                <button class="btn-report" onclick="openReportModal(${
                  comment.id
                })">Report</button>
            </div>
        `;

    commentsContainer.appendChild(commentCard);
  });
}

function openEditModal(id) {
  editId = id;
  const commentToEdit = comments.find((comment) => comment.id === id);
  document.getElementById('edit-comment-input').value = commentToEdit.text;
  document.getElementById('edit-modal').style.display = 'flex';
}

function saveEdit() {
  const updatedText = document
    .getElementById('edit-comment-input')
    .value.trim();
  const comment = comments.find((comment) => comment.id === editId);

  comment.history.push(comment.text); // Save edit history
  comment.text = updatedText;

  document.getElementById('edit-modal').style.display = 'none';
  renderComments();
}

function openPinModal(id) {
  document.getElementById('pin-modal').style.display = 'flex';
  editId = id; // Storing comment id temporarily
}

function confirmPin() {
  const comment = comments.find((comment) => comment.id === editId);
  pinnedComments.push(comment);
  document.getElementById('pin-modal').style.display = 'none';
  renderComments();
}

function openDeleteModal(id) {
  document.getElementById('delete-modal').style.display = 'flex';
  editId = id; // Storing comment id temporarily
}

function confirmDelete() {
  comments = comments.filter((comment) => comment.id !== editId);
  document.getElementById('delete-modal').style.display = 'none';
  renderComments();
}

function openReportModal(id) {
  document.getElementById('report-modal').style.display = 'flex';
  editId = id; // Storing comment id temporarily
}

function submitReport() {
  const reason = document.getElementById('report-reason').value;
  console.log(`Comment ${editId} reported for: ${reason}`);
  document.getElementById('report-modal').style.display = 'none';
}

document.querySelectorAll('.close').forEach((el) => {
  el.onclick = function () {
    this.parentElement.parentElement.style.display = 'none';
  };
});

function sortComments() {
  sortCriteria = document.getElementById('sort-comments').value;
  renderComments();
}

function sortCommentsData(commentsArray) {
  switch (sortCriteria) {
    case 'liked':
      return [...commentsArray].sort((a, b) => b.likes - a.likes);
    case 'replied':
      return [...commentsArray].sort(
        (a, b) => b.replies.length - a.replies.length
      );
    default:
      return [...commentsArray].sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
  }
}

function loadMoreComments() {
  visibleComments += 5;
  renderComments();
}

document.getElementById('saveBtn').addEventListener('click', function () {
  // Get values from the form
  const settings = {
    notificationsEnabled: document.getElementById('notificationsToggle')
      .checked,
    darkModeEnabled: document.getElementById('darkModeToggle').checked,
    dateFormat: document.getElementById('dateFormatSelect').value,
    priority: document.getElementById('prioritySelect').value,
    defaultAssignee: document.getElementById('defaultAssignee').value,
    timeZone: document.getElementById('timeZoneSelect').value,
    autoAssign: document.getElementById('autoAssignToggle').checked,
    autoCloseTime: document.getElementById('autoCloseTime').value,
    ticketsPerPage: document.getElementById('ticketsPerPage').value,
    reminderTime: document.getElementById('reminderTimes').value,
    language: document.getElementById('languageSelect').value,
    twoFA: document.getElementById('twoFAToggle').checked,
    passwordStrength: document.getElementById('passwordStrength').value,
    emailDigest: document.getElementById('emailDigestToggle').checked,
    ticketArchiving: document.getElementById('ticketArchivingToggle').checked,
    escalationRules: document.getElementById('escalationRules').value,
    backupFrequency: document.getElementById('backupFrequency').value,
  };

  // Mock saving process
  alert(`Settings saved! \n\n ${JSON.stringify(settings, null, 2)}`);
});
