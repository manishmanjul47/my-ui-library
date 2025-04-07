/**
 * @jest-environment jsdom
 */
import Tab from './tabs';

describe('Tab Component', () => {
    let tabElement;
    let tabInstance;

    beforeEach(() => {
        document.body.innerHTML = `
      <div class="tab">
        <div role="tablist" aria-label="Sample">
          <button role="tab" id="tab-1" data-target="tab-1" aria-selected="true">Tab 1</button>
          <button role="tab" id="tab-2" data-target="tab-2" aria-selected="false" tabindex="-1">Tab 2</button>
        </div>
        <div class="tabs-contents">
          <section role="tabpanel" aria-labelledby="tab-1">Panel 1</section>
          <section role="tabpanel" aria-labelledby="tab-2" hidden>Panel 2</section>
        </div>
      </div>
    `;

        tabElement = document.querySelector('.tab');
        tabInstance = new Tab(tabElement);
    });

    test('initializes tabs and tabpanels', () => {
        expect(tabInstance.tabs.length).toBe(2);
        expect(tabInstance.tabPanels.length).toBe(2);
    });

    test('selects second tab on click', () => {
        const secondTab = tabInstance.tabs[1];
        secondTab.click();

        expect(secondTab.getAttribute('aria-selected')).toBe('true');
        expect(secondTab.tabIndex).toBe(0);

        const secondPanel = tabInstance.getTabpanel('tab-2');
        expect(secondPanel.hasAttribute('hidden')).toBe(false);
    });

    test('navigates to next tab on ArrowRight key', () => {
        const event = new KeyboardEvent('keydown', { key: 'ArrowRight' });
        tabInstance.tabsList.dispatchEvent(event);

        const secondTab = tabInstance.tabs[1];
        expect(secondTab.getAttribute('aria-selected')).toBe('true');
    });

    test('shifts focus from tab to tabpanel on Tab key', () => {
        const tab = tabInstance.tabs[0]; // Tab 1
        const panel = tabInstance.getTabpanel(tab.dataset.target); // Panel 1

        // Spy on focus() method of the tabpanel
        const spy = jest.spyOn(panel, 'focus').mockImplementation(() => { });

        const event = new KeyboardEvent('keydown', {
            key: 'Tab',
            bubbles: true,
        });

        // Simulate tab being focused and key pressed
        tab.dispatchEvent(event);

        expect(spy).toHaveBeenCalled();
    });


    test('clicking back-to-tabs button focuses correct tab', () => {
        const backButton = document.createElement('button');
        backButton.className = 'back-to-tabs';
        backButton.setAttribute('data-tab-id', 'tab-1');

        tabInstance.tabPanels[0].appendChild(backButton);

        const spy = jest.spyOn(tabInstance.tabs[0], 'focus');

        backButton.click();

        expect(spy).toHaveBeenCalled();
    });
});
