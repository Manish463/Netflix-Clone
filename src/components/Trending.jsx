import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import { ImgData } from "../data/data";

const Trending = ({ props }) => {
  const { setShowCard, setCurrCard } = props;
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(true);

  const container = useRef(null);

  const scrollToLeft = () => {
    const el = container.current;

    const amt = (el.clientWidth / 3) * 2;
    el.scrollTo({ top: 0, left: el.scrollLeft - amt, behavior: "smooth" });
  };

  const scrollToRight = () => {
    const el = container.current;

    const amt = (el.clientWidth / 3) * 2;
    el.scrollTo({ top: 0, left: el.scrollLeft + amt, behavior: "smooth" });
  };

  const handleClick = (id) => {
    setShowCard(true);
    setCurrCard(id);
  };

  useEffect(() => {
    const el = container.current;
    if (!el) return;

    const handleScroll = () => {
      setIsLeft(() => el.scrollLeft > 0);
      setIsRight(() => el.scrollLeft + 1 < el.scrollWidth - el.clientWidth);
      console.log(
        el.scrollWidth,
        el.clientWidth,
        el.scrollLeft,
        el.scrollWidth - el.clientWidth
      );
    };

    // Add the actual handler function (not the result of console.log)
    el.addEventListener("scroll", handleScroll);

    // Clean up the listener on unmount
    return () => {
      el.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="w-full 3xl:w-440">
      <div className="px-4 sm:px-12 lg:px-28 pb-10">
        <h3 className="text-lg sm:text-xl mb-2 lg:text-2xl font-semibold">
          Treading Now
        </h3>

        <div className="w-full flex items-center gap-2 px-2">
          {/* left arrow button */}
          {isLeft && (
            <div
              className="h-26 shrink flex justify-center items-center rounded-lg bg-zinc-900 hover:bg-zinc-800 cursor-pointer"
              onClick={scrollToLeft}
            >
              <span className="text-4xl">
                <img className="invert" src="/icons/left-arrow.svg" alt="<" />
              </span>
            </div>
          )}
          {/* image slider */}
          <div
            className="w-full shrink pl-4 pr-2 py-2 overflow-x-auto flex flex-none items-center gap-2 no-scrollbar"
            ref={container}
          >
            <div className="flex flex-none gap-4 sm:gap-6 lg:gap-8 cursor-pointer">
              {ImgData.map((image) => (
                <motion.div
                  initial={{
                    scale: 1,
                  }}
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      duration: 0.2,
                    },
                  }}
                  className="relative w-fit"
                  key={image.id}
                  onClick={() => handleClick(image.id)}
                >
                  {/* image */}
                  <div className="relative rounded-lg overflow-hidden w-fit">
                    <img
                      src={`/images/demo-img/${image.demoImg}`}
                      alt=""
                      className="w-26 md:w-34 lg:w-40"
                    />
                  </div>

                  {/* number */}
                  <div className="absolute text-5xl md:text-6xl lg:text-7xl top-3/5 -left-1/12">
                    {/* Border layer */}
                    <p className="font-black text-white absolute -left-0.5 -top-0.5">
                      {image.id}
                    </p>
                    <p className="font-black text-white absolute left-0.5 top-0.5">
                      {image.id}
                    </p>
                    <p className="font-black text-white absolute left-0.5 -top-0.5">
                      {image.id}
                    </p>
                    <p className="font-black text-white absolute -left-0.5 top-0.5">
                      {image.id}
                    </p>

                    {/* Main text */}
                    <p className="font-black text-black relative">{image.id}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          {/* right arrow button */}
          {isRight && (
            <div
              className="h-26 shrink flex justify-center items-center rounded-lg bg-zinc-900 hover:bg-zinc-800 cursor-pointer"
              onClick={scrollToRight}
            >
              <span className="text-4xl">
                <img className="invert" src="/icons/right-arrow.svg" alt=">" />
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Trending;
