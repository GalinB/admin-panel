export default function FormInput({
  label,
  name,
  placeholder,
  textcolor,
  inputh = 'h-11',
  type = 'text',
}) {
  const inputProps = {
    name,
    placeholder,
    className: `flex border font-medium border-gray-300 rounded-md p-3 ${inputh} w-full focus:outline-none`,
  }

  let el = null

  switch (type) {
    case 'textarea':
      el = <textarea {...inputProps} />
      break
    default:
      el = <input {...inputProps} />
  }

  return (
    <div className={`mb-1 ${textcolor}`}>
      {label && <label className="block text-gray-400 ml-2 p-1">{label}</label>}
      {el}
    </div>
  )
}
