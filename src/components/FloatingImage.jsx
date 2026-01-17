import { ImgData } from "../data/data";
import { RxCross1 } from "react-icons/rx";

const FloatingImage = ({ props }) => {
  const { setShowCard, currCard, setCurrCard } = props;

  const handleClick = () => {
    setCurrCard(null);
    setShowCard(false);
  };

  return (
    <section className="fixed w-full h-full z-100">
      <div className="w-full h-full bg-black/60 flex justify-center items-center p-4">
        <div className="max-w-160 max-h-150 border-2 border-gray-700 rounded-xl overflow-y-auto no-scrollbar">
          {/* image */}
          <div className="w-full relative">
            <button
              className="absolute top-[3%] right-[3%] z-120 p-2 hover:bg-gray-400/40 rounded-full"
              onClick={handleClick}
            >
              <RxCross1 className="size-4 md:size-7" />
            </button>
            <img
              src={`images/main-img/${ImgData[currCard - 1].mainImg}`}
              alt=""
            />
            <div className="absolute w-full h-full bg-linear-to-t from-0% from-zinc-900 via-20% via-zinc-900/70 to-60% to-transparent top-0"></div>
            <div className="absolute w-full h-full bg-linear-to-tr from-0% from-zinc-900 to-50% to-transparent top-0"></div>
            <div className="absolute w-[60%] bottom-2 left-6 md:left-0 md:px-12">
              <img
                src={`images/titles/${ImgData[currCard - 1].title}`}
                alt=""
              />
            </div>
          </div>

          {/* about */}
          <div className="w-full flex flex-col gap-5 md:gap-8 bg-zinc-900 p-6 md:p-12 md:pt-6">
            <p className="leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              ullam ut consequatur similique eveniet architecto eius, libero
              officiis? Doloremque ullam facilis, beatae suscipit quidem qui.
            </p>
            <button className="bg-red-500 hover:bg-red-600 w-full sm:w-fit px-4 py-2 font-semibold text-xl rounded-sm">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloatingImage;