import * as React from "react";

function NavBar() {
  return (
    <header className="items-center self-center flex w-full px-20 justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c352fc708d8470508d6873fbfba462c3774bd998bbbb435d7868c698f012433?apiKey=1bcc27728ab244268fc16ff60580b199&"
        className="aspect-[4.82] object-contain object-center w-[164px] overflow-hidden shrink-0 max-w-full my-auto"
        alt="Logo"
      />
      <div className="flex flex-wrap justify-between items-center gap-5 px-5 md:px-10">
  <div className="flex flex-wrap items-center gap-5 my-auto">
    <a
      href="/home"
      className="text-zinc-600 text-lg leading-7 tracking-normal whitespace-nowrap"
    >
      Home
    </a>
    <a
      href="/about"
      className="text-zinc-600 text-lg leading-7 tracking-normal"
    >
      About
    </a>
    <a
      href="/services"
      className="text-zinc-600 text-lg leading-7 tracking-normal"
    >
      Services
    </a>
    <a
      href="/trainings"
      className="text-zinc-600 text-lg leading-7 tracking-normal"
    >
      Digital Trainings
    </a>
    <a
      href="/contact"
      className="text-zinc-500 text-lg leading-7 tracking-normal grow whitespace-nowrap"
    >
      Contact Us
    </a>
  </div>
  <button className="flex items-center bg-gray-100 px-6 py-3  rounded-[100px]">
    <img
      loading="lazy"
      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9157f6a98819063dcc3bfb433920f234964bc9c9e749ab15bafd2f25818eead9?apiKey=1bcc27728ab244268fc16ff60580b199&"
      className="w-5 h-5 object-contain"
      alt="Slack Logo"
    />
    <label
      htmlFor="slackInput"
      className="text-violet-800 text-base font-medium leading-6 ml-2"
    >
      Join our Slack
    </label>
  </button>
</div>

    </header>
  );
}

export default NavBar