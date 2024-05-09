export default {
  title: 'Components/DropDown',
};

const Template = args => `<drop-down>${args.text}</drop-down>`;

export const Example = Template.bind({});
Example.args = {
  text: 'Value',
};
