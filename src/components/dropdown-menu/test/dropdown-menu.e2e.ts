import { newE2EPage } from '@stencil/core/testing';

describe('dropdown-menu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<dropdown-menu></dropdown-menu>');

    const element = await page.find('dropdown-menu');
    expect(element).toHaveClass('hydrated');
  });
});
