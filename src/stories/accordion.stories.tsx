import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./accordion";

const meta: Meta<typeof Accordion> = {
    title: "Accordion",
    component: Accordion,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const AccordionStorie: Story = {
    args: {},
};
