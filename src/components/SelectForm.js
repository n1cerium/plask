export default function SelectForm({ className, value, data, onChange }) {
  return (
    <>
      <select className={className} value={value} onChange={onChange}>
        {data.map((d) => (
          <option key={d} value={d}>
            {d}
          </option>
        ))}
      </select>
    </>
  );
}
