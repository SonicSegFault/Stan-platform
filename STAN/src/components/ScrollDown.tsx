import { FC } from "react";

interface ScrollDownProps {
  targetId: string;
}

const ScrollDown: FC<ScrollDownProps> = ({ targetId }) => {
  const scrollToSection = () => {
    const targetElement = document.getElementById(targetId);
    targetElement?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div onClick={scrollToSection} className="flex items-center cursor-pointer text-white">
      <span className="mr-2">Scroll Down</span>
      <svg
        className="w-6 h-6 animate-bounce" // Arrow size and animation class
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 3a1 1 0 011 1v10.586l3.293-3.293a1 1 0 011.414 1.414l-5 5a1 1 0 01-1.414 0l-5-5a1 1 0 011.414-1.414L9 14.586V4a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  );
};

export default ScrollDown;
