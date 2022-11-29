import React from 'react';
import { Story, Meta } from '@storybook/react';
import { Field } from '../fields/Field';

export default {
  title: 'Example/Input',
  component: Field.Input,
  subcomponents: { Field, label: Field.Label },
  argTypes: {
    config: {
      control: {
        type: 'select',
        options: ['email', 'text', 'password', 'number'],
      },
    },
  },
} as Meta;

const Template: Story = (args) => {
  return <Field>
    <Field.Label>{args.config}</Field.Label>
    <Field.Input placeholder="Custom Input" {...args} />
  </Field>;
};

export const Default = Template.bind({});

// Default.args = {
//   config: 'email',
// };
