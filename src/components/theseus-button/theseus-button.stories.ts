export default {
  title: 'Components/TheseusButton',
};

const Template = args => `<theseus-button>${args.text}</theseus-button>`;

export const Example = Template.bind({});
Example.args = {
  text: 'Button',
};
