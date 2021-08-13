function partition(arr, low, high, animations) {
  var pivot = arr[high]; // pivot
  var i = low - 1; // Index of smaller element and indicates the right position of pivot found so far

  for (let j = low; j <= high - 1; j++) {
    // If current element is smaller than the pivot
    animations.push([j, high]);
    animations.push([j, high]);
    if (arr[j] < pivot) {
      animations.push([true]);
      i++; // increment index of smaller element
      let tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    } else {
      animations.push([false]);
    }
    animations.push([j, i]);
  }
  animations.push([i + 1, high]);
  animations.push([i + 1, high]);
  animations.push([true]);
  animations.push([i + 1, high]);
  let tmp = arr[i + 1];
  arr[i + 1] = arr[high];
  arr[high] = tmp;
  return i + 1;
}

/* The main function that implements QuickSort
arr[] --> Array to be sorted,
low --> Starting index,
high --> Ending index */
function quickSort(arr, low, high, animations) {
  if (low < high) {
    /* pi is partitioning index, arr[p] is now
        at right place */
    var pi = partition(arr, low, high, animations);

    // Separately sort elements before
    // partition and after partition
    quickSort(arr, low, pi - 1, animations);
    quickSort(arr, pi + 1, high, animations);
  }
}


function getQuickSortAnimations(arr, low, high) {
  const animations = [];
  quickSort(arr, low, high, animations);
  return animations;
}

export default getQuickSortAnimations;
