import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'text-field',
  styleUrl: 'text-field.css',
  shadow: true,
})
export class TextField {
  @Prop() placeholder: string;

  render() {
    return (
      <div class="text-field-container">
        <slot name="icon"></slot>
        <input placeholder={this.placeholder} type="text" />
      </div>
    );
  }
}
