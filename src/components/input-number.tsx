"use client";

import {useState} from "react";
import getRadix from "@/utils/radix";

export type InputNumberProps = {
  type: string,
  setNumber: (number: number) => void
}

export default function InputNumber({type, setNumber}: InputNumberProps) {
  const [digits, setDigits] = useState<string[]>(Array(16).fill(""));
  const value = parseInt(digits.join(""), getRadix(type));
  setNumber(value);

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2">
        <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, i) => i == 1 ? e.target.value : digit))}></input>
        <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, i) => i == 2 ? e.target.value : digit))}></input>
        <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, i) => i == 3 ? e.target.value : digit))}></input>
        <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, i) => i == 4 ? e.target.value : digit))}></input>
      </div>
    </div>
  )
}
