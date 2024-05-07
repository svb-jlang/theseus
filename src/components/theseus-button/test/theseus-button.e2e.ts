import { newE2EPage } from '@stencil/core/testing';

describe('theseus-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<theseus-button></theseus-button>');

    const element = await page.find('theseus-button');
    expect(element).toHaveClass('hydrated');
  });
});
