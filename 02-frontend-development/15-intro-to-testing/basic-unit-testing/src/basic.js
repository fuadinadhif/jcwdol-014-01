export function sumPlus10(a, b) {
  return a + b + 10;
}

export function max(a, b) {
  if (a > b) return a;
  else if (a < b) return b;
  return a;
}

export function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

export function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
