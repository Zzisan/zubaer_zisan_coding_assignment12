import type { Meta, StoryObj } from "@storybook/react";
import Image from "./Image";

export default {
  title: "Components/Image",
  component: Image,
  argTypes: {
    src: { control: "text", defaultValue: "https://via.placeholder.com/300" },
    alt: { control: "text", defaultValue: "Placeholder Image" },
    width: { control: "text", defaultValue: "300px" },
    height: { control: "text", defaultValue: "200px" },
    rounded: { control: "boolean" },
    bordered: { control: "boolean" },
  },
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    src: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Placeholder Image",
    width: "300px",
    height: "200px",
    rounded: false,
    bordered: false,
  },
};

export const Rounded: Story = {
  args: {
    src: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Rounded Image",
    width: "300px",
    height: "200px",
    rounded: true,
    bordered: false,
  },
};

export const Bordered: Story = {
  args: {
    src: "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Bordered Image",
    width: "300px",
    height: "200px",
    rounded: false,
    bordered: true,
  },
};

export {}; // Ensures this file is treated as a module
