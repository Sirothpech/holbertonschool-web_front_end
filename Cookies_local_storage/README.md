# Cookies & Local Storage

## Tasks

### Task 0: Create Basic Cookie
1. Install your development environment:
    - Install `webpack-dev-server` by running `npm install webpack-dev-server --save-dev`. If you encounter missing dependencies, install them with `npm i -D webpack` and `npm i -D webpack-cli`.
    - Create an empty file `src/index.js`.
    - Run your server with `node_modules/.bin/webpack-dev-server`.
2. In a file `0-index.html`:
    - Create a basic HTML template.
    - Add two text inputs with the id `firstname` and `email`.
    - Add a button with the text "Log me in" calling the function `setCookies`.
    - Add a button with the text "Show the cookies" calling the function `showCookies`.
3. Create a function `setCookies`:
    - Set the cookie `firstname` with the value in the `firstname` input.
    - Set the cookie `email` with the value in the `email` input.
4. Create a function `showCookies`:
    - Create a DOM element `p`.
    - Set the inner HTML with "Cookies:" and the value of the cookie.
    - Append the paragraph at the bottom of the page.
5. Requirements:
    - Try to make your page look as close to the provided image.
    - Access your code with http://localhost:8080/0-index.html.
    - Use vanilla JavaScript.

### Task 1: Create Cookie with Expiration Date and Specific Path
1. In a file `1-index.html`:
    - Reuse the code from the previous task.
    - Modify the way you set cookies to expire in 10 days.
2. Requirements:
    - Access your code with http://localhost:8080/1-index.html.
    - Use vanilla JavaScript.

### Task 2: Read Cookie
1. In a file `2-index.html`:
    - Reuse the code from the previous task.
    - Create a function `getCookie`:
        - Accepts `name` as an argument.
        - Return the value of the cookie with the provided name; otherwise, return an empty string.
    - Modify the function `showCookies`:
        - Display the paragraph "Email: EMAIL - Firstname: FIRSTNAME."
2. Requirements:
    - Access your code with http://localhost:8080/2-index.html.
    - Use vanilla JavaScript.

### Task 3: Delete Cookie and Mini Application
1. In a file `3-index.html`, reuse your code from the previous task.
2. Add a div in HTML that will contain the login form:
    - Reuse the existing form.
    - It has one h2, two text inputs, and one button.
3. Write a function named `showForm`:
    - Remove the welcome message if it exists.
    - Show the form.
4. Write a function named `hideForm`:
    - Hide the form.
5. Write a function named `deleteCookiesAndShowForm`:
    - Remove the two cookies.
    - Show the form by calling the `showForm` function.
6. Write a function named `showWelcomeMessageOrForm`:
    - If the user is not logged in, call the `showForm` function.
    - If the user is logged in, replace the body of the page with an h1 displaying "Welcome FIRSTNAME (logout)".
    - "logout" should be a link.
    - On click, call the `deleteCookiesAndShowForm`, hide the welcome message, and show the form.
7. Requirements:
    - Access your code with http://localhost:8080/3-index.html.
    - Use vanilla JavaScript to complete the task.
    - Build the welcome message with JavaScript without using HTML.

### Task 4: Use js-cookie
1. Reuse the code from the previous task.
2. Add `js-cookie` to your HTML page using the jsdelivr CDN.
3. Delete the `getCookie` function and use `js-cookie` `get` function instead.
4. Use `js-cookie` `remove` function within `deleteCookiesAndShowForm` function.
5. Use `js-cookie` `set` function within `setCookiesAndShowWelcomeMessage` function (new function that sets cookies and calls `showWelcomeMessageOrForm`).
6. Requirements:
    - Access your code with http://localhost:8080/4-index.html.
    - Build the welcome message with JavaScript without using HTML.
    - Use `js-cookie` for every cookie manipulation.

### Task 5: Local Storage
1. Create a new file `5-index.html`.
2. Setup your files:
    - Create an array `availableItems` containing "Shampoo," "Soap," "Sponge," and "Water."
    - Display an alert if local storage is not enabled.
    - If local storage is available, allow the user to see the application and call the function `createStore` and `displayCart`.
3. Create a function `addItemToCart`:
    - Accepts `item` (string) as an argument.
    - Adds a key to the local storage with the name of the item and sets the value to true.
4. Create a function `createStore`:
    - Creates a `ul` and appends it to the DOM.
    - Loops through the array of items, creating a list item to add to the `ul`.
    - Displays the name of the available product.
    - On click, the item calls the `addItemToCart` function.
5. Create a function `displayCart`:
    - If local storage does not contain any items, do nothing.
    - If local storage contains items, display the message "You previously had X items in your cart" in a `p` element appended to the body.
6. Requirements:
    - Build the DOM using JavaScript only.
    - Use the local storage of your browser (not a cookie or session storage).
    - Access your code with http://localhost:8080/5-index.html.
    - Build every feature with vanilla JavaScript only.

### Task 6: Session Storage
1. Reuse the code from the previous task.
2. Replace the use of local storage by session storage.
3. Requirements:
    - Build the DOM using JavaScript only.
    - Use the session storage of your browser (not a cookie or local storage).
    - Access your code with http://localhost:8080/6-index.html.
    - Build every feature with vanilla JavaScript only.

### Task 7: Advanced Use of Web Storage
1. In a new file, build a more advanced cart system using session storage.
2. Setup your files:
    - Create an array `availableItems` containing "Shampoo," "Soap," "Sponge," and "Water."
    - Display an alert if session storage is not enabled.
    - If session storage is available, allow the user to see the application and call the function `createStore` and `displayCart`.
3. Create a function `getCartFromStorage`:
    - Parses a string into a JSON object, returning the content of the cart stored in session storage.
    - Returns an empty object if there is no cart.
4. Create a function `addItemToCart`:
    - Accepts `item` (string) as an argument.
   

 - Adds the item to the cart object.
    - If the same item is added multiple times, the cart stores the quantity.
    - Stores the value of the cart object in a string for the key `cart` in session storage.
    - Calls `displayCart`.
5. Create a function `removeItemfromCart`:
    - Accepts `item` (string) as an argument.
    - Removes the entire item from the cart.
    - Stores the value of the cart object in a string for the key `cart` in session storage.
    - Calls `displayCart`.
6. Create a function `clearCart`:
    - Clears the entire session storage.
    - Calls `displayCart`.
7. Create a function `createStore`:
    - Adds an `h2` tag with the text "Available products."
    - Adds a list with every item available for purchase.
    - When the user clicks on an item, it adds it to the cart.
8. Create a function `displayCart`:
    - Adds an `h2` tag with the text "Your cart."
    - Adds an empty `div` tag.
    - If the div tag already exists, removes any list child.
    - Calls `updateCart`.
9. Create a function `updateCart`:
    - Adds a list to the div tag created previously.
    - If the cart is empty, adds an item "Your cart is empty."
    - If the cart is not empty, adds the list of items within the cart with the format "ITEM_NAME x QUANTITY (remove)."
    - When the user clicks on remove, calls the `removeItemfromCart`.
    - At the top of the cart, adds an item named "Clear my cart." When the user clicks on it, calls the `clearCart`.
10. Tips:
    - You can look at the provided GIF to see how the interaction with the different elements works.
11. Requirements:
    - Build the DOM using JavaScript only.
    - Use the session storage of your browser (not a cookie or local storage).
    - Access your code with http://localhost:8080/7-index.html.
    - Build every feature with vanilla JavaScript only.
    - `src/index.js` should stay empty; all your JavaScript must be in your HTML, inside `<script>` tags.