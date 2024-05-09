import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'contextual-banner',
  styleUrl: 'contextual-banner.scss',
  shadow: true,
})
export class ContextualBanner {
  @Prop() bannertitle?: string;

  render() {
    return (
      <Host>
        <i class="icon" />
        <div class="text">
          {!!this.bannertitle && <h3>{this.bannertitle}</h3>}
          <p>
            <slot></slot>
          </p>
        </div>
      </Host>
    );
  }
}
