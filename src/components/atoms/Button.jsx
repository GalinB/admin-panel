export default function Button({ label, modifier = 'primary', ...props }) {
  let cn = 'text-gray-400'

  if (modifier === 'secondary') {
    cn = 'bg-purple-600 text-white'
  }
  if (modifier === 'third') {
    cn = 'bg-gray-200 text-gray-400'
  }

  return (
    <div
      className={`flex border border-solid filter drop-shadow rounded-full justify-center p-3 w-[90%] transform hover:scale-105 transition duration-200 select-none cursor-pointer ${cn}`}
      {...props}
    >
      {label}
    </div>
  )
}
