import { useState } from "react";
import { IoIosArrowDropleft } from "react-icons/io";
import { IoIosArrowDropright } from "react-icons/io";

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

    const progressBar = () => {
        if (index === 0) {
            return "25%";
        } else if (index === 1) {
            return "50%";
        } else if (index === 2) {
            return "75%";
        } else if (index === 3) {
            return "100%";
        }
    };

    return (
        <div className="w-1/2">
            <p className="font-bold text-lg">Flash Cards</p>
            <div className="overflow-hidden border rounded-lg border-gray-400 flex justify-between p-1">
                <div
                    className="bg-gray-400 h-6 w-1/2 rounded-lg"
                    style={{ width: progressBar() }}
                ></div>
                <p className="">{progressBar()}</p>
                <div className="">{`${index + 1} / ${props.items.length}`}</div>
            </div>
            <div className="border border-gray-400 rounded-lg">
                <p className="rounded-lg gap-2 bg-gray-200 m-2 flex justify-center h-40 font-bold items-center">
                    {showAnswer
                        ? props.items[index].answer
                        : props.items[index].question}
                </p>
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
                        onClick={() => {
                            setShowAnswer(!showAnswer);
                        }}
                    >
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                    </button>
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={handleNext}
                    >
                        <div>Next</div>
                        <IoIosArrowDropright />
                    </div>
                </div>
            </div>
        </div>
    );
}

//Disable Behaviour, Progress Bar animieren und dynamisieren
