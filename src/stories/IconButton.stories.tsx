import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IconButton } from '../buttons/IconButton';

export default {
  title: 'Example/IconButton',
  component: IconButton,
} as Meta;

const Template: Story = (args) => (
  <IconButton disabled={false} {...args}>
    Submit
  </IconButton>
);

export const Default = Template.bind({});
