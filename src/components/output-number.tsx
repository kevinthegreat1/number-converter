"use client";

import {getRadix} from "@/utils/radix";

export type OutputNumberProps = {
  type: string,
  number: number,
}

export default function OutputNumber({type, number}: OutputNumberProps) {
  let radix = getRadix(type);
  const digits = isNaN(number) ? [] : number.toString(radix).split("");

  return (
    <div className="flex flex-col items-center gap-4">
      {radix != 10 && digits.length != 0 && <div className="flex flex-col text-center gap-2">
        <div>= {digits.map((digit, i) => `${parseInt(digit, radix) * radix ** (digits.length - i - 1)}`).join(" + ")}</div>
        <div>= {digits.map((digit, i) => `${parseInt(digit, radix)} × ${radix}^${digits.length - i - 1}`).join(" + ")}</div>
      </div>}
      <div className={"flex " + (radix == 10 ? "gap-2" : radix == 2 ? "gap-12" : "gap-16") + " text-center align-middle"}>
        {digits.map((digit, i) => <div key={i} className="flex flex-col items-center gap-2">
          <div>
            {radix != 10 && <div>{radix}^{digits.length - i - 1}</div>}
            <div key={i} className="w-8 h-8 rounded-lg bg-sky-50 flex justify-center items-center">{digit.toUpperCase()}</div>
          </div>
        </div>)}
      </div>
    </div>
  )
}
