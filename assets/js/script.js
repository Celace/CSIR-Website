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
