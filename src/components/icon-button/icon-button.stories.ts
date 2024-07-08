export default {
  title: 'Components/IconButton',
  argTypes: {
    icon: { control: 'text' },
    text: { control: 'text' },
  },
};

const Template = args => `
  <div>
    <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg" style="position: absolute;">
      <symbol id="search" viewBox="0 0 24 24">
        <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M22 22L16.65 16.65" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="settings" viewBox="0 0 24 24">
        <path d="M12 1V3M12 21V23M4.21997 4.22L5.63997 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.21997 19.78L5.63997 18.36M18.36 5.64L19.78 4.22M8.99997 12C8.99997 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 8.99997 12 8.99997C10.3431 8.99997 8.99997 10.3431 8.99997 12ZM12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12C7 9.23858 9.23858 7 12 7Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
      <symbol id="user" viewBox="0 0 24 24">
        <path d="M12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2ZM12 10C9.79086 10 8 11.7909 8 14C8 15.1046 8.89543 16 10 16H14C15.1046 16 16 15.1046 16 14C16 11.7909 14.2091 10 12 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </symbol>
    </svg>

    <icon-button icon="${args.icon}" text="${args.text}"></icon-button>
  </div>
`;

export const IconOnly = Template.bind({});
IconOnly.args = {
  icon: 'search',
  text: '',
};

export const TextAndIcon = Template.bind({});
TextAndIcon.args = {
  icon: 'settings',
  text: 'Settings',
};
