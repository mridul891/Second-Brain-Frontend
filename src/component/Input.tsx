export function Input({
  onChange,
  placeholder,
}: {
  onChange: () => void;
  placeholder: string;
}) {
  return (
    <div>
      <input
        type={"text"}
        placeholder={placeholder}
        onChange={onChange}
        className="px-4 py-2 border-2 rounded-lg "
      />
    </div>
  );
}
 