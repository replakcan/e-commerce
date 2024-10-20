/* eslint-disable-next-line react/prop-types */
const Button = ({ variant = "primary", size = "md", children }) => {
  // Variant için Tailwind sınıflarını belirleme
  const variantClass = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    ghost: "bg-transparent border border-gray-500 text-gray-500 hover:bg-gray-100",
    outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
    success: "bg-green-500 text-white hover:bg-green-600",
    warning: "bg-yellow-500 text-black hover:bg-yellow-600",
    info: "bg-blue-400 text-white hover:bg-blue-500",
    icon: "iconbtn bg-transparent border border-gray-400 text-gray-400 hover:border-gray-600 hover:text-gray-600",
  }[variant];

  // Size için Tailwind sınıflarını belirleme
  const sizeClass = {
    sm: "px-2 py-1 text-sm",
    md: "px-4 py-2 text-base",
    md: "px-6 py-3 text-lg",
  }[size];

  return (
    <button
      className={`rounded font-bold transition ${variantClass} ${sizeClass}`}
    >
      {children}
    </button>
  );
};

export default Button;