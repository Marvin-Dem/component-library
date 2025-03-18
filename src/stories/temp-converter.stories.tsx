import { Meta, StoryObj } from "@storybook/react";
import TempConverter from "./temp-converter";

const meta: Meta<typeof TempConverter> = {
    title: "TempConverter",
    component: TempConverter,
};

export default meta;
type Story = StoryObj<typeof meta>;

const tempUnits: string[] = ["Celsius", "Fahrenheit", "Kelvin"];

export const TempConverterStory: Story = {
    args: { items: tempUnits },
};
