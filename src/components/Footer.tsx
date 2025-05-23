import React from "react";

interface FooterProps {
  name: string;
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ name, className = "" }) => {
  return (
    <footer
      className={`py-8 text-center text-xs text-pink-600 bg-white border-t border-pink-200 select-none ${className}`}
    >
      &copy; {new Date().getFullYear()} {name}. All rights reserved.
    </footer>
  );
};

export default Footer;
