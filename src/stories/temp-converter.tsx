import { useState, useEffect } from "react";

export type TempConverterProps = {
    items: string[];
};

export default function TempConverter(props: TempConverterProps) {
    const [startUnit, setStartUnit] = useState<string>("");
    const [endUnit, setEndUnit] = useState<string>("");
    const [temperature, setTemperature] = useState<string>("");
    const [convertedTemp, setConvertedTemp] = useState<string>("");

    const isDisabled = !temperature || !startUnit || !endUnit;

    const convertTemperature = (value: number, from: string, to: string) => {
        if (from === to) return value;

        if (from === "Celsius" && to === "Fahrenheit")
            return (value * 9) / 5 + 32;
        if (from === "Celsius" && to === "Kelvin") return value + 273.15;
        if (from === "Fahrenheit" && to === "Celsius")
            return ((value - 32) * 5) / 9;
        if (from === "Fahrenheit" && to === "Kelvin")
            return ((value - 32) * 5) / 9 + 273.15;
        if (from === "Kelvin" && to === "Celsius") return value - 273.15;
        if (from === "Kelvin" && to === "Fahrenheit")
            return ((value - 273.15) * 9) / 5 + 32;

        return NaN;
    };

    useEffect(() => {
        if (!isDisabled) {
            const result = convertTemperature(
                parseFloat(temperature),
                startUnit,
                endUnit
            );
            setConvertedTemp(result.toFixed(2));
        } else {
            setConvertedTemp("");
        }
    }, [temperature, startUnit, endUnit, isDisabled]);

    return (
        <div>
            <p className="text-2xl">Temperature Converter</p>
            <p>Enter the temperature, select units and submit.</p>
            <div className="flex gap-4">
                <input
                    type="text"
                    placeholder="0.00"
                    value={temperature}
                    onChange={(e) => setTemperature(e.target.value)}
                />
                <select
                    value={startUnit}
                    onChange={(e) => setStartUnit(e.target.value)}
                >
                    <option value="">Select Unit</option>
                    {props.items
                        .filter((unit) => unit !== endUnit)
                        .map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                </select>
                <select
                    value={endUnit}
                    onChange={(e) => setEndUnit(e.target.value)}
                >
                    <option value="">Select Unit</option>
                    {props.items
                        .filter((unit) => unit !== startUnit)
                        .map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                </select>
                <button
                    disabled={isDisabled}
                    className={`text-white text-lg rounded-xl p-2 px-6 cursor-pointer ${
                        isDisabled ? "bg-gray-500" : "bg-black"
                    }`}
                    onClick={() => {
                        const result = convertTemperature(
                            parseFloat(temperature),
                            startUnit,
                            endUnit
                        );
                        setConvertedTemp(result.toFixed(2));
                    }}
                >
                    Convert
                </button>
            </div>
            <p>
                {convertedTemp &&
                    `${temperature} ${startUnit} is ${convertedTemp} ${endUnit}`}
            </p>
        </div>
    );
}
