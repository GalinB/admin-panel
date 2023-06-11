export default function Form({ label, name, placeholder }) {
  return (
    <div className="mt-6 mb-1">
      <label className="block text-gray-400 ml-2 p-1">{label}</label>
      <input
        type="text"
        name={name}
        className="border text-gray-400 font-medium border-gray-300 rounded-md p-3 w-full focus:outline-none focus:border-blue-500"
        placeholder={placeholder}
      />
    </div>
  );
}
