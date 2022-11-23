import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Upload',
  component: Field.Upload,
  subcomponents: { Field, label: Field.Label },
} as Meta;

const Template: Story = (args) => (
  <Field>
    <Field.Label>Upload</Field.Label>
    <Field.Upload {...args} />
  </Field>
);

export const Default = Template.bind({});

Default.args = {
    isResizable: true,
};