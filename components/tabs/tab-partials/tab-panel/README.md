## Tab Panel Component

The **Tab Panel** component displays the content associated with a specific tab. It is linked to its corresponding tab via the `aria-labelledby` attribute and is hidden when inactive.

Each panel is focusable and includes a visually hidden “Back to tabs” button to assist screen reader users in navigating back to the tab list.

---

### ARIA Roles & Accessibility Attributes

| Element   | Attribute                    | Description                                                                 |
|-----------|------------------------------|-----------------------------------------------------------------------------|
| `section` | `role="tabpanel"`            | Identifies the content region associated with a tab.                        |
| `section` | `aria-labelledby="tab-id"`  | Links the panel to the corresponding tab via its `id`.                       |
| `section` | `tabindex="-1"`              | Makes the panel programmatically focusable for accessibility.               |
| `section` | `hidden`                     | Hides inactive panels from all users (visually and screen readers).         |
| `button`  | `class="back-to-tabs"`       | Screen-reader-first link to return focus to the selected tab.               |
| `button`  | `data-tab-id="tab-id"`       | JavaScript hook to focus the correct tab when clicked.                      |


### Keyboard Support

| Key           | Behavior                                                                  |
|---------------|---------------------------------------------------------------------------|
| `Tab` or `↓`  | Moves focus into the tab panel from an active tab                         |
| `Shift + Tab` | Moves focus back out of the panel (standard browser behavior)             |
| `Enter`/Click | Pressing the "Back to tabs" button shifts focus to the original tab       |



### HTML Example

```html
<div class="tabby">
  <div class="tabs-contents">
    <section role="tabpanel" tabindex="-1" aria-labelledby="tab-1">
      <h2>Panel Title</h2>
      <p>Panel content goes here...</p>
      <div class="back-wrap">
        <button class="back-to-tabs" data-tab-id="tab-1">← Back to tabs</button>
      </div>
    </section>
  </div>
</div>
