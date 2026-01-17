import { useState } from "react";
import { FaqData } from "../data/data";
import { GoPlus } from "react-icons/go";
import { RxCross1 } from "react-icons/rx";

const FAQ = () => {
  const [active, setActive] = useState(null);

  const handleActive = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="w-full 3xl:w-440">
      <div className="px-4 py-6 sm:px-12 lg:px-28">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-2 py-2">
          Frequently Asked Questions
        </h1>

        <div className="w-full flex flex-col gap-2 transition-all duration-400">
          {FaqData.map((item, index) => (
          <div key={index} className="bg-[#2d2d2d] hover:bg-[#535353]">
            <div
              onClick={() => handleActive(index)}
              className="flex justify-between items-center cursor-pointer  p-6 border-b border-black"
            >
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold">
                {item.question}
              </h3>
              <span>{active === index ? <RxCross1 className="size-6 md:size-8" /> : <GoPlus className="size-8 md:size-10" />}</span>
            </div>

            {active === index && <p className="text-lg sm:text-xl lg:text-2xl p-6">{item.answer}</p>}
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
