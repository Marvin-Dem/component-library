import { Meta, StoryObj } from "@storybook/react";
import Flashcard from "./flash-card";
import { FlashcardItem } from "./flash-card";

const meta: Meta<typeof Flashcard> = {
    title: "Flashcard",
    component: Flashcard,
};

export default meta;
type Story = StoryObj<typeof meta>;

const flashcardItems: FlashcardItem[] = [
    {
        question: "Test Question 1",
        answer: "Test Answer 1",
    },
    {
        question: "Test Question 2",
        answer: "Test Answer 2",
    },
    {
        question: "Test Question 3",
        answer: "Test Answer 3",
    },
    {
        question: "Test Question 4",
        answer: "Test Answer 4",
    },
];

export const FlashcardStory: Story = {
    args: { items: flashcardItems },
};
