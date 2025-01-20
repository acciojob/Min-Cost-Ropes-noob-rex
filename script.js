function calculateMinCost(arr) {
  // Create a min-heap by sorting the array
  arr.sort((a, b) => a - b);

  let totalCost = 0;

  // While there is more than one rope in the heap
  while (arr.length > 1) {
    // Remove the two smallest ropes
    let first = arr.shift();
    let second = arr.shift();

    // Combine them and add the cost
    let cost = first + second;
    totalCost += cost;

    // Insert the new rope back into the sorted array
    arr.push(cost);
    arr.sort((a, b) => a - b); // Re-sort the array
  }

  return totalCost;
}

// Example Usage
console.log(mincost([4, 3, 2, 6])); // Output: 29
console.log(mincost([1, 2, 3, 4, 5])); // Output: 33
