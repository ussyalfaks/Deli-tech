import * as React from "react";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';




function NavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 868) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Disable scroll when menu is open
    if (menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [menuOpen]);

  return (
<nav className="items-center self-center flex w-full px-4 sm:px-8 md:px-16 lg:px-20 justify-between gap-5 mt-7 max-md:max-w-full max-md:flex-wrap">
  <img
    loading="lazy"
    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9c352fc708d8470508d6873fbfba462c3774bd998bbbb435d7868c698f012433?apiKey=1bcc27728ab244268fc16ff60580b199&"
    className="aspect-[4.82] object-contain object-center w-[164px] overflow-hidden shrink-0 max-w-full my-auto"
    alt="Logo"
  />
  <div className={`flex flex-wrap bg-orange-400 justify-between items-center gap-5 px-2 sm:px-5 md:px-8 lg:px-10
  ${menuOpen ? ' ' : 'max-md:hidden'}`}>
    <div className={`flex flex-wrap items-center gap-2 sm:gap-5 my-auto mr-2 sm:mr-5
    ${menuOpen ? ' flex flex-col h-screen' : 'max-md:hidden'}`}>
      <a
        href="/home"
        className="text-zinc-600 text-base sm:text-lg leading-6 tracking-normal whitespace-nowrap"
      >
        Home
      </a>
      <a
        href="/about"
        className="text-zinc-600 text-base sm:text-lg leading-6 tracking-normal"
      >
        About
      </a>
      <a
        href="/services"
        className="text-zinc-600 text-base sm:text-lg leading-6 tracking-normal"
      >
        Services
      </a>
      <a
        href="/trainings"
        className="text-zinc-600 text-base sm:text-lg leading-6 tracking-normal"
      >
        Digital Trainings
      </a>
      <a
        href="/contact"
        className="text-zinc-500 text-base sm:text-lg leading-6 tracking-normal grow whitespace-nowrap"
      >
        Contact Us
      </a>
    </div>
    <button className="flex items-center bg-gray-100 px-4 sm:px-6 py-2 sm:py-3 rounded-[100px]">
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/9157f6a98819063dcc3bfb433920f234964bc9c9e749ab15bafd2f25818eead9?apiKey=1bcc27728ab244268fc16ff60580b199&"
        className="w-4 sm:w-5 h-4 sm:h-5 object-contain"
        alt="Slack Logo"
      />
      <label
        htmlFor="slackInput"
        className="text-violet-800 text-sm sm:text-base font-medium leading-5 sm:leading-6 ml-1 sm:ml-2"
      >
        Join our Slack
      </label>
    </button>
  </div>
  
  <div className={` ${menuOpen? 'p-7 px-4' :'md:hidden px-4'}`}>
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl cursor-pointer "
          />
        </div>
</nav>

  );
}

export default NavBar










