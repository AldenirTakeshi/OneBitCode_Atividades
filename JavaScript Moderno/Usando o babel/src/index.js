const average = (...numbers) => {
  const sum = numbers.reduce((accum, number) => accum + number, 0);
  return sum / numbers.length;
};

console.log(`Média Aritimética Simples: ${average(3, 6, 10, 9)}`);

const weightedAverage = (...entries) => {
  const sum = entries.reduce((accum, { number, weight }) => accum + number * weight, 0);

  const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0);

  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAverage(
    { number: 9, weight: 3 },
    { number: 7, weight: 1 },
    { number: 10, weight: 1 }
  )}`
);

const weightedAverage2 = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce((accum, entry) => accum + (entry.weight ?? 1), 0);
  return sum / weightSum;
};

console.log(
  `Média Ponderada: ${weightedAverage2(
    { number: 9, weight: 3 },
    { number: 7 },
    { number: 10, weight: 1 }
  )}`
);

const median = (...numbers) => {
  const sortedNumbers = [...numbers].sort((a, b) => a - b); // ordenar em ordem crescente
  const middle = Math.floor(sortedNumbers.length / 2);
  if (sortedNumbers.length % 2 === 0) {
    return sortedNumbers[middle];
  }
  const firstMedian = sortedNumbers[middle - 1];
  const secondMedian = sortedNumbers[middle];

  return average(firstMedian, secondMedian);
};

console.log(`Mediana: ${median(2, 5, 99, 4, 42, 7)}`);
console.log(`Mediana: ${median(15, 14, 8, 7, 3)}`);

const mode = (...numbers) => {
  const quantities = numbers.map((number) => [
    number,
    numbers.filter((n) => number == n).length,
  ]);
  quantities.sort((a, b) => b[1] - a[1]);
  return quantities[0][0];
};
console.log(
  `Moda: ${mode(1, 1, 99, 99, 99, 99, 99, 99, 99, 99, 5, 4, 9, 7, 4, 3, 5, 2, 4, 0, 4)}`
);
