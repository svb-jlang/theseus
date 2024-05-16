import { newSpecPage } from '@stencil/core/testing';
import { TheseusIcon } from '../theseus-icon';

describe('theseus-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TheseusIcon],
      html: `<theseus-icon></theseus-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <theseus-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </theseus-icon>
    `);
  });
});
