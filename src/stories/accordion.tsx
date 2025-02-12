import { useState, ReactNode } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type AccordionItem = {
    title: string;
    content: string | ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
};

export default function Accordion(props: AccordionProps) {
    const [isOpen, setIsOpen] = useState<number | null>(null);
    const [autoAnimate] = useAutoAnimate();

    return (
        <div>
            {props.items.map((item, index) => (
                <div
                    key={index}
                    className="cursor-pointer"
                    onClick={() => setIsOpen(isOpen === index ? null : index)}
                    ref={autoAnimate}
                >
                    <div className="text-white bg-black rounded-lg flex justify-between text-xl my-2">
                        <p className="mx-2">{item.title}</p>
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
