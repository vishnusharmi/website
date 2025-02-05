import React, { useEffect } from "react";
import gsap from "gsap";

const Loader = ({ setLoading }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => setLoading(false),  // Directly sets loading to false after animation completes
    });

    tl.to(".loader", { opacity: 1, duration: 0.3 })
      .fromTo(
        ".loader-text",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      )
      .to(".loader-bar", { scaleX: 1, duration:1.5, ease: "power2.out" })
      .to(".loader", { opacity: 0, duration: 0.5, ease: "power2.inOut" });

    return () => tl.kill();
  }, [setLoading]);

  return (
    <div className="loader fixed top-0 left-0 w-full h-full bg-gray-900 flex flex-col justify-center items-center text-white opacity-0 z-50">
      <h1 className="loader-text text-3xl font-bold">Loading...</h1>
      <div className="loader-bar mt-4 w-40 h-1 bg-white scale-x-0 origin-left"></div>
    </div>
  );
};

export default Loader;
