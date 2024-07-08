import { newSpecPage } from '@stencil/core/testing';
import { ActionBar } from '../action-bar';

describe('action-bar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ActionBar],
      html: `<action-bar></action-bar>`,
    });
    expect(page.root).toEqualHtml(`
      <action-bar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </action-bar>
    `);
  });
});
