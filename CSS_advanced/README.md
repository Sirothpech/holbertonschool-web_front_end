# Advanced CSS

This project focuses on advanced CSS concepts and techniques, aiming to enhance your understanding of selectors, properties, and values, as well as various aspects of styling webpages

## Requirements
### General
* Allowed editors: `vi`, `vim`, `emacs`, `VSCode`, `Atom`
* All your files will be interpreted on Chrome (version 78.x)
* All your files should end with a new line
* All your files should start by a comment describing the task
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should be W3C compliant and validate with `W3C-Validator`

## Tasks

## Task 0: Let's get some images!

Download 10 high-resolution images from Unsplash that are representative of the categories specified in the project description. Also, include the 2 logos and favicon mentioned in the project description.

Images to download:
- pic-about-01.jpg
- pic-work-01.jpg
- pic-work-02.jpg
- pic-work-03.jpg
- pic-article-01.jpg
- pic-article-02.jpg
- pic-article-03.jpg
- pic-person-01.jpg
- pic-person-02.jpg
- pic-person-03.jpg

## Task 1: Effortless transitions when scrolling

Ensure that scrolling on the HTML element provides a smooth and fluid experience.

## Task 2: Reuse and repeat. A programmer's life should be simple with variables

Update the custom properties in the root element with the following values:
- `color-primary`: #d73953
- `color-black`: #090909
- `color-white`: #ffffff
- `color-light-grey`: #f3f3f3
- `color-dark-grey`: #353535
- `text-color`: `color-black`

Reset the color of `section-tagline` and `card-category` to `color-primary`. Also, reset the color of `body` and `anchor` to `text-color`.

## Task 3: Variables for storing certain font types

In the root element, create two custom properties:
- `font-family-base` with the value "Helvetica Neue, Helvetica, Arial, sans-serif"
- `font-family-title` with the value "Helvetica Neue, Helvetica, Arial, sans-serif"

Set the `font-family` of the `body` to `font-family-base`. Set the `font-family` of the section headings (all 6 levels) to `font-family-title`.

## Task 4: Variables for the font size

In the root selector, create the following custom properties:
- `font-size-small` set to 1.2rem
- `font-size-medium` set to 1.6rem
- `font-size-large` set to 1.8rem
- `font-size-x-large` set to 2.3rem
- `font-size-xx-large` set to 4.8rem

Reduce the font size of all fonts in the `html` element to 62.5% of their normal size. Set the font size of any fonts in the `body` to `font-size-medium`.

## Task 5: Variables for the font-weight

In the root element, create the following custom properties:
- `font-weight-regular` set to 400
- `font-weight-bold` set to 700

Set the font weight of fonts in the `body` to `font-weight-regular`. Set the font weight of fonts in the headings to `font-weight-bold`.

## Task 6: Integrating Google Fonts into the CSS file

Add Open Sans as the first choice font for `font-family-base`. Shift the previous fonts down accordingly. Add Raleway as the first choice font for `font-family-title`. Shift the previous fonts down accordingly.

## Task 7: Defining line heights

In the root element, create the following custom properties:
- `line-height-small` set to 1.2
- `line-height-base` set to 1.5
- `line-height-big` set to 1.8

Set the minimum height of line boxes in the `body` to `line-height-base`.

## Task 8: Links are decorated by default, time to remove them

Remove text decoration for anchor elements.

## Task 9: Centering the section titles

Create a new custom property `section-header-align` and set it to `center`. Target the `section-header` class and set the horizontal alignment to `section-header-align`.

## Task 10: Add more styles to the section tagline

Create a custom property `section-tagline-transform` and set it to `uppercase`. Target the `section-tagline` class and set the font family to `font-family-title`. Use the `section-tagline-transform` property to transform the text. Set the font weight to `font-weight-bold`.

## Task 11: Adding more styling to the section title

Create the following custom properties:
- `section-title-margin` set to 0
- `section-title-color` set to `color-black`

Target the `section-title` class and set the font family to `font-family-title`. Set the font size to `font-size-xx-large`. Set the font weight to `font-weight-bold`. Use `section-title-margin` to set the margin. Use `section-title-color` to set the text color.

## Task 12: Pseudo Classes

Target anchor elements containing a hyperlink. Style the visited state by italicizing the text. Style the hover state by adding an underline to the links. Style the active state by setting the background color to `color-light-grey`.

