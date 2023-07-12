function countPrimeNumbers() {
  let count = 0;
  for (let i = 2; i <= 100; i++) {
      let isPrime = true;
      for (let j = 2; j * j <= i; j++) {
          if (i % j === 0) {
              isPrime = false;
              break;
          }
      }
      if (isPrime) {
          count++;
      }
  }
  return count;
}

let start = performance.now();
countPrimeNumbers();
let end = performance.now();
console.log("Execution time of printing countPrimeNumbers was " + (end - start) + " milliseconds.");
