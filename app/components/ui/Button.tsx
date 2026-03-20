type Button2Props = {
  text: string;
  onClick?: () => void;
  bgColor?: string;
  textColor?: string;
  className?: string;
};

export function Button2({
  text,
  onClick,
  bgColor = "bg-blue-600",
  textColor = "text-white",
  className = "",
}: Button2Props) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full rounded-full py-3 md:py-4 text-base md:text-xl font-medium
        transition-all hover:opacity-90 active:scale-[0.98] hover:cursor-pointer
        ${bgColor} ${textColor} ${className}
      `}
    >
      {text}
    </button>
  );
}