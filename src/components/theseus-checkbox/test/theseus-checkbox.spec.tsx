import { newSpecPage } from '@stencil/core/testing';
import { TheseusCheckbox } from '../theseus-checkbox';

describe('theseus-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TheseusCheckbox],
      html: `<theseus-checkbox></theseus-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <theseus-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </theseus-checkbox>
    `);
  });
});
