"use client";

import {useState} from "react";

export type DecimalNumberProps = {
  input: boolean,
  number?: number,
  setNumber?: (number: number) => void
}

export default function DecimalNumber({input, number, setNumber = () => {}}: DecimalNumberProps) {
  const [digits, setDigits] = useState<string[]>(["0", "0", "0", "0"]);
  const value = parseInt(digits.join(""));
  setNumber(value);

  if (input) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="flex gap-2">
          <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits([digits[0], digits[1], digits[2], e.target.value])}></input>
          <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits([digits[0], digits[1], e.target.value, digits[3]])}></input>
          <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits([digits[0], e.target.value, digits[2], digits[3]])}></input>
          <input type="text" maxLength={1} className="w-8 h-8 rounded-lg" onChange={e => setDigits([e.target.value, digits[1], digits[2], digits[3]])}></input>
        </div>
        <div>= {value}</div>
      </div>
    )
  }
}
