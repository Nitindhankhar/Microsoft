/* eslint-disable jsx-a11y/alt-text */
import React from "react";

function Microscoft() {
  return (
    <>
      <div className="container mx-auto">
        <div className="navbar flex justify-between items-center p-4 ">
          <div className="flex justify-center items-center md:order-2">
            <div className="humburger inline-block p-4 cursor-pointer md:hidden ">
              <div className="line h-0.5 my-1 text-black w-6 bg-black "></div>
              <div className="line h-0.5 my-1 text-black w-6 bg-black"></div>
              <div className="line h-0.5 my-1 text-black w-6 bg-black"></div>
            </div>
            <div className="search md:hidden flex justify-center items-center ">
              <img src="./imges/Search.svg" className="w-5 mr-6" />
            </div>
          </div>
          <div className="logo text-center md:order-1 flex gap-4">
            <div className="w-14 flex justify-center items-center">
              <img src="https://i.pinimg.com/originals/b2/d9/06/b2d906c4b90768b63db1078cf365ca9f.jpg" />
            </div>
            <div className="featurs hidden md:justify-center md:items-center md:flex mx-1 sm:space-x-2 space-x-6 text-blue-500 pt-2">
              <div className="f-item hover:underline">Microsoft 365</div>
              <div className="f-item hover:underline">office</div>
              <div className="f-item hover:underline">Windows</div>
              <div className="f-item hover:underline">Surface</div>
              <div className="f-item hover:underline">xbox</div>
              <div className="f-item hover:underline">Supports</div>
            </div>
          </div>

          <div className="cart text-center md:order-3 flex sm:space-x-2 md:space-x-4 ">
            <div className="search hidden md:inline-block sm:hidden  ">
              {" "}
              All microsoft{" "}
            </div>
            <span className="ml-5">Seacrch</span>
            <img
              src="./imges/Search.svg"
              className="w-4 mx-4 hidden md:inline-block"
            ></img>
            <img
              src="./imges/cart.svg"
              className="w-4 mx-4 hidden md:inline-block"
            ></img>
            <img
              src="./imges/account.svg"
              className="w-4 mx-4 hidden md:inline-block"
            ></img>
          </div>
        </div>

        <div className="slider flex flex-col-reverse md:flex-row bg-[#e6e6e6] justify-center items:center ">
          <div className="left  flex flex-col  md:w-1/2 justify-center items-center md:items-baseline py-12">
            <h1 className="text-2xl font-medium mx-5">surface leptop 4</h1>
            <p className="w-3/4 mx-5 text-center md:text-left">
              Do it all with a perfect balance of sleek, ultra -thin design
              multitasking speed and improved performs
            </p>
            <button className="text-white bg-black font-bold px-4 py-2 my-6 mx-5 md:justify-center md:flex">
              shop now
            </button>
          </div>
          <div className="right">
            <img
              src="./imges/leptop.avif"
              className="w-48 flex justify-center mt-8 items:center mx-14 md:w-64 lg:w-96"
            ></img>
          </div>
        </div>
        <div className="promo mt-2 space-y-4 md:flex md:flex-row md:justify-center sm:grid sm:grid-cols-2 sm:space-x-5">
          <div className="item items-center flex mx-4 space-x-2  mt-3 md:flex-col">
            <img src="./imges/logo1.webp" className="w-10 h-10"></img>
            <span className="font-bold">choose your microsoft 365</span>
          </div>
          <div className="item items-center flex mx-4 space-x-2  md:flex-col">
            <img src="./imges/promo2.jpg" className="w-10 h-10"></img>
            <span className="font-bold">explore surface devices</span>
          </div>
          <div className="item items-center flex mx-4 space-x-2 md:flex-col">
            <img src="./imges/logo1.webp" className="w-10 h-10"></img>
            <span className="font-bold">buy xbox games</span>
          </div>
          <div className="item items-center flex mx-4 space-x-2 md:flex-col">
            <img src="./imges/promo2.jpg" className="w-10 h-10"></img>
            <span className="font-bold">get window 11</span>
          </div>
        </div>

        <div className="imges-container my-10 flex flex-col space-y-8 justify-center items-center md:flex-row md:space-x-5">
          <div className="first w-2/3 shadow-2xl md:w-1/4 sm:pt-8">
            <div className="imge ">
              <img src="./imges/Microsoft2.avif" className="sm:h-40" />
            </div>
            <div className="content mx-4 space-y-4">
              <h2 className="font-bold text-2xl py-6">
                Maximise the everyday with Microsoft 365{" "}
              </h2>
              <p>
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.{" "}
              </p>
              <button className="bg-blue-800 text-white py-2 px-2">
                for one person
              </button>
              <p className="text-blue-500 pb-6">For up to six people </p>
            </div>
          </div>
          <div className="first w-2/3  shadow-2xl md:w-1/4">
            <div className="imge">
              <img src="./imges/Microsoft-3.jpg" className="sm:h-40" />
            </div>
            <div className="content mx-4 space-y-4">
              <h2 className="font-bold text-2xl py-6">
                Maximise the everyday with Microsoft 365{" "}
              </h2>
              <p>
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.{" "}
              </p>
              <button className="bg-blue-800 text-white py-2 px-2">
                for one person
              </button>
              <p className="text-blue-500 pb-6">For up to six people </p>
            </div>
          </div>
          <div className="first w-2/3  shadow-2xl md:w-1/4">
            <div className="imge">
              <img src="./imges/Microsoft-3.jpg" className="sm:h-40"  />
            </div>
            <div className="content mx-4 space-y-4">
              <h2 className="font-bold text-2xl py-6">
                Maximise the everyday with Microsoft 365{" "}
              </h2>
              <p>
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.{" "}
              </p>
              <button className="bg-blue-800 text-white py-2 px-2">
                for one person
              </button>
              <p className="text-blue-500 pb-6">For up to six people </p>
            </div>
          </div>
          <div className="first w-2/3  shadow-2xl md:w-1/4">
            <div className="imge">
              <img src="./imges/microsoft.jpg" className="sm:h-40"  />
            </div>
            <div className="content mx-4 space-y-4">
              <h2 className="font-bold text-2xl py-6">
                Maximise the everyday with Microsoft 365{" "}
              </h2>
              <p>
                Get online protection, secure cloud storage and innovative apps
                designed to fit your needs – all in one plan.{" "}
              </p>
              <button className="bg-blue-800 text-white py-2 px-2">
                for one person
              </button>
              <p className="text-blue-500 pb-6">For up to six people </p>
            </div>
          </div>
        </div>
      </div>
      <div className="footer bg-slate-500 text-white h-auto mt-10 p-10 sm:grid sm:grid-cols-2 sm:space-x-5 md:grid-cols-4 md:space-x-5 lg:grid-cols-6">
        <div className="first space-y-6 my-10 hover:cursor-pointer">
          <h6 className="text-black font-extrabold">What's new</h6>
          <p> Surface Pro</p>
          <p>Microsoft Copilot</p>
          <p>Microsoft 365</p>
          <p>Windows 11 apps</p>
        </div>
        <div className="first space-y-6 my-10 hover:cursor-pointer">
          <h6 className="text-black font-extrabold">Microsoft Store</h6>
          <p> Surface Pro</p>
          <p>Microsoft Copilot</p>
          <p>Microsoft 365</p>
          <p>Windows 11 apps</p>
        </div>
        <div className="first space-y-6 my-10 hover:cursor-pointer">
          <h6 className="text-black font-extrabold">Education</h6>
          <p> Surface Pro</p>
          <p>Microsoft Copilot</p>
          <p>Windows 11 apps</p>
          <p>Microsoft 365</p>
          <p>Windows 11 apps</p>
        </div>
           <div className="first space-y-6 my-10 hover:cursor-pointer">
          <h6 className="text-black font-extrabold">Business</h6>
          <p> Surface Pro</p>
          <p>Microsoft Copilot</p>
          <p>Microsoft 365</p>
          <p>Windows 11 apps</p>
        </div>
        <div className="first space-y-6 my-10 hover:cursor-pointer">
          <h6 className="text-black font-extrabold">Developer</h6>
          <p> Surface Pro</p>
          <p>Microsoft Copilot</p>
          <p>Windows 11 apps</p>
          <p>Microsoft 365</p>
          <p>Windows 11 apps</p>
        </div>
        <div className="first space-y-6 my-10 hover:cursor-pointer">
          <h6 className="text-black font-extrabold">company</h6>
          <p> Surface Pro</p>
          <p>Microsoft Copilot</p>
          <p>Windows 11 apps</p>
          <p>Microsoft 365</p>
          <p>Windows 11 apps</p>
        </div>
      </div>
      
    </>
  );
}

export default Microscoft;
