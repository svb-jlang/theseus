import { newE2EPage } from '@stencil/core/testing';

describe('contextual-banner', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<contextual-banner></contextual-banner>');

    const element = await page.find('contextual-banner');
    expect(element).toHaveClass('hydrated');
  });
});
