import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'drop-down',
  styleUrl: 'drop-down.scss',
  shadow: true,
})
export class DropDown {
  render() {
    return (
      <Host>
        <slot></slot>
        <i class="icon" />
      </Host>
    );
  }
}
