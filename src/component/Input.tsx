interface InputProp {
  reference?: any;
  placeholder: string;
}
export function Input({ reference, placeholder }: InputProp) {
  return (
    <div>
      <input
        type={"text"}
        placeholder={placeholder}
        ref={reference}
        className="px-4 py-2 border-2 rounded-lg "
      />
    </div>
  );
}
