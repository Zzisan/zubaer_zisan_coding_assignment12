import type { Meta, StoryObj } from "@storybook/react";
import Card from "./Card";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    image: {
      control: "text",
      defaultValue: "https://via.placeholder.com/300x200",
    },
    title: { control: "text", defaultValue: "Card Title" },
    description: {
      control: "text",
      defaultValue: "This is a description of the card.",
    },
    buttonText: { control: "text", defaultValue: "Click Me" },
    width: { control: "text", defaultValue: "300px" },
  },
} as Meta<typeof Card>;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Card Title",
    description: "This is a description of the card.",
    buttonText: "Click Me",
  },
};

export const WithoutButton: Story = {
  args: {
    image:
      "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
    title: "Simple Card",
    description: "This card does not have a button.",
  },
};

export {}; // Ensures this file is treated as a module
