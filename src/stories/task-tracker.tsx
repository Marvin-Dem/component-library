import { useState, useRef } from "react";
import { FaTrashCan } from "react-icons/fa6";

type Task = { text: string; marked: boolean };

export default function TaskTracker() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [inputValue, setInputValue] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const addTask = () => {
        setTasks([...tasks, { text: inputValue, marked: false }]);
        setInputValue("");
        inputRef.current?.focus();
    };

    const checkTask = (index: number) => {
        const updatedTasks = tasks.slice();
        updatedTasks[index].marked = !updatedTasks[index].marked;
        setTasks(updatedTasks);
    };

    const removeTask = (index: number) => {
        const updatedTasks = tasks.slice();
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <div>Task Tracker</div>
            <div className="border rounded-xl">
                <input
                    autoFocus={true}
                    className="w-80"
                    type="text"
                    value={inputValue}
                    placeholder="Start writing and press enter to create task"
                    onChange={(e) => setInputValue(e.target.value)}
                    ref={inputRef}
                />
                <button className="cursor-pointer" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {[...tasks]
                    .sort((a, b) => Number(a.marked) - Number(b.marked))
                    .map((task, index) => (
                        <div key={index} className="flex">
                            <input
                                type="checkbox"
                                checked={task.marked}
                                onChange={() => checkTask(tasks.indexOf(task))}
                            />
                            <li
                                className={`m-1 ${
                                    task.marked
                                        ? "line-through text-gray-500"
                                        : ""
                                }`}
                            >
                                {task.text}
                            </li>
                            <button
                                className="cursor-pointer"
                                onClick={() => removeTask(index)}
                            >
                                <FaTrashCan />
                            </button>
                        </div>
                    ))}
            </ul>
        </div>
    );
}
