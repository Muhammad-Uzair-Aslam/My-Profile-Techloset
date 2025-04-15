import { InputFieldProps } from "../../types/types";
export default function InputField({
  label,
  name,
  value,
  placeholder,
  type = 'text',
  onChange,
  className = 'w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-300',
  prefixIcon,
}: InputFieldProps) {
  return (
    <div className="mb-4">
      <label className="block text-sm text-gray-600 mb-1">{label}</label>
      {prefixIcon ? (
        <div className="flex items-center border border-gray-300 rounded">
          <span className="px-3 py-2">
            {prefixIcon}
          </span>
          <input
            type={type}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className="flex-1 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
          />
        </div>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={className}
        />
      )}
    </div>
  );
}