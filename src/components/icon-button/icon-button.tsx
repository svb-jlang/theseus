import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'icon-button',
  styleUrl: 'icon-button.css',
  shadow: true,
})
export class IconButton {
  @Prop() icon: string;
  @Prop() text: string;

  render() {
    return (
      <button class="icon-button">
        {this.icon && (
          <svg class="icon" viewBox="0 0 24 24">
            <use href={`#${this.icon}`} />
          </svg>
        )}
        {this.text && <span class="text">{this.text}</span>}
      </button>
    );
  }
}
