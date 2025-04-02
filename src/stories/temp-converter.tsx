import { useState, useEffect } from "react";

export type TempConverterProps = {
    tempNames: string[];
};

type Unit = (typeof units)[number];
const units = ["Celsius", "Fahrenheit", "Kelvin"] as const;

export default function TempConverter() {
    const [startUnit, setStartUnit] = useState<Unit | "">("");
    const [endUnit, setEndUnit] = useState<Unit | "">("");
    const [temperature, setTemperature] = useState<number>(0);
    const [convertedTemp, setConvertedTemp] = useState<number>();

    const isDisabled = !temperature || !startUnit || !endUnit;

    const convertTemperature = (value: number, from: Unit, to: Unit) => {
        if (from === to) {
            return value;
        }
        if (from === "Celsius" && to === "Fahrenheit") {
            return (value * 9) / 5 + 32;
        }
        if (from === "Celsius" && to === "Kelvin") {
            return value + 273.15;
        }
        if (from === "Fahrenheit" && to === "Celsius") {
            return ((value - 32) * 5) / 9;
        }
        if (from === "Fahrenheit" && to === "Kelvin") {
            return ((value - 32) * 5) / 9 + 273.15;
        }
        if (from === "Kelvin" && to === "Celsius") {
            return value - 273.15;
        }
        if (from === "Kelvin" && to === "Fahrenheit") {
            return ((value - 273.15) * 9) / 5 + 32;
        }
        return NaN; //unreachable but necessary for Typescript
    };

    useEffect(() => {
        if (!isDisabled) {
            const result = convertTemperature(temperature, startUnit, endUnit);
            setConvertedTemp(result);
        } else {
            setConvertedTemp(0);
        }
    }, [temperature, startUnit, endUnit, isDisabled]);

    return (
        <div>
            <p className="text-2xl">Temperature Converter</p>
            <p>Enter the temperature, select units and submit.</p>
            <div className="flex gap-4">
                <input
                    type="number"
                    placeholder="0.00"
                    value={temperature}
                    onChange={(e) => setTemperature(parseFloat(e.target.value))}
                />
                <select
                    value={startUnit}
                    onChange={(e) => setStartUnit(e.target.value as "" | Unit)}
                >
                    <option value="">Select Unit</option>
                    {units
                        .filter((unit) => unit !== endUnit)
                        .map((unit) => (
                            <option key={unit} value={unit}>
                                {unit}
                            </option>
                        ))}
                </select>
                <select
                    value={endUnit}
                    onChange={(e) => setEndUnit(e.target.value as "" | Unit)}
                >
                    <option value="">Select Unit</option>
                    {units
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
                        if (startUnit === "" || endUnit === "") {
                            return;
                        }
                        const result = convertTemperature(
                            temperature,
                            startUnit,
                            endUnit
                        );
                        setConvertedTemp(result);
                    }}
                >
                    Convert
                </button>
            </div>
            {convertedTemp && (
                <p>
                    {`${temperature} ${startUnit} is ${convertedTemp} ${endUnit}`}
                </p>
            )}
        </div>
    );
}
