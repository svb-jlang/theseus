import { newSpecPage } from '@stencil/core/testing';
import { InputField } from '../input-field';

describe('input-field', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [InputField],
      html: `<input-field></input-field>`,
    });
    expect(page.root).toEqualHtml(`
      <input-field>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </input-field>
    `);
  });
});
