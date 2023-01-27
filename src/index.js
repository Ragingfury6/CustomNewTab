const linkCards = Array.from(document.querySelectorAll('.link__card'));
const startingStorageData = localStorage.getItem('data');
let startingStorage = startingStorageData
  ? JSON.parse(startingStorageData)
  : {};
const modifyLocalStorageCardValue = (key) => {
  let data = JSON.parse(localStorage.getItem('data') || '') || {};
  data[key] ? data[key]++ : (data[key] = 1);
  const amount = data[key];
  localStorage.setItem('data', JSON.stringify(data));
  if (document) {
    document
      .getElementsByName(key)[0]
      .querySelector('.link__card__usage').textContent = `Used ${amount} ${
      amount == 1 ? 'time' : 'times'
    }`;
  }
};
linkCards.forEach((c) => {
  /**@ts-ignore*/
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
  const headingElementTextContent =
    (headingElement === null || headingElement === void 0
      ? void 0
      : headingElement.textContent) || '';
  c.setAttribute('name', headingElementTextContent);
  const amount = startingStorage[headingElementTextContent] || 0;
  usageAmountElement.textContent = `Used ${amount} ${
    amount == 1 ? 'time' : 'times'
  }`;
  c.addEventListener('click', () => {
    modifyLocalStorageCardValue(headingElementTextContent);
  });
});
