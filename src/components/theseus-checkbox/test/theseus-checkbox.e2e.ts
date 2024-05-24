import { newE2EPage } from '@stencil/core/testing';

describe('theseus-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<theseus-checkbox></theseus-checkbox>');

    const element = await page.find('theseus-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
