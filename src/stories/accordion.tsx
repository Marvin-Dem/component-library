import { useState, ReactNode } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";

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
                    <div className="text-white bg-black rounded-lg w-1/2 flex justify-between text-xl my-2">
                        <button
                            onClick={() =>
                                setIsOpen(isOpen === index ? null : index)
                            }
                            className="mx-2 cursor-pointer"
                        >
                            {item.title}
                        </button>
                        <IoIosArrowDropdownCircle className="m-2" />
                    </div>
                    {isOpen === index && (
                        <div className="my-2">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
