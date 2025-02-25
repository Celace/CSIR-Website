// Staff data (Replace with actual staff details)
const staffData = [
  // Management and Senior Members
  {
    name: 'Dr. Francis Boateng Agyenim',
    positions: {
      management: 'Director',
      'senior-members': 'Principal Research Scientist',
    },
    contact: 'fagyenim@csir-iir.com',
    image: '/assets/images/dir-francis.png',
    category: ['management', 'senior-members'],
  },
  {
    name: 'Dr. William Oduro',
    positions: {
      management: 'Deputy Director',
      'senior-members': 'Principal Research Scientist',
    },
    contact: 'woduro@csir-iir.com',
    image: '/assets/images/deputy-dir.png',
    category: ['management', 'senior-members'],
  },
  {
    name: 'Dr. Richard Bayitse',
    positions: {
      'senior-members': 'Senior Research Scientist',
    },
    contact: 'rbayitse@csir-iir.com',
    image: '/assets/images/staff/richard-bayitse.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Kofi Ampomah-Benefo',
    positions: {
      'senior-members': 'Senior Research Scientist',
    },
    contact: 'rbayitse@csir-iir.com',
    image: '/assets/images/staff/kofi-ampomah-benefo.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Mr. Fred Ayebi',
    positions: {
      management: 'Head, Finance & Accounts',
      'senior-members': 'Senior Accountant',
    },
    contact: 'fayebi@csir-iir.com',
    image: '/assets/images/head-finance.png',
    category: ['management', 'senior-members'],
  },
  {
    name: 'Mrs. Dorothy Awanyo',
    positions: {
      management: 'Head, HR/Administration',
      'senior-members': 'Senior Administrative Officer',
    },
    contact: 'dawanyo@csir-iir.com',
    image: '/assets/images/hr-image.png',
    category: ['management', 'senior-members'],
  },
  {
    name: 'Mr. Fifi Ankamah',
    positions: {
      'senior-members': 'Senior Scientific Info. Officer',
    },
    contact: 'fankamah@csir-iir.com',
    image: '/assets/images/staff/fifi-ankamah.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Boniface Y. Antwi',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'byantwi@csir-iir.com',
    image: '/assets/images/staff/boniface-yeboah-antwi.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Elizabeth Von-Kiti',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'evonkiti@csir-iir.com',
    image: '/assets/images/staff/elizabeth-von-kiti.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Latifatu Adjah',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'ladjah@csir-iir.com',
    image: '/assets/images/staff/latifatu-adjah.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Mutala Mohammed',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'mmohammed@csir-iir.com',
    image: '/assets/images/staff/mutala-mohammed.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Margaret Mary Bruce-Mensah',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'mmensah@csir-iir.com',
    image: '/assets/images/staff/margaret-bruce-mensah.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Bismark Boateng',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'bboateng@csir-iir.com',
    image: '/assets/images/staff/bismark-boateng.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Samuel Atuahene',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'satuahene@csir-iir.com',
    image: '/assets/images/staff/samuel-atuahene.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Aaron Alesane',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'aalesane@csir-iir.com',
    image: '/assets/images/staff/aaron-alesane.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Rapheal Nsiah-Gyambibi',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'rgyambibi@csir-iir.com',
    image: '/assets/images/staff/rapheal-gyambibi.png',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Frank Anini',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'fanini@csir-iir.com',
    image: '/assets/images/staff/frank-anini.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Maame Adwoa B. Animpong',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'manimpong@csir-iir.com',
    image: '/assets/images/staff/maame-adwoa-bentumah-animpong.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Theophilus Yaw Amponsah',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'tamponsah@csir-iir.com',
    image: '/assets/images/staff/theophilus-amponsah.jpg',
    category: ['senior-members'],
  },
  {
    name: 'Dr. Gloria Boafo-Mensah',
    positions: {
      'senior-members': 'Research Scientist',
    },
    contact: 'gmensah@csir-iir.com',
    image: '/assets/images/staff/gloria-boafo-mensah.jpg',
    category: ['senior-members'],
  },
  // Senior Staff
  {
    name: 'Prosper K. Avorgbedor',
    positions: {
      'senior-staff': 'Chief Accounting Assistant',
    },
    contact: 'lannang@csir-iir.com',
    image: '/assets/images/staff/prosper-avorgbedor.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Jordan Baffoe',
    positions: {
      'senior-staff': 'Snr. Works Superintendent',
    },
    contact: 'jbaffoe@csir-iir.com',
    image: '/assets/images/staff/jordan-baffoe.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Solomon Attoh',
    positions: {
      'senior-staff': 'Chief Technical Officer',
    },
    contact: 'lannang@csir-iir.com',
    image: '/assets/images/staff/solomon-attoh.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Lydia Annang',
    positions: {
      'senior-staff': 'Chief Accounting Assistant',
    },
    contact: 'lannang@csir-iir.com',
    image: '/assets/images/staff/lydia-annang.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Enoch Nyarko',
    positions: {
      'senior-staff': 'Chief Accounting Assistant',
    },
    contact: 'pavorgbedor@csir-iir.com',
    image: '/assets/images/staff/enoch-nyarko.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Lydia Adams',
    positions: {
      'senior-staff': 'Chief Administrative Assistant',
    },
    contact: 'ladams@csir-iir.com',
    image: '/assets/images/staff/lydia-adams.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Nana Esi Abam-Amoah II',
    positions: {
      'senior-staff': 'Chief Admin. Assistant',
    },
    contact: 'amoah@csir-iir.com',
    image: '/assets/images/staff/nana-esi-abam-amoah-ii.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Charles Osei Akoto',
    positions: {
      'senior-staff': 'Chief Technical Officer',
    },
    contact: 'cakoto@csir-iir.com',
    image: '/assets/images/staff/charles-osei-akoto.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'William Owuraku M. Addo',
    positions: {
      'senior-staff': 'Chief Technical Officer',
    },
    contact: 'waddo@csir-iir.com',
    image: '/assets/images/staff/william-o.m-addo.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Michael E. Sewordor',
    positions: {
      'senior-staff': 'Principal Technical Officer',
    },
    contact: 'msewordor@csir-iir.com',
    image: '/assets/images/staff/michael-effui-serwordor.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Elizabeth Ayesu',
    positions: {
      'senior-staff': 'Chief Administrative Assistant',
    },
    contact: 'damedonu@csir-iir.com',
    image: '/assets/images/staff/elizabeth-ayesu.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Rose Banla',
    positions: {
      'senior-staff': 'Chief Stores Superintendent',
    },
    contact: 'rbanla@csir-iir.com',
    image: '/assets/images/staff/rose-banla.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Derek Sena Amedonu',
    positions: {
      'senior-staff': 'Chief Technical Officer',
    },
    contact: 'damedonu@csir-iir.com',
    image: '/assets/images/staff/derek-sena-amedonu.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Ismail Abdulai',
    positions: {
      'senior-staff': 'Chief Technical Officer',
    },
    contact: 'iabdulai@csir-iir.com',
    image: '/assets/images/staff/ismail-abdulai.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Christiana O. Teiko',
    positions: {
      'senior-staff': 'Principal Technical Officer',
    },
    contact: 'cteiko@csir-iir.com',
    image: '/assets/images/staff/christiana-teiko.jpg',
    category: ['senior-staff'],
  },
  {
    name: 'Michael Atia Akpana',
    positions: {
      'senior-staff': 'Chief Security Officer',
    },
    contact: 'damedonu@csir-iir.com',
    image: '/assets/images/staff/michael-akpana.jpg',
    category: ['senior-staff'],
  },
  // Junior Staff (Single Category, Single Position)
  {
    name: 'Lois Duah',
    positions: {
      'junior-staff': 'Senior Clerk',
    },
    contact: '',
    image: '/assets/images/staff/lois-duah.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'George Obeng',
    positions: {
      'junior-staff': 'Sup. Tradesman',
    },
    contact: '',
    image: '/assets/images/staff/george-obeng.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Imoro Mohammed',
    positions: {
      'junior-staff': 'Supervisor 1',
    },
    contact: '',
    image: '/assets/images/staff/morro-mohammed.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Ebenezer Tetteh',
    positions: {
      'junior-staff': 'Technical Assistant 1',
    },
    contact: '',
    image: '/assets/images/staff/ebenezer-tetteh.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Titus Ayi Tetteh',
    positions: {
      'junior-staff': 'Junior Foreman',
    },
    contact: '',
    image: '/assets/images/staff/titus-tetteh.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Julian Kome Ketoglo',
    positions: {
      'junior-staff': 'Junior Foreman',
    },
    contact: '',
    image: '/assets/images/staff/julian-ketoglo.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Isaac Acquah',
    positions: {
      'junior-staff': 'Traffic Supervisor',
    },
    contact: '',
    image: '/assets/images/staff/isaac-acquah.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Elizabeth Ankrah',
    positions: {
      'junior-staff': 'Senior Clerk',
    },
    contact: '',
    image: '/assets/images/staff/elizabeth-ankrah.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Ernest Osei',
    positions: {
      'junior-staff': 'Senior Security Assistant',
    },
    contact: '',
    image: '/assets/images/staff/ernest-osei.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Christian Annan Baidoo',
    positions: {
      'junior-staff': 'Senior Security Assistant',
    },
    contact: '',
    image: '/assets/images/staff/christian-baidoo.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Godsway Gedeyi',
    positions: {
      'junior-staff': 'Senior Technical Assistant',
    },
    contact: '',
    image: '/assets/images/staff/godsway-gedeyi.jpg',
    category: ['junior-staff'],
  },
  {
    name: 'Thomas Akabua',
    positions: {
      'junior-staff': 'Senior Security Assistant',
    },
    contact: '',
    image: '/assets/images/staff/thomas-akabua.jpg',
    category: ['junior-staff'],
  },
];

