import { newE2EPage } from '@stencil/core/testing';

describe('input-field', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<input-field></input-field>');

    const element = await page.find('input-field');
    expect(element).toHaveClass('hydrated');
  });
});
