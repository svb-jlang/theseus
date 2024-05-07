import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'theseus-button',
  styleUrl: 'theseus-button.css',
  shadow: true,
})
export class TheseusButton {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
