export default {
  title: 'Components/ContextualBanner',
};

const Template = args => `<contextual-banner bannertitle="${args.title}">${args.text}</contextual-banner>`;

export const Example = Template.bind({});
Example.args = {
  title: 'Message Title',
  text: 'Description',
};
