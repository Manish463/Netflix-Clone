const Hero = () => {
  return (
    <section className="w-full 3xl:w-480">
      <div className="relative 3xl:bg-[linear-gradient(to_bottom,black_10%,red_50%,black_90%)] flex justify-center overflow-hidden">
        {/* curve line */}
        <div className="absolute z-10 w-full 3xl:w-[99.5%] h-[10%] -bottom-2 bg-[linear-gradient(to_right,black,#fd3db5_20%,red_50%,#fd3db5_80%,black)] border border-transparent rounded-tl-[100%] rounded-tr-[100%]">
          <div className="absolute bottom-0 w-full h-[95%] bg-[radial-gradient(ellipse_at_top_center,rgba(0,0,255,0.7),#000_50%)] border border-transparent rounded-tl-[100%] rounded-tr-[100%]"></div>
        </div>

        <div className="w-full 3xl:w-[99.5%] aspect-3/5 sm:aspect-5/3 lg:aspect-2/1 bg-[url(images/main-image.jpg)] bg-cover bg-top bg-no-repeat">
          <div className="w-full h-full bg-linear-to-b from-black/30 via-black/20 to-black/40 backdrop-brightness-60">
            {/* navbar */}
            <nav className="w-full h-[12%] flex justify-between items-center px-4 sm:px-14 lg:px-32 absolute top-0 bg-linear-to-b from-black/60 to-transparent z-2">
              <div className="logo">
                <img
                  className="w-30 sm:w-40 lg:w-50"
                  src="/images/logo/Netflix_Logo_PMS.png"
                  alt="NETFLIX"
                />
              </div>

              {/* lang & singin */}
              <div className="flex gap-4 text-[16px] sm:px-10 lg:px-20">
                <div className="flex relative">
                  <img
                    className="w-5 invert absolute top-2 left-4"
                    src="/icons/lang.svg"
                    alt=""
                  />

                  {/* i have to make it functional */}
                  <select
                    className="bg-black w-full border border-white/40 rounded-sm px-10 font-semibold appearance-none"
                    name=""
                    id=""
                  >
                    <option value="english" className="">
                      English
                    </option>
                    <option value="hindi" className="">
                      Hindi
                    </option>
                  </select>
                  <img
                    className="w-2.5 invert absolute top-3.5 right-4"
                    src="/icons/dropdown.png"
                    alt=""
                  />
                </div>

                <button className="px-4 py-1.5 bg-red-500 hover:bg-red-600 font-bold rounded-sm text-nowrap">
                  Sign In
                </button>
              </div>
            </nav>

            {/* content */}
            <div className="w-full h-full flex justify-center items-center bg-linear-to-b from-transparent via-transparent to-black/40 backdrop-blur-2xl">
              <div className="flex flex-col gap-6">
                <div className="max-w-xl px-8 text-center">
                  <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 tracking-normal">
                    Unlimited movies, shows, and more
                  </h1>
                  <p className="font-semibold text-lg">
                    Starts at ₹149. Cancel at any time.
                  </p>
                </div>

                <div className="w-full text-center">
                  <p className="mb-4 font-semibold">
                    Ready to watch? Enter your email to create or restart your
                    membership.
                  </p>

                  <div className="w-full px-4 justify-center flex flex-col sm:flex-row gap-3 items-center">
                    <div className="w-full md:w-auto grow">
                      <input
                        className="border border-white/40 px-4 py-3 rounded-sm w-full"
                        type="email"
                        placeholder="Email address"
                      />
                    </div>

                    <button className="bg-red-500 hover:bg-red-600 w-fit px-4 py-3 font-bold text-xl rounded-sm flex gap-4 text-nowrap">
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
