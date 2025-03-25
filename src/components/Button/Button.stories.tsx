import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    children: { control: "text", defaultValue: "Click Me" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof Button>;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    disabled: false,
    children: "Click Me",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Click Me",
  },
};

export {};
//lolol
