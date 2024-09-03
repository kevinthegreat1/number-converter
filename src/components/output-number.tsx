"use client";

import getRadix from "@/utils/radix";

export type OutputNumberProps = {
  type: string,
  number: number,
}

export default function OutputNumber({type, number}: OutputNumberProps) {
  const digits = number.toString(getRadix(type)).split("");

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex gap-2 text-center align-middle">
        {digits.map((digit, i) => <div key={i} className="w-8 h-8 rounded-lg bg-sky-50 flex justify-center items-center">{digit.toUpperCase()}</div>)}
      </div>
    </div>
  )
}
