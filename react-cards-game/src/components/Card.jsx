import React from "react";

export function convertValue(value) {
    switch(value) {
        case "Ace":
            return 14;
        case "Jack":
            return 11;
        case "Queen":
            return 12;
        case "King":
            return 13;
        default:
            return value;
    }
}

export default function Card(props) {
    if (!props.card) {
        return <div className="text-red-500">No card</div>;
    }

    const { value, type } = props.card;
    const convertedValue = convertValue(value);

    return (
        <div className="bg-gray-300 w-30 h-50 flex flex-col items-center justify-center mb-8 border border-sky-800">
            <h3 className="text-2xl mb-10">
                {value} {["Ace", "Jack", "Queen", "King"].includes(value) && `(${convertedValue})`}
            </h3>
            <h3 className="text-2xl mb-10">of</h3>
            <h3 className="text-2xl">{type}</h3>
        </div>
    );
}
