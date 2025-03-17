import { Meta, StoryObj } from "@storybook/react";
import TempConverter from "./temp-converter";

const meta: Meta<typeof TempConverter> = {
    title: "TempConverter",
    component: TempConverter,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const TempConverterStory: Story = {
    args: {},
};
