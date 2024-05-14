export default {
  title: 'Design System/Atoms/Button',
};

const Template = args => `<theseus-button variant=${args.variant}>${args.text}</theseus-button>`;

export const Solid = Template.bind({});
Solid.args = {
  text: 'Button',
  variant: 'solid',
};

export const Outline = Template.bind({});
Outline.args = {
  text: 'Button',
  variant: 'outline',
};

export const Ghost = Template.bind({});
Ghost.args = {
  text: 'Button',
  variant: 'ghost',
};

export const SolidIcon = Template.bind({});
SolidIcon.args = {
  text: 'Button',
  variant: 'solid',
};

export const OutlineIcon = Template.bind({});
OutlineIcon.args = {
  text: 'Button',
  variant: 'outline',
};

export const GhostIcon = Template.bind({});
GhostIcon.args = {
  text: 'Button',
  variant: 'ghost',
};
