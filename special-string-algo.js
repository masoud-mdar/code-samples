//A string is said to be a special string if either of two conditions is met:

//1. All of the characters are the same, e.g. aaa.
//2. All characters except the middle one are the same, e.g. aadaa.
//A special substring is any substring of a string which meets one of those criteria. 
//Given a string, this algorithm determines how many special substrings can be formed from it

function substrCount(string) {

    //every single letter in the string is a "special string"
    let total = string.length

    for (let i=0; i<string.length; i++) {
        
        if (i<string.length-1) {


            //All of the characters are the same, e.g. aaa
            let repetNum = 0


            //All characters except the middle one are the same, e.g. aadaa
            let middleNum = 0


            //to find how many special substrings of type 1
            if (string[i] === string[i+1]) {
                
                if (i===0 || string[i] !== string[i-1]) {
                    let sum = 0
                    let index = i
                    
                    while (string[i] === string[index+1]) {
                        repetNum ++
                        index++
                    }
                    
                    for (let i=0; i<repetNum; i++) {
                        sum += (i+1)
                    }
                    total += sum
                    repetNum = 0
                }
                
            } else {

                //to find how many special substrings of type 2
                if (i>0) {

                    if (string[i-1] === string[i+1]) {
                        //we have at least one special substring of this type
                        let startIndex = i-1
                        let finIndex = i+1

                        while (string[startIndex] === string[finIndex]) {
                            
                            if (string[startIndex] === string[i-1]) {

                                //to see until where it continues

                                middleNum++
                                startIndex--
                                finIndex++

                            } else {

                                break
                            }
                        }

                        total += middleNum
                        middleNum = 0
                    }
                }
            }
        }
    }
    return total
}