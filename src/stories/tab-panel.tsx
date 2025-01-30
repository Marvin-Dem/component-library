import { useState } from "react";

export type Tab = {
    title: string;
    content: React.ReactNode;
};

type Props = {
    tabs: Tab[];
};

export default function TabPanel(props: Props) {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className="border-2 border-black">
            <div className="flex gap-4">
                {props.tabs.map((tab, tabindex) => {
                    return (
                        <button
                            key={tab.title}
                            onClick={() => {
                                setActiveTab(tabindex);
                            }}
                            className={`${
                                activeTab === tabindex
                                    ? "border-b-2 border-black"
                                    : "text-gray-500"
                            } text-lg cursor-pointer`}
                        >
                            {tab.title}
                        </button>
                    );
                })}
            </div>
            <div>{props.tabs[activeTab].content}</div>
        </div>
    );
}
