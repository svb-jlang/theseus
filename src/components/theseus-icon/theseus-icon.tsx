import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'theseus-icon',
  styleUrl: 'theseus-icon.css',
  shadow: true,
})
export class TheseusIcon {
  @Prop() variant: string;

  render() {
    return <i class={`icon-${this.variant}`}></i>;
  }
}
