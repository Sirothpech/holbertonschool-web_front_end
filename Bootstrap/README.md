# Bootstrap

## 0. Reboot styling
Add Bootstrap to reset the CSS styling.

## 1. Blocks

### Requirements

- You are not allowed to define any styling in a CSS file, in head or inline - only Bootstrap classes.
- You cannot change the HTML structure - only adding classes is allowed.

### Behaviors/Styles

#### General Styles

- For all cells of all rows:
  - Padding at .5rem.
  - Background color of the name of the cell.
  - Text centered and white.

#### First Line

- Each cell has the same width.
- Screen >= 992px: display like 4 columns in one line.
- Screen < 992px: display like 4 lines in one column.

#### Second Line

- Each cell has the same width.
- Screen >= 576px: display like 4 columns in one line.
- Screen < 576px: display like 4 lines in one column.

#### Third Line

- The last cell takes 50% of the width of the screen.
- The middle cell has 2 times the size of the first cell.
- Screen >= 992px: display like 3 columns in one line.
- Screen < 992px: display like 3 lines in one column.

#### Fourth Line

- Different order (from left to right) based on the size.
- Screen >= 1200px: Primary -> Success -> Danger -> Warning.
- Screen between 992px and 1200px: Warning -> Primary -> Success -> Danger.
- Screen between 768px and 992px: Danger -> Warning -> Primary -> Success.
- Screen <= 768px: Success -> Danger -> Warning -> Primary.

#### Fifth Line

- Each cell has the same width (~16% of the screen).
- Screen >= 768px: display like 2 columns on each side of the screen in one line.
- Screen < 768px: display like 2 lines in one column.

#### Last Line

- Each cell has the same width (~16% of the screen).
- Screen >= 768px: display like 3 columns in one line with the space between the first and middle cell 2 times bigger than the space between the middle cell and the last cell.
- Screen < 768px: display like 3 lines in one column.

## 2. Table of Chemical Elements

### Requirements

- You are not allowed to define any styling in a CSS file, in head, or inline - only Bootstrap classes.
- You cannot change the HTML structure - only adding classes is allowed.

### Behaviors/Styles

#### Header

- With border bottom.
- Padding .5rem and margin bottom 1rem.
- Background color "light".
- Horizontal listing, no margin bottom:
  - First item aligned on the left with a border rounded image.
  - 2 other items aligned on the right with 2 links (aligned vertically in the middle) with a layout of a button of style "secondary".
  - The link "Chemical elements" is active.
  - The main block has full width, spanning the entire width of the viewport.

#### First Section

- The div inside is an alert of style "info":
  - h4 is the header of this alert.
  - The last paragraph (containing the link) should not have any margin bottom.

#### Second Section

- h1 has a margin bottom of 1.5rem and margin top of 3rem.
- Inside the h1, "only 5" has a badge layout of type "info".
- The div is able to make the table responsive with a break at 992px.
- The table has "dark" style and hover on rows.

## 3. Cards

### Requirements

- You are not allowed to define any styling in a CSS file, in head, or inline - only Bootstrap classes.
- You cannot change the HTML structure - only adding classes is allowed.

### Behaviors/Styles

- The first div is a container with a break at 992px and padding of 3rem.
- Inside, the card is in a row until 576px where it will switch to column.
- Each card has a spacing of 1.5rem on top.
- The text "Coding" is a card header.
- Language name (card title) and description (card text) are inside a card body.
- Duration in hours is a card footer.
- Also, the button "Play with" has the "danger" layout and should open a modal.
- The second div is the modal:
  - Centered vertically and horizontally.
  - The form has a border on top and padding on top of 1rem:
    - Each item of the form is grouped.
  - The final rendering of the form must be the same as the screen (label on the left, color style, etc.).

## 4. Bob Dylan

### Requirements

- You are not allowed to define any styling in a CSS file, in head, or inline - only Bootstrap classes.
- You cannot change the HTML structure - only adding classes is allowed.

### Behaviors/Styles

- Body background is dark.
- All elements are inside a div container with a break at 960px, background color light, and padding of 1rem.
- h1 has a margin bottom and top of 1.5rem.
- ul is a tabs navigation with the first item active by default.
- The div after the ul is

 the container of tabs content with a background color of white and padding of 1rem.
- The switch between tab contents is animated with a fade.
- In the tab "Discography":
  - The list of discs has a grouped layout.
  - Each disc name has a link that extends or collapses description.

## 5. Show/Hide - Screen Size

### Requirements

- You are not allowed to define any styling in a CSS file, in head, or inline - only Bootstrap classes.
- You cannot change the HTML structure - only adding classes is allowed.

### Behaviors/Styles

- Big title is displayed only for a width screen > 768px.
- Small title is displayed only for a width screen <= 768px.
- The first div should:
  - Be centered as a container and take the full width when the width of the screen <= 768px.
  - Have an "info color" background.
  - Have some padding on the 4 directions.
  - Have borders of the "info color" and rounded.
- "Left div" should:
  - Be aligned on the left.
  - Have light text color.
  - Have light border on the bottom and right.
  - Have some padding on the 4 directions.
- "Middle div" should:
  - Be aligned in the center.
  - Have light text color.
  - Have a light border on the bottom, left, and right.
  - Have some padding on the 4 directions.
  - Have a shadow.
  - Disappear when the width of the screen <= 768px.
- "Right div" should:
  - Be aligned on the right.
  - Have light text color.
  - Have a light border on the bottom and left.
  - Have some padding on the 4 directions.

## 6. Overwrite CSS

### Requirements

- You are not allowed to define any styling in the head or inline of the HTML.
- You cannot change the HTML.

### New Styles

- `btn-primary` has a background color set to #E0003C and #BC1340 for hover/focus/active.
- `btn-outline-primary` has text and border color set to #E0003C.
- A link (no matter which color forced) has text color set to #E0003C normally, in hover, and in focus.
- Card (card container, but also header/footer) has a border color set to #E0003C and radius to 1rem.
- `.text-muted` has text color set to #8C8C8C.