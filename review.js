const form = document.getElementById('review-form');
const reviewsList = document.getElementById('reviews-list');
const ratingStars = document.querySelectorAll('.rating span');
let currentRating = 0;

ratingStars.forEach(star => {
  star.addEventListener('click', () => {
    currentRating = parseInt(star.getAttribute('data-value'));
    highlightStars(currentRating);
  });
});

function highlightStars(rating) {
  ratingStars.forEach(star => {
    star.classList.remove('active');
    if (parseInt(star.getAttribute('data-value')) <= rating) {
      star.classList.add('active');
    }
  });
}

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (name && comment && currentRating > 0) {
    const review = document.createElement('div');
    review.classList.add('review');

    review.innerHTML = `
      <h4>${name}</h4>
      <div class="stars">${'★'.repeat(currentRating)}${'☆'.repeat(5 - currentRating)}</div>
      <p>${comment}</p>
    `;

    reviewsList.prepend(review);
    form.reset();
    highlightStars(0);
    currentRating = 0;
  } else {
    alert('Please fill out all fields and select a rating.');
  }
});
