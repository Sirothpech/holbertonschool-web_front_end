# jQuery Advanced

## 0. Setup your dev environment
**File:** `0-index.html`

- Load the latest version of jQuery using the code.jquery.com CDN.
- Use the Slim & minified version of jQuery.
- Verify that jQuery is loaded correctly:
  - If loaded, log to the console "jQuery has been loaded correctly."
  - If not loaded properly, log to the console "jQuery has not been loaded correctly."

## 1. Creating a DOM element
**File:** `1-index.html`

- Create a function named `createTextElement`.
- Within the function, create a paragraph (`p`) HTML element.
- Set the paragraph's content to a Lorem Ipsum text.
- Add the paragraph to the body of the page.
- Call the `createTextElement` function.

## 2. Creating multiple DOM elements at once
**File:** `2-index.html`

- Create a function named `createFamilyTree`.
- Inside the function, create a table element.
- The table head should display "Firstname" and "Lastname" in two cells.
- The table body should contain three rows with specified values.
- Use the `append` keyword to attach all elements of the table to the page.
- Call the `createFamilyTree` function.

## 3. Chain DOM elements
**File:** `3-index.html`

- Reuse the `createFamilyTree` function from the previous task.
- Recreate each element one by one.
- Use the `append` keyword for each element and `text` for the cells.
- Do not create any intermediate variable.
- Call the `createFamilyTree` function.

## 4. HTML function
**File:** `4-index.html`

- Reuse the `createFamilyTree` function.
- Create a new function named `replaceFamilyTree`.
- Replace the children of the `tbody` element with a new `tr`.
- The `tr` should contain two cells with "Gerard" and "Bonissa" each.
- Make sure `createFamilyTree` and `replaceFamilyTree` are called.

## 5. Click attribute and remove function
**File:** `5-index.html`

- Remove the `createFamilyTree` and `replaceFamilyTree` functions.
- Create a function `createFamilyTree` that appends an empty table and tbody to the body.
- Create a function `addNewMember` that appends a new row with three cells.
- The third cell should display "(x)" and remove the row on click.
- Add CSS to the third cell for an orange background.
- Call the `createFamilyTree` function.
- Generate a fake table using `addNewMember`.

## 6. Val, before, and prepend functions
**File:** `6-index.html`

- Reuse the `createFamilyTree` function.
- Reuse the `addNewMember` function.
- Add a new argument `position` to `addNewMember` for placing the row at the top or bottom.
- Write a function `createForm` that adds inputs, a select, and a submit button.
- When clicking submit, call `addNewMember` with values from inputs and the select.
- Call the `createFamilyTree` and `createForm` functions.

## 7. Query - Setup your dev environment
**File:** `7-index.html`

- Remove existing functions from the script.
- Import jQuery using the CDN and ensure access to the ajax methods.
- Create a form using a function `createSearchForm`:
  - Input text without ID, name, or class.
  - Input submit.
  - On submit, query `queryWikipedia` function with the input value.
- An empty `ul` element.
- Create a function `addNewArticle` to add new items to the list.
- Create a function `get` for querying Wikipedia using the `queryWikipedia` function.
- Call `createSearchForm` when the page loads.

## 8. Pagination
**File:** `8-index.html`

- Reuse the code from the previous task.
- Modify `createSearchForm`:
  - Append another list with the id `pagination`.
- Modify `queryWikipedia`:
  - Add a new parameter `offset`.
  - Modify the data object to include the offset.
  - After receiving the response, call the function `buildPagination`.
- Create a function `buildPagination`:
  - Accept `numberOfItems`, `itemsPerPage`, and `currentOffset`.
  - Reset the pagination list.
  - Display pagination with page numbers.
  - On click, call `queryWikipedia` with the correct offset.

## 9. Wrap/unwrap
**File:** `9-index.html`

- Reuse the code from the previous task.
- In the header, add a CSS class named `loading` with opacity 0.2.
- Create a function `displayLoading`:
  - Accept a boolean `loading`.
  - Wrap or unwrap the `ul

` element with a `div` of class `loading`.
- Modify `queryWikipedia`:
  - Call `displayLoading` before querying and after receiving the response.

## 10. Another Get API
**File:** `10-index.html`

- Reuse the code from the previous task.
- Remove functions and styles.
- Import jQuery using the CDN.
- Create a function `addPostRow`:
  - Accepts `data` (object) and appends a paragraph to the body.
  - Paragraph contains a span element with post information.
- Create a function `listPosts`:
  - Queries the local server's posts endpoint.
  - Calls `addPostRow` for each element in the response.
  - Displays an alert if the server is unavailable.
- Call `listPosts` when the page loads.

## 11. Post query
**File:** `11-index.html`

- Reuse the code from the previous task.
- Create a function `buildForm`:
  - Appends a form to the body with inputs for author and title.
  - Appends a submit button.
- Create a function `sendForm`:
  - Adds a text after the form.
  - Creates a data object with title and author attributes.
  - Sends a POST query to the server endpoint posts.
  - Calls `addPostRow` with the data on success.
  - Displays an alert on failure.
- Call `listPosts` and `buildForm` on page load.

## 12. Delete query
**File:** `12-index.html`

- Reuse the code from the previous task.
- Modify `addPostRow`:
  - Add an `id` attribute to the paragraph with the format "row-ID."
  - Append a span element with the text "(delete)" before post information.
  - On click, call `deletePost` with the post id.
- Create a function `deletePost`:
  - Accepts `id` (number).
  - Sends a DELETE query to the posts endpoint with the id.
  - Removes the corresponding row on success.
  - Displays an alert on failure.