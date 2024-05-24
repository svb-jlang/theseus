import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'input-field',
  styleUrl: 'input-field.css',
  shadow: true,
})
export class InputField {
  @Prop() placeholder: string = 'Label';
  render() {
    return <input type="text" placeholder={this.placeholder} />;
  }
}
