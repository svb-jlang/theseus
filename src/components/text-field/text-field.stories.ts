export default {
  title: 'Components/TextField',
  argTypes: {
    placeholder: { control: 'text' },
    icon: { control: 'boolean' },
  },
};

const Template = ({ placeholder, icon }) => {
  return `
    <text-field placeholder="${placeholder}">
      ${
        icon
          ? `
        <svg slot="icon" width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M22 22L16.65 16.65" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>`
          : ''
      }
    </text-field>
  `;
};

export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  placeholder: 'Enter text...',
  icon: false,
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  placeholder: 'Search...',
  icon: true,
};
