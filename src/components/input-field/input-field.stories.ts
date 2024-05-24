export default {
  title: 'Design System/Atoms/InputField',
};

const Template = args => `<input-field placeholder="${args.placeholder}"></input-field>`;

export const Example = Template.bind({});
Example.args = {
  placeholder: 'Label',
};
