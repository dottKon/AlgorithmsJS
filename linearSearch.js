// Linear Search is a basic algorithm veryfying whether the given element equals to the value we are looking for. 


// This algorithm's Big O Notation is O(N) as it would need to go through N elements of the N-long array (in the worst case scenario)

function findOne(arr, num) {
  for(var i = 0; i < arr.length; ++i){
    if (arr[i] == num) { return i }
  }
  return false;
}
findOne([2, 4, 6, 8, 10], 6)
