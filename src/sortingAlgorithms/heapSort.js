function getHeapSortAnimations(arr) {
  const animations = [];
  var n = arr.length;

  // Build heap (rearrange array)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
    heapify(arr, n, i, animations);

  // One by one extract an element from heap
  for (let i = n - 1; i > 0; i--) {
    // Move current root to end
    animations.push([false]);
    animations.push([false]);
    animations.push([false]);
    animations.push([false]);
    animations.push([true]);
    animations.push([0, i]);
    animations.push([0, i]);
    var temp = arr[0];
    arr[0] = arr[i];
    arr[i] = temp;

    // call max heapify on the reduced heap
    heapify(arr, i, 0, animations);
  }
  return animations;
}

// To heapify a subtree rooted with node i which is
// an index in arr[]. n is size of heap
function heapify(arr, n, i, animations) {
  var largest = i; // Initialize largest as root
  var l = 2 * i + 1; // left = 2*i + 1
  var r = 2 * i + 2; // right = 2*i + 2

  // If left child is larger than root

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
    animations.push([l, largest]);
    animations.push([l, largest]);
  } else {
    animations.push([false]);
    animations.push([false]);
  }

  // If right child is larger than largest so far
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
    animations.push([r, largest]);
    animations.push([r, largest]);
  } else {
    animations.push([false]);
    animations.push([false]);
  }

  // If largest is not root
  if (largest !== i) {
    animations.push([true]);
    animations.push([i, largest]);
    animations.push([i, largest]);

    var swap = arr[i];
    arr[i] = arr[largest];
    arr[largest] = swap;

    // Recursively heapify the affected sub-tree
    heapify(arr, n, largest, animations);
  } else {
    animations.push([false]);
    animations.push([false]);
    animations.push([false]);
  }
}

export default getHeapSortAnimations;
