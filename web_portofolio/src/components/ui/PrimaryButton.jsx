"use client";

export default function PrimaryButton({ children, className = "", ...props }) {
  const baseStyle =
    "inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium bg-primary dark:bg-on-surface text-on-primary dark:text-primary hover:bg-secondary-fixed hover:text-primary dark:hover:text-primary transition-all duration-300";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}
