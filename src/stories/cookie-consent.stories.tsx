import { Meta, StoryObj } from "@storybook/react";
import CookieConsent from "./cookie-consent";

const meta: Meta<typeof CookieConsent> = {
    title: "Cookie Consent",
    component: CookieConsent,
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Cookie: Story = {
    args: {},
};
