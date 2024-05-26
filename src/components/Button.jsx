

export default function Button({children,...props}) {
  return (
    <button className="px-6 py-3 text-sm md:text-lg rounded-lg bg-gray-800 text-white hover:bg-gray-700 shadow-lg transition-transform transform hover:scale-105" {...props}>
        {children}
    </button>
  )
}
