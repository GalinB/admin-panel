export default function TabTemplate({
  label,
  leftSide,
  rightSide,
  onClick,
  labelClassName = 'text-gray-400',
}) {
  return (
    <div
      className="flex items-center flex-row gap-3 justify-between p-3 bg-gray-50 border border-opacity-4 shadow-sm rounded-lg transform hover:scale-105 transition duration-200"
      onClick={onClick}
    >
      <div className="flex flex-row gap-3 items-center">
        {leftSide}
        <div className={`font-medium mb-2 ${labelClassName}`}>{label}</div>
      </div>
      {rightSide}
    </div>
  )
}
