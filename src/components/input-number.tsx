"use client";

import {useState} from "react";
import {getDigitCount, getRadix, getRegex, isValidRadix} from "@/utils/radix";

export type InputNumberProps = {
  type: string,
  setNumber: (number: number) => void
}

export default function InputNumber({type, setNumber}: InputNumberProps) {
  const radix = getRadix(type);
  const digitCount = getDigitCount(radix);
  const regex = getRegex(radix);

  const [digits, setDigits] = useState<string[]>(Array(digitCount).fill("0"));
  const value = isValidRadix(radix) ? parseInt(digits.join(""), radix) : NaN;
  setNumber(value);
  const actualDigits = isNaN(value) ? [] : value.toString(radix).split("");

  return (
    <div className="flex flex-col items-center gap-4">
      {radix == 10 && <div className="flex gap-2">
        {Array(digitCount).fill(null).map((_, i) => (
          <input key={i} type="text" maxLength={1} defaultValue="0" className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, j) => j == i ? e.target.value = e.target.value.replace(/\D/, "") : digit))}/>
        ))}
      </div>}
      {radix != 10 && <div className={"flex " + (radix <= 10 ? "gap-12" : "gap-16")}>
        {Array(digitCount).fill(null).map((_, i) => (
          <div key={i}>
            <div>{radix}^{digitCount - i - 1}</div>
            <input type="text" maxLength={1} defaultValue="0" className="w-8 h-8 rounded-lg" onChange={e => setDigits(digits.map((digit, j) => j == i ? regex ? e.target.value = e.target.value.replace(regex, "") : e.target.value : digit))}/>
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
