
export default function InputField({
  label,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-semibold">
        {label}
      </label>

      <input
        value={value}
        onChange={onChange}
        className="border rounded-md p-2"
      />
    </div>
  );
}