document.addEventListener('DOMContentLoaded', function () {
  // Fetch JSON data
  fetch('/divisions.json') // Update path if needed
    .then((response) => response.json())
    .then((data) => {
      const divisions = data.divisions;
      const divisionLinks = document.querySelectorAll('.dropdown-item');
      const contentContainer = document.getElementById('divisionContent');

      function displayDivision(divisionKey) {
        const division = divisions[divisionKey];
        if (division) {
          contentContainer.innerHTML = `
                        <div class="container">
                            <div class="row">
                                <div class="mt-5 p-3 col-md-12 col-lg-6 col-xl-6">
                                    <h2 class="display-4 fw-bold p-text-color">${
                                      division.title
                                    }</h2>
                                    <p>${division.description}</p>
                                </div>
                                <div class="mt-5 p-3 col-md-12 col-lg-6 col-xl-6">
                                    <div class="card shadow-sm">
                                        <div class="card-body">
                                            <p>Services offered by the division include:</p>
                                            ${division.services
                                              .map(
                                                (service) => `
                                                <p class="fs-6 d-flex pt-2">
                                                    <span class="material-symbols-rounded feature-icon pe-2" aria-hidden="true">check_circle</span>
                                                    ${service}
                                                </p>
                                            `
                                              )
                                              .join('')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="container pb-5 text-center">
                            <div class="row">
                                <div class="col-md-12 col-lg-4 col-xl-4 pb-3">
                                    <h3 class="text-left p-text-color fs-3 fw-bold">Head of Division</h3>
                                    <div class="card">
                                        <img src="${
                                          division.head.image
                                        }" class="card-img-top" alt="HOD Image">
                                        <div class="card-body">
                                            <h5 class="card-title">${
                                              division.head.name
                                            }</h5>
                                            <p class="card-text"><a href="${
                                              division.head.profileLink
                                            }" class="p-text-color">Profile of HOD</a></p>
                                            <p class="fs-6 text-muted small">${
                                              division.head.email
                                            }</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-12 col-lg-8 col-xl-8">
                                    <h5 class="fs-4 text-center pb-3 p-text-color fw-bold">Projects By The Division</h5>
                                    <div class="row g-4">
                                      ${division.projects
                                        .map(
                                          (project, index) => `
                                          <div class="col-md-4 col-sm-6 gallery-item">
                                             <img src="${project.image}" class="gallery-img" alt="${project.name}" />
                                            <p class="text-center mt-2">${project.name}</p>
                                          </div>
                                        `
                                        )
                                        .join('')}
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
        }
      }

      // Load SEMD by default
      displayDivision('semd');

      divisionLinks.forEach((link) => {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          const divisionKey = this.getAttribute('href').substring(1);
          displayDivision(divisionKey);
        });
      });
    })
    .catch((error) => console.error('Error loading divisions data:', error));
});
