function pow(x, n) {
  let result = 1;
  for (let i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}

alert(
  n > 0
    ? pow(x, n)
    : `Power ${n} is not supported, please enter an integer number greater than zero`
);
