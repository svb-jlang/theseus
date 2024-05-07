import { newSpecPage } from '@stencil/core/testing';
import { TheseusButton } from '../theseus-button';

describe('theseus-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [TheseusButton],
      html: `<theseus-button></theseus-button>`,
    });
    expect(page.root).toEqualHtml(`
      <theseus-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </theseus-button>
    `);
  });
});
