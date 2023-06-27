function tri(numbers, order) {
    if (order === "asc") {
      for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = 0; j < numbers.length - 1 - i; j++) {
          if (numbers[j] > numbers[j + 1]) {
            var temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
          }
        }
      }
    } else if (order === "desc") {
      for (var i = 0; i < numbers.length - 1; i++) {
        for (var j = 0; j < numbers.length - 1 - i; j++) {
          if (numbers[j] < numbers[j + 1]) {
            var temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
          }
        }
      }
    }
    return numbers;
  }
  
  var numbers = [4, 2, 7, 1, 5];
  var order = "asc";
  console.log(tri(numbers, order));
  