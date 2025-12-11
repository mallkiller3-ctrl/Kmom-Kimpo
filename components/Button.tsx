import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-[#FF9E9E] hover:bg-[#ff8a8a] text-white focus:ring-[#FF9E9E]",
    secondary: "bg-[#FFF0F0] hover:bg-[#ffe0e0] text-[#FF9E9E] focus:ring-[#FF9E9E]",
    outline: "border-2 border-[#FF9E9E] text-[#FF9E9E] hover:bg-[#FFF0F0] focus:ring-[#FF9E9E]",
    ghost: "text-[#333333] hover:bg-gray-100",
  };

  const sizes = {
    sm: "px-4 py-1.5 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;