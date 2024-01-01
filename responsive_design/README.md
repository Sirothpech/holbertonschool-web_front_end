# Responsive Design

## Tasks

### 0. Fix the hero banner

In your `01-styles.css` file, make the following updates:

```css
/* Inside the hero-homepage class selector */
.hero-homepage {
    background-position: 65% 8rem;
    background-size: 90rem auto;
}

/* Inside the selector that targets section-inner class inside section-hero class */
.section-hero .section-inner {
    min-height: 35vh;
}
```

### 1. Make the container flexible

In your `02-styles.css` file, update the `.container` selector:

```css
.container {
    max-width: 100%;
}
```

### 2. Fix layout issues

In your `02-1-styles.css` file, add the following:

```css
/* Helpers section */
main img {
    width: 100%;
    height: auto;
}

/* Section Latest news section */
@media (max-width: 767px) {
    .section-latest-news .row {
        flex-direction: column;
    }
}

/* Grid section */
@media (max-width: 767px) {
    :root {
        --section-padding: 5rem 1.5rem;
        --section-body-padding: 2rem 0 0;
    }

    ul.row,
    .row {
        flex-direction: column;
        margin: 0;
    }

    [class^="col-"] {
        margin: 0 0 3rem 0;
        width: 100%;
    }

    .col-1-3,
    .col-1-2 {
        width: 100%;
    }

    .navbar-menu {
        display: none;
    }
}
```

### 3. Generate images with responsive breakpoints

Visit [Responsive Breakpoints](https://www.responsivebreakpoints.com/), configure the settings, and replace your image tags with the generated markup.

### 4. Create the mobile icon and hide the menu

Add the following changes:

**HTML Changes:**

```html
<!-- Just before the <nav class="navbar-menu"> -->
<input class="menu-btn" type="checkbox" id="menu-btn">
<label class="menu-icon" for="menu-btn">
    <span class="navicon"></span>
</label>
```

**CSS Changes:**

```css
/* Navbar section */
@media (max-width: 767px) {
    .navbar-menu {
        display: none;
    }
}

/* Hamburger */
.menu-icon {
    cursor: pointer;
    padding: 2.5rem;
    position: relative;
    user-select: none;
}

.menu-icon .navicon {
    background: var(--color-white);
    display: block;
    width: 2rem;
    height: 0.2rem;
    position: relative;
    transition: background .2s ease-out;
}

.menu-icon .navicon::before,
.menu-icon .navicon::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    background: var(--color-white);
    transition: all .2s ease-out;
}

.menu-icon .navicon::before {
    top: 0.7rem;
}

.menu-icon .navicon::after {
    top: -0.7rem;
}

/* Behavior based on menu-btn state */
/* menu btn */
.menu-btn {
    display: none;
}

.navbar-menu .menu-btn:checked ~ nav {
    max-height: 100%;
    overflow: inherit;
}

/* Section HERO section */
@media (max-width: 767px) {
    .section-hero {
        margin: -0.1rem 0;
    }

    .hero-homepage {
        background-position: 85% 0;
    }

    .section-hero .section-body {
        padding: 2rem;
    }
}
```

### 5. Hamburger!

Add the following changes:

```css
.menu-icon:hover .navicon {
    background: transparent;
}

.menu-icon:hover .navicon::before {
    transform: rotate(-45deg);
}

.menu-icon:hover .navicon::after {
    transform: rotate(45deg);
}

.menu-icon:hover .navicon::before,
.menu-icon:hover .navicon::after {
    top: 0;
}

/* Media query for max-width: 767px */
:root {
    --header-padding: 2rem 0 0;
}

.header {
    background: var(--color-black);
}

.header-container {
    flex-wrap: wrap;
    padding: 0 1.5rem;
}

.menu-icon {
    display: block;
}

/* Media query for max-width: 480px */
.header-logo {
    flex-basis: 70%;
}

/* Media query for min-width: 481px and max-width: 767px */
@media (min-width: 481px) and (max-width: 767px) {
    .header-logo {
        flex-basis: 79%;
    }
}

/* Hide menu icon on desktop mode */
.header .menu-icon {
    display: none;
}
```

### 7. Make the font size responsive

In your CSS file, add the following:

```css
/* Base section */
@media (max-width: 480px) {
    html {
        font-size: 57%;
    }
}

@media (min-width: 481px) and (max-width: 767px) {
    html {
        font-size: 60%;
    }
}
```

### 8. Improve the "Works" section

In your `08-styles.css` file, add the following:

```css
/* Card WORK */
@media (max-width: 767px) {
    .card-work .card-inner {
        color: var(--color-white);
        position: relative;
    }

    .card-work .card-title {
        opacity: 1;
    }

    .card-work .card-title a {
        padding: 2rem 1rem 0 1rem;
    }
}
```

### 9. Improve the "Footer" section

In your `09-styles.css` file, add the following:

```css
/* Footer section */
@media (max-width: 767px) {
    :root {
        --footer-padding: 5rem 2rem 1rem;
    }

    .social.nav,
    .footer-nav {
        text-align: center;
    }

    .social.nav li + li,
    .footer-nav li + li {
        padding-left: 2rem;
    }
}
```

### 10. Fix the top header background

In your `10-styles.css` file, add the following:

```css
/* Section HERO section */
.article-page .section-hero {
    margin-top: -8.5rem;
    padding-top: 5rem;
}
```

This completes the tasks for making the design responsive. Ensure to apply these changes to your project files.