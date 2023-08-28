// 4a
const R = require('ramda');

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';

function isCharNumber(element) {
  return !isNaN(element);
}

const countNumbers = R.compose(
  R.length,
  R.filter(isCharNumber),
  R.replace(/[^0-9]/g, '')
);

console.log(countNumbers(sentence));

