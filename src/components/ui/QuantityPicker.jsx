import React from "react";

export default function QuantityPicker({ value, onChange, min = 1 }) {
    return (
        <div className="qty">
            <button className="btn" type="button" onClick={() => onChange(Math.max(min, value - 1))} aria-label="Zmniejsz ilość">
                −
            </button>
            <input
                className="qty-input"
                type="number"
                min={min}
                value={value}
                onChange={(e) => onChange(Math.max(min, Number(e.target.value || min)))}
                aria-label="Ilość"
            />
            <button className="btn" type="button" onClick={() => onChange(value + 1)} aria-label="Zwiększ ilość">
                +
            </button>
        </div>
    );
}
