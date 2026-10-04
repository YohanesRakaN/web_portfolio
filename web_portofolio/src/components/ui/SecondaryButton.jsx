"use client";

export default function SecondaryButton({
  children,
  className = "",
  ...props
}) {
  const baseStyle =
    "inline-flex w-full items-center justify-center rounded-md px-4 py-2 border-2 border-on-background bg-white text-black font-semibold hover:bg-on-background hover:text-white dark:border-outline dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
