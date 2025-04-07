## Tab List Component

The **Tab List** is a group of tab buttons rendered inside a container with `role="tablist"`. Each tab can be navigated using keyboard and screen readers, and is associated with a corresponding panel via `aria-labelledby`.

---


### ARIA Roles & Accessibility Attributes

| Element  | Attribute              | Description                                                                 |
|----------|------------------------|-----------------------------------------------------------------------------|
| `div`    | `role="tablist"`       | Groups a set of related tabs.                                               |
| `div`    | `aria-label="..."`     | Accessible label for the tablist (required for screen readers).             |
| `button` | `role="tab"`           | Defines the button as a tab.                                                |
| `button` | `aria-selected="true"` | Indicates the currently active tab (only one should be `true`).             |
| `button` | `tabindex="-1"`        | Inactive tabs should not be focusable by keyboard Tab key.                  |
| `button` | `id="..."`             | Unique ID used by `aria-labelledby` in tab panel.                           |
| `button` | `data-target="tab-id"` | Custom JS hook to toggle the matching panel.                                |


### HTML Example

```html
<div class="tabby">
  <div role="tablist" aria-label="Sample Tab List">
    <button role="tab" id="tab-1" data-target="tab-1" aria-selected="true">
      Lorem ipsum
    </button>
    <button role="tab" id="tab-2" data-target="tab-2" aria-selected="false" tabindex="-1">
      Quisque at pretium
    </button>
    <button role="tab" id="tab-3" data-target="tab-3" aria-selected="false" tabindex="-1">
      Nulla facilisi
    </button>
  </div>
</div>
