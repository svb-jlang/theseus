import { Component, h } from '@stencil/core';

@Component({
  tag: 'theseus-checkbox',
  styleUrl: 'theseus-checkbox.css',
  shadow: true,
})
export class TheseusCheckbox {
  render() {
    return <input type="checkbox" />;
  }
}
