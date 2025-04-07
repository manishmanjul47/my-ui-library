##  Hero Section Component

The **Hero Section** is a content-first layout block that introduces a key message or callout at the top of a page. It includes a small eyebrow heading, a large title, and a supporting paragraph with optional inline links.

---

### CSS Class Reference

| Element             | Class           | Purpose                                 |
|---------------------|------------------|----------------------------------------|
| `section`           | `hero-section`   | Wraps the full hero block              |
| `small` (optional)  | `eyebrow`        | Short label or subheading              |
| `h1`                | `title`          | Primary heading                        |
| `p`                 | `intro`          | Supporting introduction or description |
| `a` (inside `p`)    | —                | Optional inline link for emphasis      |



### HTML Structure

```html
<section class="hero-section">
  <small class="eyebrow">LOREM IPSUM DOLOR SIT AMET</small>
  <h1 class="title">consectetur adipiscing elit</h1>
  <p class="intro">
    Donec suscipit ex eu faucibus <a href="#">laoreet</a>. Nulla non neque mauris.
    Quisque molestie aliquam sem eget mattis. Suspendisse vehicula nisl non quam
    imperdiet fringilla. Sed sodales ante vel lectus vestibulum.
  </p>
</section>
