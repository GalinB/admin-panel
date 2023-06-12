export default function Form({ label, name, placeholder, textcolor, inputh = 'h-11' }) {
  return (
    <div className={`mb-1 ${textcolor}`}>
      {label && <label className="block text-gray-400 ml-2 p-1">{label}</label>}
      <input
        type="text"
        name={name}
        className={`flex border font-medium border-gray-300 rounded-md p-3 ${inputh} w-full focus:outline-none`}
        placeholder={placeholder}
      />
    </div>
  )
}
