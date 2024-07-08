import { newE2EPage } from '@stencil/core/testing';

describe('action-bar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<action-bar></action-bar>');

    const element = await page.find('action-bar');
    expect(element).toHaveClass('hydrated');
  });
});
