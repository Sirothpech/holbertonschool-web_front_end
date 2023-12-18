# Form

This project focuses on creating a user-friendly form in HTML and styling it using CSS. The form allows users to leave comments on an article. Below are the key steps and changes made to implement the form:

## HTML Changes (01-article.html)

- Added a new section with the class `post-comments` after the existing post section.
- Created a header within the `post-comments` section with a heading level 2 (`section-title`) stating "Leave a comment" and a paragraph mentioning that all fields are required.
- Added a form with action "#" and method "post" within the `post-comments` section.

## CSS Styling (01-styles.css)

### Comment Section Styling

- Styled the `post-comments` class with width, margin, and padding properties.

### Basic Form Styling

- Styled all forms with display, flex-direction, padding, and margin properties.

## Task 1: More Comment Basic Structure (02-article.html)

- Created a new HTML file (02-article.html) based on the structure of the form in 01-article.html.
- Added fieldsets and legends for personal information and comments.

## CSS Styling (02-styles.css)

- Styled all fieldsets with flex properties, justify-content, border, and padding.

## Task 2: Create Labels and Input Container (03-article.html)

- Added labels and input containers for various form fields in the first and second fieldsets.

## CSS Styling (03-styles.css)

- Styled labels for cursor, display, white-space, font-size, and padding.

## Task 3: Create the Inputs (04-article.html)

- Added input elements for various form fields with specific attributes.

## CSS Styling (04-styles.css)

- Styled input, textarea, and placeholder for various properties like position, width, padding, border, and background.

## Task 4: Add Help Messages (05-article.html)

- Added help messages after each input field to guide users.

## CSS Styling (05-styles.css)

### Form Group Styling

- Styled form-group class with padding, margin, and background properties.
- Applied specific styles for the focus-within state of the form-group class.

### Form Field Styling

- Styled form-field-container class and form-field-icon class for position and font-style.

### Form Help Styling

- Styled form-help class inside form-group class for margin, line-height, letter-spacing, color, font-size, max-height, and transition properties.
- Applied specific styles for the focus-within state of the form-help class.

## Task 5: Add Pure HTML/CSS Error Handling (06-styles.css)

- Created custom properties for error and valid colors.
- Implemented CSS code for error handling, including icon display and border color changes.

## Task 6: Add the Search Form (07-article.html)

- Added a search form to the navigation with an input field and a search button.

## CSS Styling (07-styles.css)

### Search Form Styling

- Styled the form-search class with display, padding, and position properties.
- Styled the search-button class with display, background, border, margin, and padding properties.
- Styled the search-icon class for fill, width, and height.

These changes result in a well-structured and styled form, providing a seamless user experience for leaving comments and performing searches.