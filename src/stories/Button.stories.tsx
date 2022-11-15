import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Button } from '../buttons/Button';

export default {
  title: 'Example/Button',
  component: Button,
} as Meta;

// File: src/stories/Button.stories.tsx

const Template: Story = (args) => (
  <Button disabled={false} {...args}>
    Clicky
  </Button>
);

export const Default = Template.bind({});
