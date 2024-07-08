import { newSpecPage } from '@stencil/core/testing';
import { DropdownMenu } from '../dropdown-menu';

describe('dropdown-menu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [DropdownMenu],
      html: `<dropdown-menu></dropdown-menu>`,
    });
    expect(page.root).toEqualHtml(`
      <dropdown-menu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </dropdown-menu>
    `);
  });
});
