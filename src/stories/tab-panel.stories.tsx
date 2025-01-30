import { Meta, StoryObj } from "@storybook/react";
import TabPanel from "./tab-panel";

const meta: Meta<typeof TabPanel> = {
    title: "Tab Panel",
    component: TabPanel,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Panel: Story = {
    args: {
        tabs: [
            {
                title: "Tab 1",
                content: (
                    <div className="flex flex-col gap-2 items-center">
                        <p className="text-lg">Header of Test Content 1</p>
                        <div className="text-white bg-black text-lg p-4 rounded-lg">
                            Boxed main content of Test Content 1
                        </div>
                        <p className="text-lg">Bottom text of Test Content 1</p>
                    </div>
                ),
            },
        ],
    },
};

const numberArray = [1, 2, 3, 4];

export const MultiPanel: Story = {
    args: {
        tabs: [
            {
                title: "Tab 1",
                content: (
                    <div className="flex flex-col gap-1 items-center">
                        <p className="text-lg">Header of Test Content 1</p>
                        <div className="text-white bg-black text-lg p-4 rounded-lg">
                            Boxed main content of Test Content 1
                        </div>
                        <p className="text-lg">Bottom text of Test Content 1</p>
                    </div>
                ),
            },
            {
                title: "Tab 2",
                content: numberArray.map((number) => {
                    return <div>{number}</div>;
                }),
            },
        ],
    },
};
