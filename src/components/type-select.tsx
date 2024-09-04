import {useState} from "react";

export type TypeSelectProps = {
  type: string,
  setType: (type: string) => void
}

export default function TypeSelect({type, setType}: TypeSelectProps) {
  const [select, setSelect] = useState(type);

  function parseSelect(newSelect: string) {
    setSelect(newSelect);
    setType(newSelect == "base b" ? "10" : newSelect);
  }

  return (
    <div className="flex gap-2">
      <select value={select} onChange={e => parseSelect(e.target.value)} className="rounded-lg">
        <option value="decimal">Decimal</option>
        <option value="binary">Binary</option>
        <option value="hexadecimal">Hexadecimal</option>
        <option value="base b">Base b</option>
      </select>
      {select == "base b" && <input type="text" maxLength={2} defaultValue="10" className="w-8 h-8 rounded-lg" onChange={e => setType(e.target.value.replace(/\D/, ""))}></input>}
    </div>
  )
}
