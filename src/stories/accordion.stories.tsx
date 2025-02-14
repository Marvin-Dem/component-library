import { Meta, StoryObj } from "@storybook/react";
import Accordion from "./accordion";
import { AccordionItem } from "./accordion";

const meta: Meta<typeof Accordion> = {
    title: "Accordion",
    component: Accordion,
    decorators: [
        (Story) => (
            <div className="w-1/2">
                <Story />
            </div>
        ),
    ],
};
export default meta;
type Story = StoryObj<typeof meta>;

const numberArray = [1, 2, 3, 4];

const accordionItems: AccordionItem[] = [
    { title: "Accordion 1", content: "Test Content String 1" },
    {
        title: "Accordion 2",
        content: (
            <div className="grid grid-cols-2 gap-2">
                {numberArray.map((number) => {
                    return (
                        <div
                            key={number}
                            className="border border-black rounded-full flex justify-center"
                        >
                            {number}
                        </div>
                    );
                })}
            </div>
        ),
    },
    {
        title: "Accordion 3",
        content: (
            <div className="grid grid-cols-2 gap-2">
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the first test button
                </button>
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the second test button
                </button>
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the third test button
                </button>
                <button className="text-white bg-black text-lg p-4 rounded-lg cursor-pointer hover:bg-gray-800">
                    Click the fourth test button
                </button>
            </div>
        ),
    },
    {
        title: "Accordion 4",
        content: (
            <div className="flex justify-center">
                <img
                    src="/bisasam.png"
                    alt="Picture of Bulbasaur"
                    width={475}
                    height={475}
                ></img>
            </div>
        ),
    },
];

const singleAccordionItem: AccordionItem[] = [
    {
        title: "Single Accordion Item",
        content:
            "This is a single accordion item. Its only purpose is to meet the acceptance criteria of the task.",
    },
];

export const SingleAccordionStory: Story = {
    args: { items: singleAccordionItem },
};

export const AccordionStorie: Story = {
    args: {
        items: accordionItems,
        allowMultiple: true,
    },
};

export const AllowOneOpeningAccordion: Story = {
    args: {
        items: accordionItems,
        allowMultiple: false,
    },
};
