
exports.min = function min (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  } else {
    let max = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
        if (max > array[i]) {
            max = array[i];
        }
    }    
  return max;
  }
}

exports.max = function max (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  } else {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < array.length; i++) {
      if (max < array[i]) {
          max = array[i];
      }
  }    
    return max;
  }
}


exports.avg = function avg (array) {
  if (Array.isArray(array) === false || array.length === 0) {
    return 0;
  } else {
    let buf = 0;
    let sum = 0;
      for (let i = 0; i < array.length; i++) {
        sum += array[i];
        buf++;
      }
      return sum/buf;
  }
}
