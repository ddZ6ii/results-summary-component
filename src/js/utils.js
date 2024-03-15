export function computeAverage(values) {
  if (values === null || values === undefined)
    throw Error('Argument cannot be empty!');

  if (!Array.isArray(values)) throw Error('Argument must be an array!');

  const total = values.reduce((acc, value) => acc + value, 0);
  return Math.floor(total / values.length);
}

export function generateSummaryItem(item, idx) {
  return `
  <li class="summary-item summary-item-${idx}">
    <div class="summary-item-group">
      <img src="${item.icon}" alt="" width="20" height="20" />
      <h3 class="summary-item-heading">${item.category}</h3>
    </div>
    <p class="summary-item-score">
        <span>${item.score}</span> / 100
    </p>
  </li> 
  `;
}
