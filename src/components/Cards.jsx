import { CardData } from "../data/data";

const Cards = () => {
  return (
    <section className="w-full 3xl:w-440">
      <div className="px-4 py-6 sm:px-12 lg:px-28">
        {/* section heading */}
        <h3 className="text-lg sm:text-xl mb-2 lg:text-2xl font-semibold py-2">
          More reasons to join
        </h3>

        {/* content cards */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
          {CardData.map((item, index) => (
            <div key={index} className="bg-linear-to-br from-[#192044] to-[#15090f] p-4 pb-18 rounded-2xl flex flex-col gap-1">
              <h2 className="font-bold text-xl">
                {item.title}
              </h2>
              <p className="text-gray-400">
                {item.disc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Cards;
