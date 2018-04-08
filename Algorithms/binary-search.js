/*

Binary Search

Find the index of an element in a sorted array.

Time Complexity: O(log n)

Space Complexity: O(1)

*/




/*

Iterative Approach - Space COmplexity O(1)

const arr = [2, 4, 6, 8, 9, 12, 45, 78, 99];
console.log(binaySearch(arr));

*/

const binaySearch = (arr, searchVal = 45) => {

  let low = 0;
  let high = (arr.length - 1);

  while (low <= high) {

    let mid = low + Math.floor((high - low) / 2);
    let midVal = arr[mid];

    if (midVal === searchVal) {

      return mid;

    } else if (midVal > searchVal) {

      high = mid - 1;

    } else if (midVal < searchVal) {

      low = mid + 1;
    }
  }

  return -1;

}



/*

Recursive Approach - Space COmplexity O(log n)

const arr = [2, 4, 6, 8, 9, 12, 45, 78, 99];
console.log(binaySearch(arr));

*/



const binaySearch = (arr, searchVal = 78, low = 0, high = (arr.length - 1)) => {

  if (low > high) {

    return -1;

  }

  let mid = low + Math.floor((high - low) / 2);
  let midVal = arr[mid];

  if (midVal === searchVal) {

    return mid;

  } else if (midVal > searchVal) {

    return binaySearch(arr, searchVal, low, mid - 1);

  } else if (midVal < searchVal) {

    return binaySearch(arr, searchVal, mid + 1, high);

  }


}






