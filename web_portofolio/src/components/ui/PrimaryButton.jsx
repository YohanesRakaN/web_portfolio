"use client";

export default function PrimaryButton({ children, className = "", ...props }) {
  // HAPUS semua class "dark:". 
  // bg-primary dan text-on-primary akan OTOMATIS berubah warna 
  // saat class .dark ditambahkan ke tag <html> oleh globals.css
  const baseStyle =
    "inline-flex w-full items-center justify-center rounded-md px-4 py-2 font-medium bg-primary text-on-primary hover:bg-secondary-fixed hover:text-primary transition-all duration-300";

  return (
    <button className={`${baseStyle} ${className}`} {...props}>
      {children}
    </button>
  );
}