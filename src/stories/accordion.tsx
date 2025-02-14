import { useState, ReactNode } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { useAutoAnimate } from "@formkit/auto-animate/react";

export type AccordionItem = {
    title: string;
    content: string | ReactNode;
};

type AccordionProps = {
    items: AccordionItem[];
    allowMultiple: boolean;
};

export default function Accordion(props: AccordionProps) {
    const [autoAnimate] = useAutoAnimate();
    const [openItems, setOpenItems] = useState<boolean[]>(
        props.items.map(() => {
            return false;
        })
    );

    return (
        <div>
            {props.items.map((item, index) => (
                <div key={index} ref={autoAnimate}>
                    <div
                        className="cursor-pointer text-white bg-black rounded-lg flex justify-between text-xl my-2"
                        onClick={() => {
                            let itemArray = [...openItems];
                            if (props.allowMultiple) {
                                itemArray[index] = !itemArray[index];
                            } else {
                                itemArray = itemArray.map(() => {
                                    return false;
                                });
                                itemArray[index] = !openItems[index];
                            }
                            setOpenItems(itemArray);
                        }}
                    >
                        <p className="mx-2">{item.title}</p>
                        <IoIosArrowDropdownCircle className="m-2" />
                    </div>
                    {openItems[index] && (
                        <div className="my-2">{item.content}</div>
                    )}
                </div>
            ))}
        </div>
    );
}
