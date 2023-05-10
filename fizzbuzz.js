module.exports = function () {
  const array = [];
  for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      array.push('FizzBuzz');
      continue;
    }
    if (i % 3 === 0) {
      array.push('Fizz');
      continue;
    }
    if (i % 5 === 0) {
      array.push('Buzz');
      continue;
    } else array.push(i);
  }
  return array;
};
