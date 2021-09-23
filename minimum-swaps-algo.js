//Given an unordered array consisting of consecutive integers  [1, 2, 3, ..., n] without any duplicates.
//This algorithm finds the minimum number of swaps required to sort the array in ascending order.

function minimumSwaps(array) {
    
    function swapper(arr, firstPosition, secondPosition) {
        let firstElement = arr[index1]
        let secondElement = arr[index2]
        
        arr.splice(firstPosition, 1, secondElement)
        arr.splice(secondPosition, 1, firstElement)
        
        return arr
    }
    
    let isSorted = false
    let isContinue = false
    
    let startIndex = 0
    let counter = 0
    
    while (!isSorted) {

        // To optimising the performance, devised it in two seperate parts
        
        if (startIndex < (array.length/2)) {

            for (let i=startIndex; i<=(array.length/2); i++) {
                if (array[i] !== (i+1)) {
                    isContinue = true
                    break
                }
            }

        } else {

            for (let i=startIndex; i<array.length; i++) {
                if (array[i] !== (i+1)) {
                    isContinue = true
                    break
                }
            } 
        }

        //when to break the while

        if (!isContinue) {
            isSorted = true
        }
        
        if (array[startIndex] !== startIndex+1) {
            
            let position = 0
            
            for (let i= startIndex; i<array.length; i++) {

                if (array[i] === startIndex+1) {
                    position = i
                    break
                }
            }

            // swaps two elements in the array
            swapper(array, position, startIndex)
            
            startIndex++

            //counts the swaps
            counter ++
            
            isContinue = false
            
        } else {

            startIndex++
        }
    }

    return counter
}