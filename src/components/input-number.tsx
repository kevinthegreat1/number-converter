"use client";

import {useState} from "react";
import getRadix from "@/utils/radix";

export type InputNumberProps = {
  type: string,
  setNumber: (number: number) => void
}

export default function InputNumber({type, setNumber}: InputNumberProps) {
  const [digits, setDigits] = useState<string[]>(Array(16).fill(""));
  let radix = getRadix(type);
  const value = parseInt(digits.join(""), radix);
  setNumber(value);

  return (
    <div className="flex flex-col items-center gap-2">
      {radix == 10 && <div className="flex gap-2">
        {Array(4).fill(null).map((_, i) => (
          <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, j) => j == i ? e.target.value = e.target.value.replace(/\D/, "") : digit))}/>
        ))}
      </div>}
    </div>
  )
}
