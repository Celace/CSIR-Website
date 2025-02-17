const readMore = document.querySelector('.dir-message-more');
const readMoreLink = document.querySelector('.read-more');

readMoreLink.addEventListener('click', () => {
  if (readMore.style.display === 'none') {
    readMore.style.display = 'block';
    readMoreLink.style.display = 'none';
  } else {
    readMore.style.display = 'none';
  }
});

// STAFF FILTER

// DIVISIONS FILTER
document.addEventListener('DOMContentLoaded', () => {
  // Load division data
  fetch('/divisions.json')
    .then((response) => response.json())
    .then((data) => {
      const divisions = data.divisions;

      // Add click handlers to dropdown items
      document.querySelectorAll('.dropdown-item').forEach((item) => {
        item.addEventListener('click', (e) => {
          const divisionId = e.target.getAttribute('href').substring(1);
          updateDivisionContent(divisions[divisionId]);
        });
      });

      // Load initial division
      updateDivisionContent(divisions.semd);
    });

  function updateDivisionContent(division) {
    // Update main content
    document.querySelector('.division-title').textContent = division.title;
    document.querySelector('.division-description').textContent =
      division.description;

    // Update services
    const servicesList = document.querySelector('.services-list');
    servicesList.innerHTML = division.services
      .map(
        (service) => `
      <p class="fs-6 d-flex pt-3">
        <span class="material-symbols-rounded feature-icon pe-2" aria-hidden="true">
          check_circle
        </span>
        ${service}
      </p>
    `
      )
      .join('');

    // Update head of division
    document.querySelector('.hod-image').src = division.head.image;
    document.querySelector('.hod-name').textContent = division.head.name;
    document.querySelector('.hod-profile').href = division.head.profileLink;
    document.querySelector('.hod-contact').href = division.head.contactLink;

    // Update projects gallery
    const gallery = document.querySelector('.projects-gallery');
    gallery.innerHTML = division.projects.reduce((html, projectImg, index) => {
      if (index % 3 === 0) html += `<div class="column">`;
      html += `
        <div class="photo">
          <img src="${projectImg}" alt="Project ${index + 1}">
        </div>
      `;
      if (index % 3 === 2 || index === division.projects.length - 1)
        html += `</div>`;
      return html;
    }, '');
  }
});
