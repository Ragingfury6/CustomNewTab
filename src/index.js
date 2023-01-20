const linkCards = Array.from(document.querySelectorAll('.link__card'));
const startingStorage = JSON.parse(localStorage.getItem('data'));

const modifyLocalStorageCardValue = (key) => {
  let data = JSON.parse(localStorage.getItem('data')) || {};
  data[key] ? data[key]++ : (data[key] = 1);
  const amount = data[key];
  localStorage.setItem('data', JSON.stringify(data));
  document
    .getElementsByName(key)[0]
    .querySelector('.link__card__usage').textContent = `Used ${amount} ${
    amount == 1 ? 'time' : 'times'
  }`;
};

linkCards.forEach((c) => {
  VanillaTilt.init(c, {
    max: 15,
    speed: 400,
    scale: 1.05,
    transition: true,
    glare: true,
    'max-glare': 0.75,
  });
  if (c.id == 'portfolio') return;
  const usageAmountElement = c.querySelector('.link__card__usage');
  const headingElement = c.querySelector('.heading--subhead');
  c.setAttribute('name', headingElement.textContent);
  const amount = startingStorage[headingElement.textContent] || 0;
  usageAmountElement.textContent = `Used ${amount} ${
    amount == 1 ? 'time' : 'times'
  }`;

  c.addEventListener('click', () => {
    modifyLocalStorageCardValue(headingElement.textContent);
  });
});
