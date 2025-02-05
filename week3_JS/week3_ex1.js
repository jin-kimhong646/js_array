
/**
 * Creates transform a list of numbers into a list of  objects.
 * @param {array} listOfNumbers - a list of numbers
 * @returns a  list of objects
 */
function transformToObjects(listOfNumbers) {
    result = [];
    // Write your code here
    result = listOfNumbers.map (number => ({ val: number }));
  
    return result;
  }
  
  // --------------------------------------------------------
  // TESTS ZONE
  // --------------------------------------------------------
  
  // test 1  -
  console.log(JSON.stringify(transformToObjects([1, 2, 3]))); // Should  be     [{val: 1}, {val: 2}, {val: 3}]

  //test 2 -
  console.log(JSON.stringify(transformToObjects([44])));