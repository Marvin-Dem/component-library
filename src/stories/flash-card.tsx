import { useState, useEffect } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

export type FlashcardItem = {
    question: string;
    answer: string;
};

type FlashcardProps = {
    items: FlashcardItem[];
};

export default function Flashcard(props: FlashcardProps) {
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [index, setIndex] = useState<number>(0);
    const [flipped, setFlipped] = useState<boolean>(false);

    useEffect(() => {
        setFlipped(true);
        const timeout = setTimeout(() => setFlipped(false), 300);
        return () => clearTimeout(timeout);
    }, [index, showAnswer]);

    const handleNext = () => {
        if (index < props.items.length - 1) {
            setIndex(index + 1);
            setShowAnswer(false);
        }
    };

    const handlePrevious = () => {
        if (index > 0) {
            setIndex(index - 1);
            setShowAnswer(false);
        }
    };

    return (
        <div className="w-1/2">
            <p className="font-bold text-lg">Flash Cards</p>
            <div className="border border-gray-400 rounded-lg">
                <div className="relative perspective-1000">
                    <div
                        className={`w-full h-40 transform-style-preserve-3d transition-transform duration-300 ${
                            flipped ? "rotate-y-180" : "rotate-y-0"
                        }`}
                    >
                        <div className="absolute w-full h-full flex justify-center items-center bg-gray-200 backface-hidden font-bold rounded-lg">
                            {showAnswer
                                ? props.items[index].answer
                                : props.items[index].question}
                        </div>
                    </div>
                </div>
                <div className="rounded-lg flex justify-between bg-gray-200 m-2">
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={handlePrevious}
                    >
                        <IoIosArrowDropleft />
                        <div>Previous</div>
                    </div>
                    <button
                        className="cursor-pointer"
                        onClick={() => setShowAnswer(!showAnswer)}
                    >
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                    </button>
                    <button
                        className="flex items-center gap-2 cursor-pointer disabled:text-gray-400"
                        onClick={handleNext}
                        disabled={index === props.items.length - 1}
                    >
                        <div>Next</div>
                        <IoIosArrowDropright />
                    </button>
                </div>
            </div>
        </div>
    );
}