function displaySection(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return; // Safety check for missing container

  container.innerHTML = ''; // Clear existing content

  const filteredStaff = staffData.filter((staff) =>
    staff.category.includes(category)
  );

  if (filteredStaff.length === 0) {
    container.innerHTML = '';
    return;
  }

  filteredStaff.forEach((staff) => {
    const position = staff.positions[category] || 'Position Not Specified'; // Fallback if no position for category
    const card = `
      <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
        <div class="card staff-card">
          <img src="${staff.image}" class="card-img-top" alt="${staff.name}">
          <div class="card-body text-center">
            <h6 class="card-title">${staff.name}</h6>
            <p class="card-text">${position}</p>
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

  if (!staffContainer) return; // Safety check

  staffContainer.innerHTML = ''; // Clear existing content

  const filteredStaff = staffData.filter((staff) =>
    staff.category.includes(selectedCategory)
  );

  if (filteredStaff.length === 0) {
    staffContainer.innerHTML = '';
    return;
  }

  filteredStaff.forEach((staff) => {
    const position =
      staff.positions[selectedCategory] || 'Position Not Specified';
    const card = `
      <div class="col-lg-3 col-md-3 col-sm-6 mb-4">
        <div class="card staff-card">
          <img src="${staff.image}" class="card-img-top" alt="${staff.name}">
          <div class="card-body text-center">
            <h6 class="card-title">${staff.name}</h6>
            <p class="card-text">${position}</p>
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
  // Load board and management sections
  displaySection('board', 'boardDirectorsContainer');
  displaySection('management', 'managementContainer');

  // Load "Senior Members" by default for the staff section
  displaySection('senior-members', 'staffContainer');

  // Optionally set the dropdown to match the default display
  const staffFilter = document.getElementById('staffFilter');
  if (staffFilter) {
    staffFilter.value = 'senior-members'; // Sync dropdown with default display
  }
};