## Task 13: Resetting the CSS stylesheet for browser consistency

Normalize the CSS file using the [normalize.css](https://necolas.github.io/normalize.css/) library

.

## Task 14: Add universal box-sizing

Add the following CSS rule just before the styling for `html`:

```css
*,
::before,
::after {
  box-sizing: border-box;
}
```

## Task 15: Add universal box-sizing

Add the following CSS rule just before the styling for `html`:

```css
*,
::before,
::after {
  box-sizing: border-box;
}
```

## Task 16: Styling the container

After the styles for `.section-tagline`, target the `.container` class and set the following:

- Width: 960px
- Margins: evenly distribute the margins on both the left and right sides

## Task 17: Adding padding to sections

Create the following custom properties:
- `section-padding` set to 5rem 0
- `section-header-padding` set to 0 0 3rem
- `section-body-padding` set to 0 0 3rem
- `section-footer-padding` set to 3rem 0 0
- `section-footer-align` set to center
- `footer-padding` set to 5rem 0 1rem

Just before the `section-header` declaration, target the class `.section` and set the padding on all 4 sides to `section-padding`.

Set `.section-header`'s padding on all 4 sides to `section-header-padding`.

Following the `section-header` declaration, target the `.section-body` class and set the padding on all 4 sides to `section-body-padding`.

Following the `section-body` declaration, target the `.section-footer` class and set the padding on all 4 sides to `section-footer-padding` and set the horizontal alignment with `section-footer-align`.

At the end of your style file, target the class `.footer`, pad all 4 sides of the selected element with `footer-padding`.

## Task 18: Customizing the navbar

Based on styles/17-style.css, make the following changes:

Targeting the `.navbar-menu` class, float it to the right.

For the `.nav` class:
- Set the margin on all sides to 0.
- Set the padding on all sides to 0.

Remove any default list styles for the `ul`.

Center align the text in the `.nav` class.

For the `.nav-item` class in `.nav`:
- Set the font family to `nav-item-font-family`.
- Set the font weight to `nav-item-font-weight`.
- Set the font size to `nav-item-font-size`.
- Set the letter spacing to `nav-item-letter-spacing`.
- Set the display to `nav-item-display`.
- Set the margin on all sides to `nav-item-margin`.

For the `.nav-link` class in `.nav`:
- Set the display to block.
- Set the padding to half of the root element for top and bottom, and equal to the root element for left and right.

While hovering over the `.nav-link` class in `.nav`, set their foreground color value to `nav-item-link-hover`.

Create the following custom properties:
- `nav-item-font-family` set to `font-family-title`.
- `nav-item-font-weight` set to `font-weight-bold`.
- `nav-item-font-size` set to `font-size-medium`.
- `nav-item-letter-spacing` set to 4% of the root element.
- `nav-item-display` to inline-block.
- `nav-item-margin` to 3 times the root element on the bottom and 0 elsewhere.
- `nav-item-link-hover` set to `color-primary`.

## Task 19: Grid styling and custom variables

Based on styles/18-style.css, make the following changes:

Create the custom property `section-tagline-margin` set to 0.

Set the margins for the `.section-tagline` class to `section-tagline-margin`.

For all `ul` with the class `.row`:
- Set 0 margins all around.
- Set no padding all around.
- Remove any default list styles for the list.

For the `.col-1-3` class:
- Set the width to 33.33% of its parent.
- Float it to the left.
- Set its padding to half of the root element.

For the `.col-1-2` class:
- Set the width to 50% of the parent.
- Float it to the left.
- Set its padding to half of the root element.

For the `.footer-copyright` class:
- Set no margins.
- Set the font size to `font-size-small`.
- Set the foreground color to `text-color`.

For all `ul` tags in the `.footer` class, align the text to the right.

## Task 20: Clear the context of the grid

Based on styles/19-style.css, write a CSS rule that creates a new row after each instance of the class `.row` with the following properties:

- No content.
- Displayed as a table.
- Do not allow any floating elements on either side.

## Task 21: Simplify the col- selector

Based on styles/20-style.css, select all classes that start with `.col-`:

- Float them to the left.
- Set their padding to half of the root element.

Hint: Be mindful of specificity.

Remove references to these common properties for the individual `.col-1-3` and `.col-1-2` classes.

## Task 22: Add a dark theme to sections

Based on styles/21-style.css, style the `data-section-theme="dark"` with the following rules:

- Redefine the custom property `text-color` to the `color-white`.
- Redefine the custom property `section-title-color` to `color-white`.
- Set the background to the variable `color-black`.

## Task 23: Fix issues for dark theme

Based on styles/22-style.css, make the following changes:

Style the `.footer-address` class:
- Set the color of the text to the `text-color` property.

Style the `.social-link` class:
- Style it so that it renders as a block element.

Style the `.social-link` class that also selects the `svg` children:
- Fill in the color of the `svg` children with the `text-color` variable.

## Task 24: Add background and hover state to services

Based on styles/23-style.css, target the `card-title` that is inside `.card-services`:
- Set the margin on all sides to none at all.

Target the `a` that is inside `.card-services`:
- Have them render as block level elements.
- Set the padding to 2 times the root element.
- Set the background color to the variable `color-light-grey`.

Target the hover state of `a` that is inside `.card-services`:
- Set the foreground color to the variable `color-white`.
- Set the color of the background to the variable `color-primary`.
- Text should not be decorated at all.

## Task 25: Add border to the button

Based on styles/24-style.css, make the following changes:

Add the following custom properties to the root selector in the CSS file:
- Name: `button-display`, Value: `inline-block`
- Name: `button-padding`, Value: `1.5rem 3rem`
- Name: `button-border`, Value: `0.2rem solid var(--color-primary)`
- Name: `button-color`, Value: `color-black`
- Name: `button-text-decoration`, Value: `none`
- Name: `button-font-size`, Value: `font-size-large`
- Name

: `button-hover-color`, Value: `color-white`
- Name: `button-hover-text-decoration`, Value: `none`
- Name: `button-hover-background`, Value: `color-primary`

Add these selectors after the selector for anchor links in active state:

Create the `.button` class selector:
- Set the display of the button to the variable `button-display`.
- Add padding all around with the variable `button-padding`.
- Style the border with the variable `button-border`.
- Set the size of fonts to the variable `button-font-size`.
- Set the foreground color to the variable `button-color`.
- Decorated text should have the value of the variable `button-text-decoration`.

Create the hover state of the `.button` class selector:
- Set the foreground color value to the variable `button-hover-color`.
- Decorated text should have the value of the variable `button-hover-text-decoration`.
- Use the value of the variable `button-hover-background` for the background.

In `[data-section-theme="dark"]`, add the following custom property:
- Create a custom property `button-color` pointing to the variable `color-white`.

## Task 26: Add border radius to images

Based on styles/25-style.css, make the following changes:

Add the `.card-testimonial` selector:
- Center align the text.

Target the `.card-avatar` that is inside the `.card-testimonial`:
- Round the radius on all sides at 50%.
- Set the width to 10 times the root element.
- Set the height to 10 times the root element.

Target the `<cite>` HTML tag, which is inside `.card-quote` inside the `.card-testimonial`:
- Style as a block level element.
- Pad the top with 1 times the root element.
- Set the foreground color value to the value of the `color-primary` variable.

## Task 27: Styling the section hero

Based on styles/26-style.css, make the following changes:

Add the `.section-hero` selector:
- Set the size of the background using 2-value syntax.
- Width should be 90rem and the height should be set to automatic.

Target the `section-title` inside the `.section-hero`:
- Add 5rem of margin to the bottom.

Target the `.section-inner` inside the `.section-hero`:
- Add 10rem, 40rem, 2rem, and 0 to the padding on the top, right, bottom, and left in 1 rule.

## Task 28: Fixing the header and menu navigation bar

Based on styles/27-style.css, make the following changes:

Create these custom properties:
- Name: `header-padding`, Value: `4rem 0 0`
- Name: `header-logo-position`, Value: `relative`
- Name: `header-logo-link-display`, Value: `inline-block`
- Name: `header-logo-link-position`, Value: `absolute`
- Name: `header-logo-link-top`, Value: `-1rem`
- Name: `header-logo-link-left`, Value: `0`

Create a `.header` class selector:
- Pad the header with the value within the variable `header-padding`.

Create a `.header-logo` class selector:
- Position the header-logo with the value of the variable `header-logo-position`.

Target the link inside the `.header-logo` class:
- Render the display using the value of the variable `header-logo-link-display`.
- Position the links with the value of the variable `header-logo-link-position`.
- Set the vertical position of the element using `header-logo-link-top`.
- Set the horizontal position of the element using `header-logo-link-left`.

## Task 29: Styling and custom properties for the nav

Based on styles/28-style.css, make the following changes:

Edit the `nav-item-link-hover` property by setting its value to the `color-white` variable.

Target the `before` pseudo-elements of `nav-link` that is inside the `nav`:
- Set the values of these elements to empty using `content`.
- Absolutely position the targeted elements.
- Set the vertical position to 0.
- The horizontal position of the targeted elements should be 0.
- Set the color of the background color of the targeted elements to the value `color-white`.
- The width of the targeted elements should be set to 0.
- Set the height to 20% of the root element value.

Target the `before` pseudo-elements of `nav-link` when `nav-item` is hover and is inside `nav`:
- Set the background color of the elements to the variable `color-primary`.
- Set the width of the elements to 100%.

## Task 30: Fix the works section

Based on styles/29-style.css, make the following changes:

Target `card-outer` within the `card-work`:
- Relatively position the element.
- Hide any overflow.

Target the image inside `card-image` inside `card-work`:
- The height of these elements should be 30rem.
- The width of this element should be 100%.
- Property: `object-fit`, Value: `cover`.
- Vertically align to the bottom.

Target `card-inner` inside `card-work`:
- Absolutely position the element.
- Vertically position with -0.1rem on the top.
- Horizontally position the element with -0.1rem on the left.
- Horizontally position the element with -0.1rem on the right.
- Set the z-index to 1.

Target `card-inner` when `card-work` is hover:
- Set the background color to this value: `rgba(0, 0, 0, 0.7)`.

Target `card-title` inside `card-work`:
- Center align the text.
- Margins all around should be 0.
- Opacity should be set to its lowest value.
- The height of the selected elements should be 100%.
- The position should be relative.

Target the link inside `card-title` and `card-work`:
- Make sure elements display as blocks.
- Text should not be decorated.
- Padding on the top should be 45%.

Create the `after` pseudo-elements of the link (inside `card-title` and `card-work`):
- Absolutely position the selected elements.
- Set the top, right, left, and bottom positions to be 0.
- The content property of these elements should have an empty value.

Target `card-title` when `card-work` is hover:
- The opacity of these elements should be set to the value of 1.

## Task 31: Add quotes decoration on testimonials

Based on styles/30-style.css, make the following changes:

Target the `card-quote` that is inside the `card-testimonial`:
- Style it so that the position is relative to its parent.

Target the `before` pseudo-element of `card-quote` that is inside the `card-testimonial`:
- The content should be set to the value `\201C`.
- Absolutely position the selected elements.
- The vertical position of the selected elements should be -4.5rem.
- The horizontal position from the left should be -1rem.
- The foreground color of the selected elements should be set to `#efeded`.
- The size of fonts should be 10rem.
- The z-index should be set to -1.

## Task 32: Incorporating transitions

Create the following custom properties:
- Name: `transition-duration`, Value: `.3s`
- Name: `transition-cubic-bezier`, Value: `cubic-bezier(0.17, 0.67, 0, 1.01)`

Add transformations on the card work:
- Target the `card-image` when `card-work` is hover.
- Use the `transform` property to apply a scale transform with a value of `scale(1.2)`.

Target the `card-outer` when `card-work` is hover:
- Use the `transform` property to apply a scale transform to make the elements shrink. Use `scale(0.95)`.

Add animations on the navigation items:
- Inside `.nav .nav-link::before`.
- Use the shorthand property `transition` and have it use the value of `var(--transition-duration) var(--transition-cubic-bezier)`.
- Animate the button background:
  - In the hover state of the `.button` class.
  - The duration of the transition should be set to the variable `transition-duration`.
  - The transition effect should be applied to the `color` and `background-color` properties (`transition-property`).

Add transitions on the card works:
- Inside `card-work:hover .card-image`.
- Use the shorthand property `transition` and have it use the value of `var(--transition-duration) var(--transition-cubic-bezier)`.
- Inside `.card-work .card-inner`.
- Use the shorthand property `transition` and have it use the value of `var(--transition-duration) var(--transition-cubic-bezier)`.

## Authors
This project was realized Christophe Ngan (@Sirothpech)
