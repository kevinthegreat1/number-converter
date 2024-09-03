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
  const actualDigits = value.toString(radix).split("");

  return (
    <div className="flex flex-col items-center gap-4">
      {radix == 10 && <div className="flex gap-2">
        {Array(4).fill(null).map((_, i) => (
          <input key={i} type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, j) => j == i ? e.target.value = e.target.value.replace(/\D/, "") : digit))}/>
        ))}
      </div>}
      {radix == 2 && <div className="flex gap-10">
        {Array(16).fill(null).map((_, i) => (
          <div>
            <div>{radix}^{actualDigits.length - i - 1}</div>
            <input key={i} type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, j) => j == i ? e.target.value = e.target.value.replace(/[^01]/, "") : digit))}/>
          </div>
        ))}
      </div>}
      {radix == 16 && <div className="flex gap-12">
        {Array(4).fill(null).map((_, i) => (
          <div>
            <div>{radix}^{actualDigits.length - i - 1}</div>
            <input key={i} type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, j) => j == i ? e.target.value = e.target.value.replace(/[^0-9A-Fa-f]/, "") : digit))}/>
          </div>
        ))}
      </div>}

      {radix != 10 && !isNaN(value) && <div className="flex flex-col text-center gap-2">
        <div>= {actualDigits.map((digit, i) => `${parseInt(digit, radix)} × ${radix}^${actualDigits.length - i - 1}`).join(" + ")}</div>
        <div>= {actualDigits.map((digit, i) => `${parseInt(digit, radix) * radix ** (actualDigits.length - i - 1)}`).join(" + ")}</div>
      </div>}
    </div>
  )
}
