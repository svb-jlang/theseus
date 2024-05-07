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
      <input placeholder={this.placeholder} type="text"></input>
    );
  }

}
