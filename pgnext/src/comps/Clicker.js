"use client";
import { useState } from "react";

export default function Clicker() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Giz a click {count}</button>
        </div>
    )
}