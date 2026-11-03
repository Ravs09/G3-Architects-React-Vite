
import { Link, Routes, Route } from 'react-router-dom';


function HomePage() {
  return (
    <>
      <header className=" bg-[#FF900E1A] pb-10">
              
              <nav className="w-full px-7 py-4 pr-15 ">
                  <div className="flex justify-between items-center">
      
                      <div>
                          <a href="#">
                              <h1 className="px-1 font-bold text- md:text-3xl cursor-pointer">
                                  G<span className="text-red-700">3</span> Architects
                              </h1>
                          </a>
      
                      </div>
      
                      <div className="space-x-5 items-center flex hidden md:block ">
      
                          <a href="#" className="text-sm text-gray-900 hover:text-blue-600">
                              Home
                          </a>
                          <a href="#" className="text-sm text-gray-900 hover:text-blue-600">
                              About
                          </a>
                          <a href="#" className="text-sm text-gray-900 hover:text-blue-600">
                              Contact us
                          </a>
                          <Link to="/login" className="text-sm text-gray-900 hover:text-blue-600">
                              Login
                          </Link>
                          <Link to="/signup" className="text-sm bg-[#FF900E] text-white px-4 py-2 rounded-md hover:bg-orange-500 transition">
                              Sign Up
                          </Link>
                      </div>
      
                  </div>
              </nav>
      
              <div className="px-10 w-full text-center py-5">
                  <h1 className="text-center text-2xl font-bold mt-10 mb-3 md:text-3xl">
                      Brand New <br />
                      Group of Architects
                  </h1>
                  <p className="text-gray-500 text-xs mb-10  md:px-50 md:text-sm">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                      alteration in some form, by injected humour, or randomised words which don't look even
                  </p>
                  <a href="#"
                      className="bg-[#FF900E] px-2 py-1 rounded-sm text-xs text-white cursor-pointer inline-block md:px-4 md:py-3 md:rounded-md md:text-sm hover:bg-orange-500 transition active:scale-95 duration-150">
                      Explore More
                  </a>
                  <img src="/img/Rectangle 12.png" alt="cover pic"
                      className="w-full max-w-md md:max-w-4xl h-auto mx-auto mt-10 rounded-lg" />
              </div>
          </header>
      
          <div className="grid grid-cols-1 p-10 sm:grid-cols-2 md:p-20 ">
      
              <div className="grid grid-cols-2 gap-4">
                  <img src="/img/pic1.png" alt="pic1" className="w-full h-auto " />
                  <img src="/img/pic2.png" alt="pic2" className="w-full h-auto " />
                  <img src="/img/pic 4.png" alt="pic3" className="w-full h-auto " />
                  <img src="/img/pic 3.png" alt="pic4" className="w-full h-auto " />
              </div>
      
              <div className="px-10 pl-20 my-auto">
                  <h2 className=" text-gray-600 text-2xl mt-10 mb-3 md:text-3xl font-semibold">
                      Quick list <span className="text-gray-950 font-bold">of Our</span> <br />
                      <span className="text-orange-400">Features</span>
                  </h2>
      
                  <p className="text-gray-500 text-xs mb-10 md:text-sm">There are many variations of passages of Lorem
                      Ipsum available, but the majority have suffered alteration
                      in some form, by injected humour, or randomised words which don't look even</p>
      
                  <a href="#"
                      className="bg-orange-400 px-2 py-1 rounded-sm text-xs text-white cursor-pointer inline-block md:px-4 md:py-3 md:rounded-md md:text-sm hover:bg-orange-500 transition active:scale-95 duration-150">
                      Explore More
                  </a>
      
              </div>
          </div>
      
          <div className="bg-gray-50 pb-10">
              <div className="p-15 grid grid-cols-1 md:grid-cols-2 gap-8 ">
      
                  <section>
                      <div>
                          <h1
                              className=" text-gray-900 text-2xl mt-10 mb-3 md:text-3xl font-bold border-l-4 border-orange-400 pl-3">
                              Features you will <br /> love & enjoy
                          </h1>
                          <p className="text-xs text-gray-500 md:text-sm">
                              There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised words which don't look even
                          </p>
                      </div>
      
                      <div className="p-8 shadow-md rounded-lg mt-10 bg-white">
                          <h3 className="text-base text-gray-900 font-semibold md:text-lg ">Desktop & Mobile Version</h3>
                          <p className="text-gray-500 text-xs md:text-sm">There are many variations of passages of Lorem Ipsum
                              available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised...........</p>
                      </div>
      
                      <div className="p-8 shadow-md rounded-lg mt-10 bg-white">
                          <h3 className="text-base text-gray-900 font-semibold md:text-lg ">Drag & Drop Builder</h3>
                          <p className="text-gray-500 text-xs md:text-sm">There are many variations of passages of Lorem Ipsum
                              available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised...........</p>
                      </div>
      
                      <div className="p-8 shadow-md rounded-lg mt-10 bg-white">
                          <h3 className="text-base text-gray-900 font-semibold md:text-lg ">Awesome Modern Design</h3>
                          <p className="text-gray-500 text-xs md:text-sm">There are many variations of passages of Lorem Ipsum
                              available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised...........</p>
                      </div>
      
                      <div className="p-8 shadow-md rounded-lg mt-10 bg-white">
                          <h3 className="text-base text-gray-900 font-semibold md:text-lg ">Super Easy to Edit</h3>
                          <p className="text-gray-500 text-xs md:text-sm">There are many variations of passages of Lorem Ipsum
                              available, but the majority have suffered
                              alteration in some form, by injected humour, or randomised...........</p>
                      </div>
      
                  </section>
      
                  <section>
                      <img src="/img/ladis emage 2.png" alt="" className="w-full h-auto p-8 mt-10 md:mt-40" />
                  </section>
      
              </div>
          </div>
      
          <div className=" p-10 bg-white">
              
              <section>
      
                  <h2 className=" text-gray-900 text-2xl md:text-3xl font-bold ">
                      Some Facts
                  </h2>
      
                  <p className="text-xs mt-3 text-gray-500 md:text-sm md:mt-7">
                      There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered
                      alteration.
                  </p>
      
              </section>
      
              <section className="mt-15 grid grid-cols-2 md:grid-cols-4 gap-5">
      
                  <div className="border rounded-lg border-orange-400 p-6 text-center w-full">
                      <img src="/img/Group 22.png" alt="gp22" className="mx-auto w-12 md:w-16" />
                      <h3 className=" text-gray-900 text-xl md:text-2xl font-bold py-1">
                          54
                      </h3>
                      <p className="text-sm text-gray-500 md:text-base">
                          Awards Winnings
                      </p>
      
                  </div>
      
                  <div className="border rounded-lg border-orange-400 p-6 text-center w-full">
      
                      <img src="/img/Group 23.png" alt="gp22" className="mx-auto w-12 md:w-16" />
      
                      <h3 className=" text-gray-900 text-xl md:text-2xl font-bold py-1">
                          1458
                      </h3>
      
                      <p className="text-sm text-gray-500 md:text-base">
                          Project Finished
                      </p>
      
                  </div>
      
                  <div className="border rounded-lg border-orange-400 p-6 text-center w-full">
      
                      <img src="/img/Group 24.png" alt="gp22" className="mx-auto w-12 md:w-16" />
      
                      <h3 className=" text-gray-900 text-xl md:text-2xl font-bold py-1">
                          590
                      </h3>
      
                      <p className="text-sm text-gray-500 md:text-base">
                          Clients Worked
                      </p>
      
                  </div>
      
                  <div className="border rounded-lg border-orange-400 p-6 text-center w-full">
      
                      <img src="/img/Group 25.png" alt="gp22" className="mx-auto w-12 md:w-16" />
      
                      <h3 className=" text-gray-900 text-xl md:text-2xl font-bold py-1">
                          22578
                      </h3>
      
                      <p className="text-sm text-gray-500 md:text-base">
                          Email Send
                      </p>
      
                  </div>
      
              </section>
      
          </div>
      
          <div className="p-10">
              
              <section className="text-center">
                  <h2 className=" text-gray-900 text-2xl md:text-3xl font-bold ">
                      Our Sponspors
                  </h2>
      
                  <p className="text-xs mt-3 text-gray-500 md:text-sm md:mt-7">
                      There are many variations of passages of Lorem Ipsum available, but <br /> the majority have suffered
                      alteration.
                  </p>
              </section>
      
              <section className="grid grid-cols-2 gap-10 p-10 mt-5 md:grid-cols-4 md:px-30">
      
                  <img src="/img/spotify.png" alt="spotify" className="w-30  p-3" />
      
                  <img src="/img/Amazon.png" alt="Amazon" className="w-30 p-3" />
      
                  <img src="/img/Telerama Logo.png" alt="Telerama Logo.png" className="w-30 p-3" />
      
                  <img src="/img/figma Logo.png" alt="figma Logo.png" className="w-30 p-3" />
      
              </section>
      
              <div className="text-center mx-10 md:mx-30 ">
                  <p className="text-sm text-gray-600 bg-pink-100 py-2 px-3 rounded">
                      All rights reserved copyright@2023 startup landing page design
                  </p>
              </div>
          </div>
    </>
  );
}


export default HomePage;

