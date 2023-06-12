export default function Form({ label, name, placeholder, textColor }) {
  return (
    <div className={`mb-1 ${textColor}`}>
      {label && <label className="block text-gray-400 ml-2 p-1">{label}</label>}
      <input
        type="text"
        name={name}
        className={`border  font-medium border-gray-300 rounded-md p-3 h-11 w-full focus:outline-none focus:border-blue-500`}
        placeholder={placeholder}
      />
    </div>
  );
}
