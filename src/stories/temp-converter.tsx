import { useState } from "react";

export type TempConverterProps = {
    items: string[];
};

export default function TempConverter(props: TempConverterProps) {
    const [startUnit, setStartUnit] = useState<string>("From Unit");
    const [endUnit, setEndUnit] = useState<string>("To Unit");

    return (
        <div>
            <p className="text-2xl">Temperature Converter</p>
            <p>Enter the temperature, select units and submit.</p>
            <div className="flex gap-4">
                <input type="text" placeholder="0.00"></input>
                <select>
                    <option value="">{startUnit}</option>
                    {props.items.map((unit) => (
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    ))}
                </select>
                <select>
                    <option value="">{endUnit}</option>
                    {props.items.map((unit) => (
                        <option key={unit} value={unit}>
                            {unit}
                        </option>
                    ))}
                </select>
                <button className="bg-black text-white text-lg rounded-xl p-2 px-6 cursor-pointer">
                    Convert
                </button>
            </div>
            <p>Answer</p>
        </div>
    );
}
