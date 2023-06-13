export default function Button({ label, modifier = 'primary', className, ...props }) {
  let cn = 'text-white bg-gradient-primary'

  if (modifier === 'secondary') {
    cn = 'bg-white text-gray-400'
  } else if (modifier === 'tertiary') {
    cn = 'bg-gray-200 text-gray-400'
  }

  return (
    <div
      className={`flex border border-solid filter drop-shadow rounded-full justify-center p-3 w-[90%] transform hover:scale-105 transition duration-200 select-none cursor-pointer ${cn} ${className}`}
      {...props}
    >
      {label}
    </div>
  )
}
