import { Meta, StoryObj } from "@storybook/react";
import TaskTracker from "./task-tracker";

const meta: Meta<typeof TaskTracker> = {
    title: "TaskTracker",
    component: TaskTracker,
};

export default meta;
type Story = StoryObj<typeof meta>;

const taskArray: string[] = [];

export const TaskTrackerStorie: Story = { args: { taskArray } };
