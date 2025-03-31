import { useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

export default function TaskTracker() {
    const [tasks, setTasks] = useState<{ text: string; marked: boolean }[]>([]);
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        setTasks(
            [...tasks, { text: inputValue, marked: false }].sort(
                (a, b) => Number(a.marked) - Number(b.marked)
            )
        );
        setInputValue("");
    };

    const checkTask = (index: number) => {
        const updatedTasks = tasks.slice();
        updatedTasks[index].marked = !updatedTasks[index].marked;
        setTasks(
            updatedTasks.sort((a, b) => Number(a.marked) - Number(b.marked))
        );
    };

    const removeTask = (index: number) => {
        const updatedTasks = tasks.slice();
        updatedTasks.splice(index, 1);
        setTasks(
            updatedTasks.sort((a, b) => Number(a.marked) - Number(b.marked))
        );
    };

    return (
        <div>
            <div>Task Tracker</div>
            <div className="border rounded-xl">
                <input
                    className="w-80"
                    type="text"
                    value={inputValue}
                    placeholder="Start writing and press enter to create task"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className="cursor-pointer" onClick={addTask}>
                    Add
                </button>
            </div>
            <ul>
                {tasks.map((task, index) => (
                    <div key={index} className="flex">
                        <input
                            type="checkbox"
                            checked={task.marked}
                            onChange={() => checkTask(index)}
                        />
                        <li
                            className={`m-1 ${
                                task.marked ? "line-through text-gray-500" : ""
                            }`}
                        >
                            {task.text}
                        </li>
                        <FaTrashCan
                            className="cursor-pointer"
                            onClick={() => removeTask(index)}
                        />
                    </div>
                ))}
            </ul>
        </div>
    );
}
