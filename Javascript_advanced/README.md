# Javascript Advanced

#### 0. Lexical scoping and welcome message

Create a function named `welcome` that takes two arguments, `firstName` and `lastName`. It contains a variable named `fullName` that concatenates `firstName` and `lastName`. Inside the `welcome` function, there's a function named `displayFullName` that displays an alert with the message "Welcome [fullName]!" and an exclamation mark. Finally, call the `displayFullName` function at the end of the `welcome` function.

**How to test:**
- Open your web inspector in the tab "Console."
- Copy-paste your code.
- Run `welcome('Holberton', 'School');` It should prompt an alert with the content: "Welcome Holberton School!"
- Running `alert(fullName)` should return a reference error because `fullName` is not defined globally.

#### 1. Closure Scope Chain

Create a variable named `globalVariable` with the value "Welcome." Implement a function named `outer` that alerts the content of `globalVariable`, creates a variable named `course` with the value "Holberton," and defines a function named `inner`. The `inner` function alerts the content of `globalVariable` and `course`. Inside `inner`, create a variable named `exclamation` with the value "!". Also, implement a function named `inception` within `inner` that alerts the concatenated content of `globalVariable`, `course`, and `exclamation`. Finally, call the `inception` function and the `inner` function inside the `outer` function.

**Compose the code:**
- Write the `inception` function within `inner`.
- Write the `inner` function within `outer`.
- Call the `outer` function in the main code (outside any function).
- Call the `inner` function within `outer`.

#### 2. Closure

Write a function named `welcomeMessage` that accepts one argument `fullName` (string). This function should be a closure for an alert displaying "Welcome [fullName]." Create three variables `guillaume`, `alex`, and `fred` that are instances of the `welcomeMessage` function with different names as arguments. Execute these instances.

**How to test:**
- Copy-paste your code.
- Execute the following in the console:
  ```javascript
  guillaume();
  alex();
  fred();
  ```

#### 3. Closure and loops

Write a function named `createClassRoom` that takes the argument `numbersOfStudents` (number). Inside this function, create a function named `studentSeat` that takes the argument `seat` (number) and returns a function that, when called, returns the `seat` number. After the definition of `studentSeat`, create and populate a variable named `students` (array). Using a loop from 0 to `numbersOfStudents`, pass the number of iteration + 1 to `studentSeat` and add its return value to the `students` array. Return the `students` array. Create a closure `classRoom` by calling `createClassRoom` with 10 students.

**Requirements:**
- Executing the following code should return the specified results:
  ```javascript
  console.log(classRoom[0]());  // Should return 1
  console.log(classRoom[3]());  // Should return 4
  console.log(classRoom[9]());  // Should return 10
  ```

#### 4. Complex Closure

Create a function `divideBy` that takes the argument `firstNumber` (number) and returns a function. The returned function should take the argument `secondNumber` (number) and return the result of dividing `secondNumber` by `firstNumber`. Similarly, create a function `addBy` with the same structure but for addition. Then, create four closures: `addBy100`, `addBy1000`, `divideBy10`, and `divideBy100`, each using the corresponding base function. Execute the specified code.

**Requirements:**
- Executing the following code should display the specified results:
  ```javascript
  console.log(addBy100(20));    // Should display 120
  console.log(divideBy10(20));  // Should display 2
  console.log(divideBy100(200));  // Should display 2
  console.log(addBy1000(20));  // Should display 1020
  ```

#### 5. Changing DOM with closure

Create a function named `changeMode` that accepts five arguments: `size` (number), `weight` (string), `transform` (string), `background` (string), and `color` (string). Using closure, change the style of the entire page by setting the font-size, font-weight, text-transform, background-color, and color. Write a function named `main` that sets variables `spooky`, `darkMode`, and `screamMode` using different arguments for `changeMode`. Add a paragraph and three buttons to the body of the page. When clicking on each button, the page's CSS should change to the different themes you created previously. Call the `main` function.

**Requirements:**
- Use vanilla JavaScript to add the elements to the DOM and change the style of the page.
- jQuery is not allowed!

#### 6. Private methods with closure

