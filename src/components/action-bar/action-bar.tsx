import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'action-bar',
  styleUrl: 'action-bar.css',
  shadow: true,
})
export class ActionBar {
  render() {
    return (
      <Host>
        <div class="action-bar-container">
          <text-field placeholder="Search">
            <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M22 22L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </text-field>
          <div class="actions">
            <icon-button icon="search"></icon-button>
            <icon-button icon="settings"></icon-button>
            <icon-button icon="user" text="Profile"></icon-button>
          </div>
        </div>
      </Host>
    );
  }
}
