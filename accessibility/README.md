# Accessibility

## 0. Make the "Works" Card Focus Visible (Mandatory)
Fix focus issues in the "Works" section. Remove opacity styles, update hover styles, and ensure keyboard navigation is visually represented.

```css
/* 01-styles.css */
.card-work .card-title a {
  opacity: 0;
}

.card-work .card-title a:focus,
.card-work:hover .card-title a {
  opacity: 1;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
}
```

## 1. Add Skip Links (Mandatory)
Introduce skip links for better navigation. Create a skip links menu and style it appropriately.

```html
<!-- 01-index.html -->
<body>
  <!-- Skip links -->
  <nav aria-label="Skip links">
    <ul class="off-screen">
      <li><a href="#a11y-primary-nav" class="skip-link">Skip to primary navigation</a></li>
      <li><a href="#a11y-main-content" class="skip-link">Skip to main content</a></li>
    </ul>
  </nav>

  <nav class="navbar-menu" id="a11y-primary-nav" tabindex="-1">
    <!-- Navbar content -->
  </nav>

  <main id="a11y-main-content" tabindex="-1">
    <!-- Main content -->
  </main>
</body>
```

```css
/* 01-styles.css */
.off-screen {
  left: -100vw;
  position: absolute;
}

.skip-link {
  background: var(--color-black);
  color: var(--color-white);
  left: 0;
  padding: 0.7rem;
  position: fixed;
  opacity: 0;
  top: 0;
  z-index: 10;
  transform: translateY(-1rem);
  transition: transform 0.2s ease-in-out, opacity 0.2s ease-in-out;
}

.skip-link:focus {
  opacity: 1;
  transform: translateY(0);
}
```

## 2 at 10. Various Accessibility Improvements (Mandatory)
Implement a series of changes to enhance accessibility. These include fixing color contrast, adding titles, setting the language attribute, providing alternative text for images, labeling form elements, adding discernible text to links, enabling zooming, adjusting heading levels, and introducing landmarks.

Refer to the respective HTML and CSS files for each task for detailed implementation.

## 11. Transform Elements into Lists (Mandatory)
Convert certain elements into lists to improve the document's structure.

```html
<!-- 10-index.html -->
<nav>
  <ul>
    <li><a href="#">Link 1</a></li>
    <li><a href="#">Link 2</a></li>
    <li><a href="#">Link 3</a></li>
  </ul>
</nav>

<div class="package-list">
  <ul>
    <li><span>Package 1</span></li>
    <li><span>Package 2</span></li>
    <li><span>Package 3</span></li>
  </ul>
</div>
```

Note: These are concise examples, and it is assumed that the provided CSS and HTML files will be referenced for more detailed code.