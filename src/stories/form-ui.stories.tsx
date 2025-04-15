import { Meta, StoryObj } from "@storybook/react";
import FormUI from "./form-ui";

const meta: Meta<typeof FormUI> = {
    title: "FormUI",
    component: FormUI,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FormUIStory: Story = {};
