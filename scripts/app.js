// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]



// if the length of array1 is 0 it returns an empty array
// if the length of array2 is 0 it returns array1
// use the filter method to check the elements in 'a' and checks if they are in 'b'
// if an element from 'a' is not in 'b' it then passes it to the returning array


function arrayDiff(a, b){
    return a.filter(ele => !b.includes(ele));
}