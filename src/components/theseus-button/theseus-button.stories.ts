export default {
  title: 'Design System/Atoms/Button',
};

const Template = () => `
<p><theseus-button variant='solid'>button - solid</theseus-button></p>
<p><theseus-button variant='outline'>button - outline</theseus-button></p>
<p><theseus-button variant='ghost'>button - ghost</theseus-button></p>
<p><theseus-button variant='solid'><theseus-icon variant="download"></theseus-icon></theseus-button></p>
<p><theseus-button variant='outline'><theseus-icon variant="download-outline"></theseus-icon></theseus-button></p>
<p><theseus-button variant='ghost'><theseus-icon variant="download-outline"></theseus-icon></theseus-button></p>
`;

export const Example = Template.bind({});
Example.args = {};