Write a module named `studentHogwarts` that contains two variables: `privateScore` set to 0 and `name` set to null. The module should have one private method named `changeScoreBy` that takes points as an argument and adds it to `privateScore`. The module gives access to four public methods: `setName`, `rewardStudent`, `penalizeStudent`, and `getScore`. Create an instance named `harry` and another named `draco`. Log to the console the name and score for both instances.

**Requirements:**
- Executing the code should log the following to the console:
  ```
  Harry: 4
  Draco: -2
  ```

#### 7. Stack order and setTimeout

Write commands that

 log specific messages to the console in a certain order. Use a loop that iterates 100 times to log numbers from 1 to 100. Include messages for the start and end of the loop.

**Requirements:**
- Your code should log to the console the following:
  ```
  Start of the execution queue
  1
  2
  ...
  100
  End of the loop printing
  Final code block to be executed
  ```

#### 8. Stack order in functions

Write a function named `processPayment` that takes one argument `amount` (number). Inside this function, log to the console "Collecting payment of [amount]." Write another function named `processOrder` that takes two arguments `orderId` (number) and `amount` (number). Inside this function, log to the console "[orderId] is being processed," call the `processPayment` function, and log "[orderId] has been fully processed." In the main part of the code, log to the console "Processing orders," call `processOrder` three times with different arguments, and log "All the orders have been processed."

**Requirements:**
- Your code should log the following to the console:
  ```
  Processing orders
  12321 is being processed
  Collecting payment of 10.99
  12321 has been fully processed
  12322 is being processed
  Collecting payment of 12.99
  12322 has been fully processed
  12323 is being processed
  Collecting payment of 15
  12323 has been fully processed
  All the orders have been processed
  ```

#### 9. Prime numbers & timing execution

Write a function named `countPrimeNumbers` that returns the number of prime numbers from 2 to 100. Log to the console the time in milliseconds to execute the function. Use the performance API to measure the time needed to execute the function (`performance.now()`).

**Requirements:**
- Your code should display something in the range of "Execution time of printing countPrimeNumbers was [time used] milliseconds."

#### 10. Execution stack & timing execution

Reuse the function `countPrimeNumbers` from the previous task. Execute the function 100 times and log to the console the time in milliseconds to execute the function 100 times. 

**Requirements:**
- Your code should display something in the range of "Execution time of calculating prime numbers 100 times was [time used] milliseconds."

#### 11. Changing stack order using setTimeout

Reuse the function `countPrimeNumbers` again. Log to the console the time in milliseconds to execute the function 100 times. Find a way to do most of the calculation at the end of the execution stack using `setTimeout`. 

**Requirements:**
- Your code should display something in the range of "Execution time of calculating prime numbers 100 times was [time used] milliseconds."
- Use the `setTimeout` keyword to change the stack order.

#### 12. Binding

Create an object named `roomDimensions` with three attributes: `width: 50`, `length: 100`, and `getArea`, which is a function that returns the surface area of the object using the `width` and `length`. Create a variable named `boundGetArea` that binds the object `roomDimensions` to the `getArea` function.

#### 13. Binding + Closure

Write an object `user` with several attributes. Create a function named `logWelcomeUser` that takes one argument `welcomeString` (String). Inside this function, log to the console the message "[welcomeString], [firstName]. Your occupation is: [occupation]." Create a variable named `bindLogWelcomeUser` that binds the `logWelcomeUser` function to the `user` object. Call the function with the string "Welcome."

**Requirements:**
- Calling `bindLogWelcomeUser('Hello')` should return "Hello, Buillaume. Your occupation is: Engineer."

#### 14. Simple callback

Write a new function named `createElement` that accepts one argument `data` (String). This function creates a paragraph element, sets the content of the paragraph to `data`, and appends the paragraph to the document body. Create a function named `queryWikipedia` that accepts one argument `callback` (function). Use XMLHttpRequest to fetch the article of Stack Overflow from the URL `https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*`. Once the fetch is correctly executed, call the `callback` function with the extract of the API response. Call `queryWikipedia` with `createElement` as the callback.

**Requirements:**
- Use vanilla JavaScript to run the Ajax query (no jQuery or other frameworks).
- Do not call `createElement` within `queryWikipedia` directly.