export type TypeSelectProps = {
  type: string,
  setType: (type: string) => void
}

export default function TypeSelect({type, setType}: TypeSelectProps) {
  return (
    <select value={type} onChange={e => setType(e.target.value)} className="rounded-lg">
      <option value="decimal">Decimal</option>
      <option value="binary">Binary</option>
      <option value="hexadecimal">Hexadecimal</option>
    </select>
  )
}
