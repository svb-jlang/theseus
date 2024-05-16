import { newE2EPage } from '@stencil/core/testing';

describe('theseus-icon', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<theseus-icon></theseus-icon>');

    const element = await page.find('theseus-icon');
    expect(element).toHaveClass('hydrated');
  });
});
