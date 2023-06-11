export default function Button({
  label,
  textColor = "text-gray-400",
  ...props
}) {
  return (
    <div
      className={`flex border border-solid border-gray-100 filter drop-shadow rounded-full justify-center p-3 w-[90%] transform hover:scale-105 transition duration-200 select-none cursor-pointer ${textColor}`}
      {...props}
    >
      {label}
    </div>
  );
}
