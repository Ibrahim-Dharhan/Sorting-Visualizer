function getBubbleSortAnimations(arr) {
  const animations = [];
  if (arr.length <= 1) return arr;
  for (var i = 0; i < arr.length; i++) {
    // Last i elements are already in place
    for (var j = 0; j < arr.length - i - 1; j++) {
      // Checking if the item at present iteration
      // is greater than the next iteration
      animations.push([j, j + 1]);

      if (arr[j] > arr[j + 1]) {
        animations.push([true]);
        // If the condition is true then swap them
        var temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      } else {
        animations.push([false]);
      }
      animations.push([j, j + 1]);
    }
  }
  // Print the sorted array
  console.log(arr);
  return animations;
}

export default getBubbleSortAnimations;
