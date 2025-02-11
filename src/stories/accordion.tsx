import { useState, ReactNode } from "react";

export type AccordionItem = {
    title: string;
    content: string | ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
};

export default function Accordion(props: AccordionProps) {
    const [isOpen, setIsOpen] = useState<number | null>(null);

    return (
        <div>
            {props.items.map((item, index) => (
                <div key={index}>
                    <button
                        onClick={() =>
                            setIsOpen(isOpen === index ? null : index)
                        }
                    >
                        {item.title}
                    </button>
                    {isOpen === index && <div>{item.content}</div>}
                </div>
            ))}
        </div>
    );
}
