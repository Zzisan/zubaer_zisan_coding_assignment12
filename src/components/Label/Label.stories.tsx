
import type { Meta, StoryObj } from '@storybook/react';
import Label from './Label';

export default {
  title: 'Components/Label',
  component: Label,
  argTypes: {
    children: { control: 'text', defaultValue: 'Label Text' },
    htmlFor: { control: 'text', defaultValue: 'input-id' },
    disabled: { control: 'boolean' },
  },
} as Meta<typeof Label>;

type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    children: 'Label Text',
    htmlFor: 'input-id',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled Label',
    htmlFor: 'input-id',
    disabled: true,
  },
};

export {}; // Ensures this file is treated as a module
