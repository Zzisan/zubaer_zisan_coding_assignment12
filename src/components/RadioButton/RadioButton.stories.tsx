import type { Meta, StoryObj } from "@storybook/react";
import RadioButton from "./RadioButton";

export default {
  title: "Components/RadioButton",
  component: RadioButton,
  argTypes: {
    label: { control: "text", defaultValue: "Select Option" },
    name: { control: "text", defaultValue: "group1" },
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
} as Meta<typeof RadioButton>;

type Story = StoryObj<typeof RadioButton>;

export const Default: Story = {
  args: {
    label: "Select Option",
    name: "group1",
    checked: false,
    disabled: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Checked Option",
    name: "group1",
    checked: true,
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Option",
    name: "group1",
    checked: false,
    disabled: true,
  },
};

export {}; // Ensures this file is treated as a module
