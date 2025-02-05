import React from "react";
const Card = (props) => {
  const { title, description } = props.Info;

  return (
    <div className="flex items-center justify-center  p-6 text-white">
      <div className="relative w-[240px] h-[320px]  shadow-lg flex items-center justify-center transform preserve-3d group bg-black rounded-2xl p-8">
        {/* Title with rotation on hover */}
        <p className="text-xl font-extrabold absolute group-hover:rotate-x-[-90deg] transition-transform duration-400 z-10 p-4">
          {title}
        </p>

        {/* Description with rotation on hover */}
        <p className="text-xl font-extrabold absolute rotate-x-90 group-hover:rotate-x-0 transition-transform duration-400 z-0 p-4">
          {description}
        </p>

        {/* Background hover effect */}
        <div className="absolute top-0 w-full h-full bg-lightgray rounded-lg flex items-center justify-center cursor-pointer group-hover:transform group-hover:rotate-x-[-90deg] transition-all duration-500 shadow-lg z-"></div>

        {/* Right and Left Shadows */}
        <div className="absolute rounded-2xl inset-y-0 left-0 right-0 shadow-[2px_0_8px_rgba(0,0,0,0.2)] group-hover:shadow-[2px_0_15px_rgba(0,0,0,0.3)] transition-all duration-500"></div>
      </div>
    </div>
  );
};

// Add CardContent component
export function CardContent({ children }) {
  return <div className="p-2">{children}</div>;
}

export default Card;
