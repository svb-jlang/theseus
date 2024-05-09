import { newSpecPage } from '@stencil/core/testing';
import { ContextualBanner } from '../contextual-banner';

describe('contextual-banner', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ContextualBanner],
      html: `<contextual-banner></contextual-banner>`,
    });
    expect(page.root).toEqualHtml(`
      <contextual-banner>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </contextual-banner>
    `);
  });
});
