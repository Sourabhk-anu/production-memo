export default function FormSection({
  title,
  children,
}) {
  return (
    <div className="border rounded-xl p-4 bg-white">
      <h2 className="font-bold text-lg mb-4">
        {title}
      </h2>

      <div className="grid grid-cols-2 gap-4">
        {children}
      </div>
    </div>
  );
}