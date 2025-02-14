import { Meta, StoryObj } from "@storybook/react";
import Flashcard from "./flash-card";

const meta: Meta<typeof Flashcard> = {
    title: "Flashcard",
    component: Flashcard,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const FlashcardStory: Story = {
    args: { title: "Flashcard", content: "Test 123" },
};
