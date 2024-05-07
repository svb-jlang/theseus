export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/TheseusButton',
};

const Template = args => `<theseus-button>${args.text}</theseus-button>`;

export const Example = Template.bind({});
Example.args = {
  text: 'Button',
};
