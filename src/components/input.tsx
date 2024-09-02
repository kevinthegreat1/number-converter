"use client";

import {useState} from "react";
import DecimalNumber from "@/components/decimal-number";

export default function Input() {
  const [type, setType] = useState("decimal");

  return (
    <div>
      <div className="p-4 rounded-xl bg-sky-100 flex flex-row gap-4">
        <select value={type} onChange={e => setType(e.target.value)} className="rounded-lg">
          <option value="decimal">Decimal</option>
          <option value="binary">Binary</option>
          <option value="hexadecimal">Hexadecimal</option>
        </select>
        {type === "decimal" && <DecimalNumber input={true}/>}
      </div>
    </div>
  )
}
