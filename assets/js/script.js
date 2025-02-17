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
document.addEventListener('DOMContentLoaded', function () {
  document
    .getElementById('divisionFilter')
    .addEventListener('change', function () {
      let selectedDivision = this.value;
      document.querySelectorAll('.staff-card').forEach(function (card) {
        let staffDivision = card.getAttribute('data-division');
        if (selectedDivision === 'all' || staffDivision === selectedDivision) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    });
});
