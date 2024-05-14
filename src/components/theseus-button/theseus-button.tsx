import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'theseus-button',
  styleUrl: 'theseus-button.css',
  shadow: true,
})
export class TheseusButton {
  @Prop() variant: string = 'solid';

  render() {
    return (
      <Host class={`btn-${this.variant}`}>
        <slot></slot>
      </Host>
    );
  }
}
