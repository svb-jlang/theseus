import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'dropdown-menu',
  styleUrl: 'dropdown-menu.css',
  shadow: true,
})
export class DropdownMenu {
  @State() isOpen: boolean = false;

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <div class="dropdown-container">
        <div class="dropdown-toggle" onClick={() => this.toggleDropdown()}>
          <span>Dropdown</span>
          <svg class={this.isOpen ? 'icon rotated' : 'icon'} width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9l6 6 6-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </div>
        {this.isOpen && (
          <div class="dropdown-menu">
            <slot></slot>
          </div>
        )}
      </div>
    );
  }
}
