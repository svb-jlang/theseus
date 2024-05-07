export default {
  // this creates a ‘Components’ folder and a ‘MyComponent’ subfolder
  title: 'Components/TextField',
};

const Template = args => `<text-field placeholder="${args.placeholder}"></text-field>`;

export const Example = Template.bind({});
Example.args = {
  placeholder: 'Label',
};
