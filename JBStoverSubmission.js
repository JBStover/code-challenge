const findSum = function(array) {
    // your code here - don't forget to return a number!
    let testArray = array;
    let sum = 0;

    for (let i = 0; i < testArray.length; i++) {
        sum += testArray[i];
    }

    return sum;

  };
  
  /*
  const findFrequency = function(array) {
    // your code here - don't forget to return an object!
  };
  */
  
  const isPalindrome = function(str) {
    // your code here - don't forget to return a boolean!
    let testString = "";
    let reverseString = "";
    let result = false;
    let tempChar = '';    
    
    for (let i = 0; i < (str.length); i++) {        
        tempChar = str.charAt(i);
        testString = testString + tempChar;
    }    

    for (let j = str.length - 1; j >= 0; j--) {
        tempChar = str.charAt(j);
        reverseString = reverseString + tempChar;
    }    

    if (testString === reverseString) {
        result = true;
    } else {
        result = false;
    }

    return result;
  };
  
  
  const largestPair = function(array) {
    // your code here - don't forget to return a number!
    let testArray = array;
    let numA;
    let numB;
    let product;
    let largestProduct = 0;

    for (let i = 0; i < testArray.length; i++) {
        numA = testArray[i];
        numB = testArray[i + 1];
        product = numA * numB;

        if (product > largestProduct) {
            largestProduct = product;
        }

    }

    return largestProduct;
  };

  
  const removeParenth = function(str) {
    // your code here - don't forget to return a string!
    let testString = str;
    let finalString = "";
    let tempChar = '';
    let firstPar = testString.indexOf('(');
    let secondPar = testString.indexOf(')');

    for (let i = 0; i < firstPar; i++) {
        tempChar = testString.charAt(i);
        finalString = finalString + tempChar;        
    }

    for (let i = secondPar + 1; i < testString.length; i++) {
        tempChar = testString.charAt(i);
        finalString = finalString + tempChar;
    }
    
    return finalString;
  };

  
  const scoreScrabble = function(str) {
    // your code here - don't forget to return a number!
    let testString = str;
    let pointsValue;
    let totalPoints = 0;
    let testChar = '';

    for (let i = 0; i < testString.length; i++) {
        testChar = testString.charAt(i);
        if (testChar === 'a' || testChar === 'e' || testChar === 'i' || testChar === 'o' || 
                testChar ==='u' || testChar === 'l' || testChar ==='n' || testChar === 'r' ||
                testChar === 's' || testChar === 't') {
            pointsValue = 1;
            totalPoints += pointsValue;
        } else if (testChar === 'd' || testChar === 'g') {
            pointsValue = 2;
            totalPoints += pointsValue;
        } else if (testChar === 'b' || testChar === 'c' || testChar === 'm' || testChar === 'p') {
            pointsValue = 3;
            totalPoints += pointsValue;
        } else if (testChar === 'f' || testChar === 'h' || testChar === 'v' || testChar === 'w' ||
                    testChar === 'y') {
            pointsValue = 4;
            totalPoints += pointsValue;
        } else if (testChar === 'k') {
            pointsValue = 5;
            totalPoints += pointsValue;
        } else if (testChar === 'j' || testChar === 'x') {
            pointsValue = 8;
            totalPoints += pointsValue;
        } else if (testChar === 'q' || testChar === 'z') {
            pointsValue = 10;
            totalPoints += pointsValue;
        }
    }

    return totalPoints;
    

  }; 
  /*
  console.log(findSum([2, 4, 6]));  
  console.log(isPalindrome('anabelle'));
  console.log(largestPair([5, 1, 2, 3, 1, 4])); // 6
  console.log(largestPair([15, 5, 1, 2, 24, -1, -48])); // 50
  console.log(removeParenth('ido(not)liketocode')); // 'idoliketocode'
  console.log(scoreScrabble('hello')); // 8
  console.log(scoreScrabble('quiet')); // 14
  */
  
