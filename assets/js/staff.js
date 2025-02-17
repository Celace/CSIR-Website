// Staff data (Replace with actual staff details)
const staffData = [
  {
    name: 'Dr. John Smith',
    position: 'Chairman',
    contact: 'john@example.com',
    image: '/assets/images/dir-francis.png',
    category: 'board',
  },
  {
    name: 'Emma Wilson',
    position: 'Board Secretary',
    contact: 'emma@example.com',
    image: '/assets/images/dir-francis.png',
    category: 'board',
  },
  {
    name: 'Emma Wilson',
    position: 'Board Secretary',
    contact: 'emma@example.com',
    image: '/assets/images/dir-francis.png',
    category: 'board',
  },
  {
    name: 'Emma Wilson',
    position: 'Board Secretary',
    contact: 'emma@example.com',
    image: '/assets/images/dir-francis.png',
    category: 'board',
  },
  {
    name: 'Jane Doe',
    position: 'CEO',
    contact: 'jane@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'management',
  },
  {
    name: 'Mark Lee',
    position: 'Finance Director',
    contact: 'mark@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'management',
  },
  {
    name: 'Prof. Alan Turing',
    position: 'Senior Researcher',
    contact: 'alan@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'senior-members',
  },
  {
    name: 'Dr. Sarah Connor',
    position: 'Research Scientist',
    contact: 'sarah@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'senior-members',
  },
  {
    name: 'Lisa Brown',
    position: 'HR Manager',
    contact: 'lisa@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'senior-staff',
  },
  {
    name: 'Paul Adams',
    position: 'Project Manager',
    contact: 'paul@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'senior-staff',
  },
  {
    name: 'Tom Harris',
    position: 'Assistant Engineer',
    contact: 'tom@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'junior-staff',
  },
  {
    name: 'Sophia Green',
    position: 'Lab Assistant',
    contact: 'sophia@example.com',
    image: 'https://via.placeholder.com/150',
    category: 'junior-staff',
  },
];

function displaySection(category, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = '';

  const filteredStaff = staffData.filter(
    (staff) => staff.category === category
  );

  filteredStaff.forEach((staff) => {
    const card = `
          <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
              <div class="card staff-card">
                  <img src="${staff.image}" class="card-img-top" alt="${staff.name}">
                  <div class="card-body text-center">
                      <h6 class="card-title">${staff.name}</h6>
                      <p class="card-text">${staff.position}</p>
                      <p class="text-muted small">${staff.contact}</p>
                  </div>
              </div>
          </div>
      `;
    container.innerHTML += card;
  });
}

function filterStaff() {
  const selectedCategory = document.getElementById('staffFilter').value;
  const staffContainer = document.getElementById('staffContainer');

  staffContainer.innerHTML = '';

  const filteredStaff = staffData.filter(
    (staff) => staff.category === selectedCategory
  );

  filteredStaff.forEach((staff) => {
    const card = `
          <div class="col-lg-2 col-md-3 col-sm-6 mb-4">
              <div class="card staff-card">
                  <img src="${staff.image}" class="card-img-top" alt="${staff.name}">
                  <div class="card-body text-center">
                      <h6 class="card-title">${staff.name}</h6>
                      <p class="card-text">${staff.position}</p>
                      <p class="text-muted small">${staff.contact}</p>
                  </div>
              </div>
          </div>
      `;
    staffContainer.innerHTML += card;
  });
}

// Load sections on page load
window.onload = function () {
  displaySection('board', 'boardDirectorsContainer');
  displaySection('management', 'managementContainer');
  filterStaff(); // Load all staff initially
};
