function swap(a, b) {
    [a, b] = [b, a];
    return [a, b];
  }
  
  let x = 1;
  let y = 2;
  [x, y] = swap(x, y);
  console.log(x, y);
  