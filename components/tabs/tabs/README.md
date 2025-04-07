## Tab Component

The `Tab` component includes a fully accessible tab interface using WAI-ARIA roles. It allows keyboard navigation and screen reader support, along with screen-reader-only “Back to tabs” functionality for seamless UX.

---

### ARIA Roles & Accessibility Attributes

| Element   | Attribute                    | Description                                                                 |
|-----------|------------------------------|-----------------------------------------------------------------------------|
| `div`     | `role="tablist"`             | Groups a set of related tabs.                                               |
| `div`     | `aria-label="..."`           | Label for screen readers describing the tab group.                          |
| `button`  | `role="tab"`                 | Identifies each tab element.                                                |
| `button`  | `aria-selected="true"`       | Indicates which tab is currently selected.                                  |
| `button`  | `tabindex="-1"`              | Prevents keyboard tabbing to inactive tabs.                                 |
| `button`  | `id="..."`                   | Used by `aria-labelledby` on the matching tab panel.                        |
| `button`  | `data-target="tab-id"`       | JS hook to link a tab to a panel.                                           |
| `section` | `role="tabpanel"`            | Identifies the container for tab content.                                   |
| `section` | `aria-labelledby="tab-id"`  | Links the panel to its tab.                                                  |
| `section` | `tabindex="-1"`              | Allows the panel to be programmatically focused.                            |
| `section` | `hidden`                     | Hides inactive panels from screen readers and UI.                           |
| `button`  | `class="back-to-tabs"`       | Accessible return link for screen reader users.                             |
| `button`  | `data-tab-id="tab-id"`       | JS hook to focus the matching tab from inside panel.                        |


### Keyboard Support

| Key            | Behavior                                                                 |
|----------------|--------------------------------------------------------------------------|
| `← ArrowLeft`  | Moves focus to the previous tab.                                         |
| `→ ArrowRight` | Moves focus to the next tab.                                             |
| `Tab` / `↓`    | Moves focus into the currently active tab panel.                         |
| `Shift + Tab`  | Moves focus back out of the panel.                                       |
| `Enter`/Click  | Activates tab or focuses tab from inside panel (via "Back to tabs").     |



### HTML Structure

```html
<div class="tabby">
  <div role="tablist" aria-label="Sample Tab List">
    <button role="tab" id="tab-1" data-target="tab-1" aria-selected="true">Lorem ipsum</button>
    <button role="tab" id="tab-2" data-target="tab-2" aria-selected="false" tabindex="-1">Quisque at pretium</button>
    <button role="tab" id="tab-3" data-target="tab-3" aria-selected="false" tabindex="-1">Nulla facilisi</button>
  </div>

  <div class="tabs-contents">
    <section role="tabpanel" tabindex="-1" aria-labelledby="tab-1">
      <h2>Lorem ipsum dolor sit amet</h2>
      <p>Morbi non <a href="#">lacus</a> nunc...</p>
      <div class="back-wrap">
        <button class="back-to-tabs" data-tab-id="tab-1">← Back to tabs</button>
      </div>
    </section>

    <section role="tabpanel" tabindex="-1" aria-labelledby="tab-2" hidden>
      <h2>Quisque at pretium justo</h2>
      <p><a href="#">Aliquam</a> vel mollis ligula...</p>
      <div class="back-wrap">
        <button class="back-to-tabs" data-tab-id="tab-2">← Back to tabs</button>
      </div>
    </section>

    <section role="tabpanel" tabindex="-1" aria-labelledby="tab-3" hidden>
      <h2>Nulla facilisi viverra</h2>
      <p>Nam lorem magna, iaculis in ornare...</p>
      <div class="back-wrap">
        <button class="back-to-tabs" data-tab-id="tab-3">← Back to tabs</button>
      </div>
    </section>
  </div>
</div>
