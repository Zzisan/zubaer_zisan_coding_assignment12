import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

export default {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    src: {
      control: 'text',
      defaultValue: 'https://via.placeholder.com/1200x400',
    },
    title: { control: 'text', defaultValue: 'Welcome to My Site' },
    subtitle: {
      control: 'text',
      defaultValue: 'This is a hero image with an overlay',
    },
    height: { control: 'text', defaultValue: '400px' },
    overlay: { control: 'boolean' },
    align: {
      control: 'radio',
      options: ['left', 'center', 'right'],
      defaultValue: 'center',
    },
  },
} as Meta<typeof HeroImage>;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Welcome to My Site',
    subtitle: 'This is a hero image with an overlay',
    height: '400px',
    overlay: true,
    align: 'center',
  },
};

export const NoOverlay: Story = {
  args: {
    src: 'https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Bright and Clear',
    subtitle: 'This hero image has no overlay',
    height: '400px',
    overlay: false,
    align: 'center',
  },
};

export {}; // Ensures this file is treated as a module
