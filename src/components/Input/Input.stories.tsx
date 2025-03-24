import type { Meta, StoryObj } from '@storybook/react';
import Input from './Input';

export default {
  title: 'Components/Input',
  component: Input,
  argTypes: {
    label: { control: 'text', defaultValue: 'Enter Text' },
    placeholder: { control: 'text', defaultValue: 'Type here...' },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    error: { control: 'text' },
  },
} as Meta<typeof Input>;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: 'Enter Text',
    placeholder: 'Type here...',
    value: '',
    disabled: false,
    error: '',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot type here...',
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    label: 'Error Input',
    placeholder: 'Type here...',
    error: 'This field is required!',
  },
};

export {}; // Ensures this file is treated as a module
