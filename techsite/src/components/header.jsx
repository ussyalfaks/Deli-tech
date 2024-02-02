import * as React from "react";

function Header() {
  return (
    <form>
      <header className="-mb-px">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
            <div className="text-violet-800 text-7xl font-bold leading-[66px] tracking-tighter max-w-[417px] ml-24 -mr-px mt-28 max-sm:ml-2">
              Delivering <br /> Innovation with <br /> excellence
            </div>
            <div className="items-stretch flex max-w-[462px] flex-col ml-24 -mb-1 max-md:mr-0 max-md:max-w-[374px] max-md:ml-24 max-md:mb-0.5 max-sm:ml-5">
              <div className="text-zinc-600 text-lg leading-7 tracking-normal w-full max-sm:-ml-1 max-sm:mr-24">
                <p className="indent-[1em]">
                  We are a hub that delivers exceptional digital skills training,
                  products, services &amp; experiences through a community that fosters tech growth and innovation.
                </p>
              </div>
              <div className="justify-center items-center bg-violet-800 flex w-full flex-col mt-14 px-16 py-3 rounded-[100px] max-md:mr-0 max-md:ml-0 max-md:pr-32">
                <div className="items-stretch flex gap-2 pr-3.5 max-sm:mr-0 max-sm:-ml-1">
                  <a href="#" className="text-white text-lg font-bold leading-7 grow shrink basis-auto">Reach out to us</a>
                  <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/c0e443de3105cab54fbab2d1c029a0032114dad4bb52da07f4608cc7217a35c1?apiKey=1bcc27728ab244268fc16ff60580b199&" className="aspect-square object-contain object-center w-6 shrink-0 my-auto"  aria-label="Reach out to us" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
            <div className="flex-col overflow-hidden relative flex min-h-[429px] w-full justify-center ml-0 mr-4 mt-24 pl-6 py-12 items-end max-md:max-w-full max-md:mt-5 max-md:pl-5">
              <img loading="lazy" srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5742871f6801d5b4b353cf2c36564bb921e31ee063a1120ec02d7b313d97c8e0?apiKey=1bcc27728ab244268fc16ff60580b199&"className="absolute object-contain object-center inset-0 size-full" />
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/7ad7154c0d26765e00a51bf7eb76fd2f6d0168cdc5893461f1510647dfe6d03d?apiKey=1bcc27728ab244268fc16ff60580b199&" className="aspect-[0.59] object-contain object-center w-[66px] mb-44 max-md:mb-10" />
            </div>
          </div>
        </div>
      </header>
      <div className="flex max-w-[566px] flex-col justify-center items-stretch rounded-[158px]"></div>
    </form>
  );
}

export default Header