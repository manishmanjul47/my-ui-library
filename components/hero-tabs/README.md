## Hero Tabs Component

The `hero-tabs` component combines a prominent hero section with an accessible tabbed interface. It’s ideal for landing pages, product overviews, or onboarding flows that require both a strong intro and switchable content areas.

---

### CSS Class Reference

| Element   | Class           | Purpose                                        |
|-----------|------------------|-----------------------------------------------|
| `section` | `hero-tabs`      | Container for hero + tabs combo               |
| `section` | `hero-section`   | Hero area with heading and intro              |
| `small`   | `eyebrow`        | Subheading or label                           |
| `h1`      | `title`          | Main page title                               |
| `p`       | `intro`          | Supporting description                        |
| `div`     | `tabby`          | Tab container wrapper                         |
| `div`     | `tabs-contents`  | Container for all tab panels                  |
| `button`  | `back-to-tabs`   | Focusable link back to tab from panel         |


### ARIA Roles & Accessibility Attributes

| Element   | Attribute                    | Description                                                                 |
|-----------|------------------------------|-----------------------------------------------------------------------------|
| `div`     | `role="tablist"`             | Groups related tab buttons                                                  |
| `div`     | `aria-label="..."`           | Describes the tablist to screen readers                                     |
| `button`  | `role="tab"`                 | Identifies a button as a tab                                                |
| `button`  | `aria-selected="true"`       | Indicates the currently active tab                                          |
| `button`  | `tabindex="-1"`              | Makes inactive tabs unfocusable by keyboard                                 |
| `button`  | `id="..."`                   | Connects tab to panel via `aria-labelledby`                                 |
| `button`  | `data-target="tab-id"`       | JS hook to target panel ID                                                  |
| `section` | `role="tabpanel"`            | Container for content associated with a tab                                 |
| `section` | `aria-labelledby="tab-id"`  | References the associated tab                                                |
| `section` | `tabindex="-1"`              | Allows focus on panel via JS                                                |
| `section` | `hidden`                     | Hides inactive panel content                                                |
| `button`  | `class="back-to-tabs"`       | Screen reader-only focus return to tabs                                     |
| `button`  | `data-tab-id="tab-id"`       | JS hook to return focus to corresponding tab                                |


### Keyboard Support

| Key            | Behavior                                                                      |
|----------------|-------------------------------------------------------------------------------|
| `← ArrowLeft`  | Moves focus to the previous tab                                               |
| `→ ArrowRight` | Moves focus to the next tab                                                   |
| `Tab` / `↓`    | Moves focus into the active tab panel                                         |
| `Shift + Tab`  | Moves focus back out of the panel                                             |
| `Enter`/Click  | Activates a tab or focuses tab from inside panel (via "Back to tabs")         |


### HTML Markup

```html
<section class="hero-tabs">
  <section class="hero-section">
    <small class="eyebrow">LOREM IPSUM DOLOR SIT AMET</small>
    <h1 class="title">consectetur adipiscing elit</h1>
    <p class="intro">
      Donec suscipit ex eu faucibus <a href="#">laoreet</a>. Nulla non neque mauris...
    </p>
  </section>

  <div class="tabby">
    <div role="tablist" aria-label="Sample Tab List">
      <button role="tab" id="tab-1" data-target="tab-1" aria-selected="true">Lorem ipsum</button>
      <button role="tab" id="tab-2" data-target="tab-2" aria-selected="false" tabindex="-1">Quisque at pretium</button>
      <button role="tab" id="tab-3" data-target="tab-3" aria-selected="false" tabindex="-1">Nulla facilisi</button>
    </div>

    <div class="tabs-contents">
      <section role="tabpanel" aria-labelledby="tab-1" tabindex="-1">
        <h2>Lorem ipsum dolor sit amet</h2>
        <p>Morbi non <a href="#">lacus</a> nunc...</p>
        <div class="back-wrap">
          <button class="back-to-tabs" data-tab-id="tab-1">← Back to tabs</button>
        </div>
      </section>

      <section role="tabpanel" aria-labelledby="tab-2" tabindex="-1" hidden>
        <h2>Quisque at pretium justo</h2>
        <p><a href="#">Aliquam</a> vel mollis ligula...</p>
        <div class="back-wrap">
          <button class="back-to-tabs" data-tab-id="tab-2">← Back to tabs</button>
        </div>
      </section>

      <section role="tabpanel" aria-labelledby="tab-3" tabindex="-1" hidden>
        <h2>Nulla facilisi viverra non</h2>
        <p>Nam lorem magna, iaculis in ornare ut...</p>
        <div class="back-wrap">
          <button class="back-to-tabs" data-tab-id="tab-3">← Back to tabs</button>
        </div>
      </section>
    </div>
  </div>
</section>
