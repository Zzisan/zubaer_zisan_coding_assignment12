import type { Meta, StoryObj } from "@storybook/react";
import Text from "./Text";

export default {
  title: "Components/Text",
  component: Text,
  argTypes: {
    children: { control: "text", defaultValue: "Sample text" },
    fontSize: { control: "text", defaultValue: "16px" },
    color: { control: "color", defaultValue: "#333" },
    bold: { control: "boolean" },
    italic: { control: "boolean" },
  },
} as Meta<typeof Text>;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: "Sample text",
    fontSize: "16px",
    color: "#333",
    bold: false,
    italic: false,
  },
};

export const Bold: Story = {
  args: {
    children: "Bold text",
    fontSize: "16px",
    color: "#333",
    bold: true,
    italic: false,
  },
};

export const Italic: Story = {
  args: {
    children: "Italic text",
    fontSize: "16px",
    color: "#333",
    bold: false,
    italic: true,
  },
};

export {}; // Ensures this file is treated as a module
