import results from '../data.json';
import * as utils from './utils';

/* Node selectors. */
const summaryList = document.getElementById('summary-list');
const result = document.getElementById('result');

/* Compute and dynamically add average score to HTML. */
const averageScore = utils.computeAverage(results.map((r) => r.score));
result.innerText = averageScore.toString();

/* Dynamically create and add list items to the summary list. */
const summaryContent = results.map((r, i) =>
  utils.generateSummaryItem(r, i + 1),
);
summaryList.innerHTML = summaryContent.join(' ');
