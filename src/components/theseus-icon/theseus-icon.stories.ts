export default {
  title: 'Design System/Atoms/Icon',
};

const Template = args => `
  <theseus-icon variant="${args.icon}"></theseus-icon>
  <theseus-icon variant="download-icon"></theseus-icon>
  `;

export const Example = Template.bind({});
Example.args = {
  icon: 'download',
};
