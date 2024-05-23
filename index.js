//Part 1:
console.log('Part 1:');
console.log("1A. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93")
let agesArray = [3, 9, 23, 64, 2, 8, 28, 93]
   console.log(agesArray);
   let firstValue = agesArray[0]; // find the first element in the agesArray
   let lastIndex = agesArray.length-1; //find the last element in agesArray
   let lastValue = agesArray[lastIndex]; // finds the last element in the array
   let result = lastValue - firstValue; // subtract the last element in the array from the first
       console.log("1B. Subtract the value of the first element in the array from the value in the last element of the array:", result) ; //prints 90
   agesArray.push(56) //adding a new age
       console.log("1C. Add a new age then calculate result again:", result); //prints 90
let sum = 0 //starting our sum count
   for (let i = 0; i <agesArray.length; i++) {
   sum += agesArray[i]
   } // for loop to find accumulated sum 
let average = sum / agesArray.length // taking the accumlated sum of the array and dividing by how many elements are in the array to get the average
console.log("1D. Calculate the average age of this array:", average); //calculates average...printing 31.77777777777778





//Part 2:
console.log('Part 2:');
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck','Bob'] //declare the array names
console.log("2A. Declare an array called names that contaisn the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.", names)

let totalLetters = 0 //decalre a variable that keeps count of the total letters in the array
   for (let i = 0; i < names.length; i++){
       totalLetters += names[i].length
   } // for loop to accumulate the total letters of each element in the array
   let letterAverage = totalLetters / names.length; //taking the total letters and the length of the array we can find the average of the array
   
   console.log("2B. Calculate the average number of letters per name:", letterAverage);


   let concatNames = ''
       for (let i= 0; i < names.length; i++) {
           concatNames += names[i] + ' ' //for loop that concats the name array together 
       }
       concatNames = concatNames.trim(); //removes whitespace 
       console.log("2C. Concatenate all the names together, seperated by spaces:", concatNames);





//Part 3:
console.log('Part 3:')
console.log("How do you access the last element of any array?")
console.log('someArray.length-1');




//Part 4:
console.log('Part 4:')
console.log("How do you access the first element if any array?") //question
console.log('anotherArray[0]') //answer 




//Part 5:
console.log("Part 5:")
var namesLengths = [ ] // empty array to later push the results of the loop
for (let i = 0; i < names.length; i++){ //for loop to find the length of each element in the names array 
   namesLengths.push(names[i].length)
} //pushing the result of the for loop to the empty array
console.log(" Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the lengths of each anme to the nameLengths array.", namesLengths)




//Part 6:
console.log("Part 6: ")
let sum2 = 0 //starting our sum count
   for (let i = 0; i <namesLengths.length; i++) {
   sum2 += namesLengths[i]
   } //similar to above for loop for Part 1 -- find the length of each element in the namesLengths array 
   console.log('Calculate the sum of all the elements in the array: ', sum2);






//Part 7:
console.log('Part 7: ')
let function1 = (word, n) => {
   let result = ' ';
   for (let i =0; i < n; i++) 
       result += word // the result is word printing out itself 3 times as set for the loop conditions
   return result //returns the string concatenated with itself the number of times that n is
}
console.log('Write a function that returns a word concatenated to itself n number of times',function1('Kitty ', 3)) //word will be a string and n will be a number




//Part 8:
console.log('Part 8: Write a function that takes two parameters, firstName and lastName')
let function2 = (firstName, lastName) => {
   return `${firstName} ${lastName}` // using template literals to auto seperate the words
}
console.log('Return the full name seperated by a space: ',function2("Stevie", 'Gordon')) //calling the functiona and passing in the arguments


//Part 9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. 
console.log('Part 9: ')
function isSumGreaterThan100(numbers) {
   // Calculate the sum of all numbers in the array using reduce method
   let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
   // Check if the sum is greater than 100
   return sum > 100;
}
let numbers1 = [30, 40, 50]; // Sum = 120 prints true 
console.log(isSumGreaterThan100(numbers1));


//Part 10
console.log('Part 10: ')
function calculateAverage(numbers) {
   // Calculate the sum of all numbers in the array numbers2
   let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  
   // Calculate the average by dividing the sum by the number of elements in the array
   let average = sum / numbers.length;


   return average;
}
let numbers2 = [10, 20, 30, 40, 50]; // Average = 30
console.log(numbers2)
console.log('calculate the average of all the elements in the array: ',calculateAverage(numbers2));


//Part 11
console.log('Part 11: ')
function compareAverages(array1, array2) {
   // Calculate the average of the elements in the first array
   let average1 = calculateAverage(array1);
  
   // Calculate the average of the elements in the second array
   let average2 = calculateAverage(array2);
  
   // Compare the averages and return true if the average of the first array is greater
   return average1 > average2;
}


// Function to calculate average 
function calculateAverage(numbers) {
   if (numbers.length === 0) {
       return 0;
   }


   let sum = numbers.reduce((acc, curr) => acc + curr, 0);
   return sum / numbers.length;
}


let array1 = [10, 20, 30]; // Average = 20
let array2 = [5, 15, 25];  // Average = 15
console.log(compareAverages(array1, array2));


//Part 12:
console.log ('Part 12: ')
function willBuyDrink (isHotOutside, moneyInPocket) {
   if (isHotOutside === true && moneyInPocket > 10.50) {
       return true
   }
} // function will return true if isHotOutside is true and moneyInPocket is more than 10.50
console.log("Is it hot outside? Do I have more than $10.50?", willBuyDrink(true, 75))


//Part 13:
console.log('Part 13: ')
function goToWork (sleep, energy) {
   if (sleep === 8 && energy === "good") {
       return "Go to work"
   } else {
       return "Call in"
   }
}
console.log("I got 6 hours of sleep and my energy is okay, what should I do?", goToWork(6, "okay"))
/* this function is considering if the person should go to work
depending on the amount of sleep they got and their energy level,
if they got enough sleep and have good energy, they should go to work, if not they should
call in*/
