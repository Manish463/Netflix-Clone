import React from "react";

const Footer = () => {
  return (
    <section className="w-full 3xl:w-440">
      <div className="px-4 py-8 sm:px-12 lg:px-28 flex flex-col items-center gap-8">
        {/* get start section */}
        <div className="w-full md:w-[70%]">
          <p className="py-2 text-start sm:text-center">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>

          <div className="w-full flex flex-col sm:flex-row gap-4 py-2">
            <div className="w-full md:w-auto grow">
              <input
                className="border border-white/40 px-4 py-2 md:py-3 rounded-sm w-full"
                type="email"
                placeholder="Email address"
              />
            </div>

            <button className="bg-red-500 hover:bg-red-600 w-fit px-4 py-2 md:py-3 font-bold text-xl rounded-sm flex gap-4 text-nowrap">
              Get Started
            </button>
          </div>
        </div>

        {/* lists */}
        <div className="w-full">
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-gray-300 text-sm py-4">
            <li>FAQ</li>
            <li>Help Centre</li>
            <li>Account</li>
            <li>Media Centre</li>
            <li>Investor Relations</li>
            <li>Jobs</li>
            <li>Ways to Watch</li>
            <li>Terms of Use</li>
            <li>Privacy</li>
            <li>Cookie Preferences</li>
            <li>Corporate Information</li>
            <li>Contact Us</li>
            <li>Speed Test</li>
            <li>Legal Notices</li>
            <li>Only on Netflix</li>
          </ul>
        </div>
      </div>

      {/* declareting */}
      <div className="w-full flex justify-center items-center border-t-2 border-gray-900 py-6 bg-zinc-900 px-4 text-center">
        <p className="text-lg md:text-xl font-bold bg-linear-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
          &copy; 2026 Netflix Clone. Built by Manish Kumar Sharma for educational purposes only.
        </p>
      </div>
    </section>
  );
};

export default Footer;
