"use client";

import {useState} from "react";
import InputNumber from "@/components/input-number";
import TypeSelect from "@/components/type-select";
import OutputNumber from "@/components/output-number";

export type NumberComponentProps = {
  input: boolean,
  number?: number,
  setNumber?: (number: number) => void
}

export default function NumberComponent({input, number = 0, setNumber = () => {}}: NumberComponentProps) {
  const [type, setType] = useState("decimal");

  return (
    <div>
      <div className="p-2 rounded-xl bg-sky-200 flex flex-col gap-2">
        <TypeSelect type={type} setType={setType}/>
        {input && <InputNumber key={type} type={type} setNumber={setNumber}/>}
        {!input && <OutputNumber type={type} number={number}/>}
      </div>
    </div>
  )
}
