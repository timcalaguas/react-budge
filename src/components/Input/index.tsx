interface InputProps {
  label: string;
  setValue: (e: any) => void;
  value: string | number;
  type: string;
}

export function Input({ label, setValue, value, type }: InputProps) {
  return (
    <div className="relative flex flex-col">
      <label className="mb-1">{label}</label>
      <input
        type={type}
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="bg-custom-dark px-3 py-2 rounded mb-3"
      />
    </div>
  );
}
