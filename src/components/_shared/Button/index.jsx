export default function Button({
  onClick,
  variant = '',
  text,
  type = 'button',
  className,
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-2 text-sm rounded font-bold ${
        variant == 'colored'
          ? 'bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white'
          : 'text-[#1e293b] bg-white'
      }  ${className}`}
    >
      {text}
    </button>
  );
}
