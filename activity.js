// Get DOM elements
const ohRange = document.getElementById('ohRange');
const ihRange = document.getElementById('ihRange');
const owRange = document.getElementById('owRange');
const iwRange = document.getElementById('iwRange');
const radiusRange = document.getElementById('radiusRange');

const ohValue = document.getElementById('ohValue');
const ihValue = document.getElementById('ihValue');
const owValue = document.getElementById('owValue');
const iwValue = document.getElementById('iwValue');
const radiusValue = document.getElementById('radiusValue');

const productCards = document.querySelectorAll('.product-card');

function updateLabels() {
  ohValue.textContent = ohRange.value + 'mm';
  ihValue.textContent = ihRange.value + 'mm';
  owValue.textContent = owRange.value + 'mm';
  iwValue.textContent = iwRange.value + 'mm';
  radiusValue.textContent = radiusRange.value + 'mm';
}

function filterProducts() {
  const oh = parseInt(ohRange.value);
  const ih = parseInt(ihRange.value);
  const ow = parseInt(owRange.value);
  const iw = parseInt(iwRange.value);
  const radius = parseInt(radiusRange.value);

  updateLabels();

  productCards.forEach((card) => {
    const cardOhMax = parseInt(card.getAttribute('data-oh-max'));
    const cardIhMax = parseInt(card.getAttribute('data-ih-max'));
    const cardOwMax = parseInt(card.getAttribute('data-ow-max'));
    const cardIwMax = parseInt(card.getAttribute('data-iw-max'));
    const cardRadiusMax = parseInt(card.getAttribute('data-radius-max'));

    // Show product only if all max specs are <= slider values
    if (
      cardOhMax <= oh &&
      cardIhMax <= ih &&
      cardOwMax <= ow &&
      cardIwMax <= iw &&
      cardRadiusMax <= radius
    ) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Initial filter on page load
filterProducts();

// Add event listeners to sliders
[ohRange, ihRange, owRange, iwRange, radiusRange].forEach((slider) =>
  slider.addEventListener('input', filterProducts)
);
