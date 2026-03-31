import React from "react";
import Footer from "../components/Footer";
import Blog from "../pages/HomeComponents/Blog";
import Price from "../pages/HomeComponents/Price";
import Testimonal from "../pages/HomeComponents/Testimonal";
import Service from "../pages/Services";

function Home() {
  return (
    <>
      <section class="relative min-h-screen flex items-center overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-br from-green-100 via-green-200 to-green-400"></div>

        <div class="absolute top-0 left-0 w-full h-full bg-[url('https://svgshare.com/i/uPj.svg')] bg-no-repeat bg-cover opacity-20"></div>

        <div class="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 class="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              A Cleaner <br />
              Space <span class="text-white">Starts</span> <br />
              <span class="text-white">Here</span>
            </h1>

            <p class="text-gray-700 max-w-lg mb-8">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>

            <button class="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold">
              Get a Free Quote →
            </button>
          </div>

          <div class="relative">
            <img
              src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1"
              class="rounded-3xl drop-shadow-2xl"
              alt="Cleaning Team"
            />

            <div class="absolute -top-10 -right-10 w-40 h-40 border-2 border-white/40 rounded-full"></div>
            <div class="absolute bottom-10 -left-10 w-24 h-24 border border-white/30 rounded-full"></div>
          </div>
        </div>
      </section>
      <section class="bg-white border-t border-b">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-2 md:grid-cols-6">
            <div class="flex items-center justify-center py-10 border-r">
              <img
                src="https://dummyimage.com/120x40/000/fff&text=Ebooks"
                alt="Ebooks"
                class="opacity-70 hover:opacity-100 transition"
              />
            </div>

            <div class="flex items-center justify-center py-10 border-r">
              <img
                src="https://dummyimage.com/120x40/000/fff&text=Snowflake"
                alt="Snowflake"
                class="opacity-70 hover:opacity-100 transition"
              />
            </div>

            <div class="flex items-center justify-center py-10 border-r">
              <img
                src="https://dummyimage.com/120x40/000/fff&text=Sitemark"
                alt="Sitemark"
                class="opacity-70 hover:opacity-100 transition"
              />
            </div>

            <div class="flex items-center justify-center py-10 border-r">
              <img
                src="https://dummyimage.com/120x40/000/fff&text=Alohu"
                alt="Alohu"
                class="opacity-70 hover:opacity-100 transition"
              />
            </div>

            <div class="flex items-center justify-center py-10 border-r">
              <img
                src="https://dummyimage.com/120x40/000/fff&text=Snowflake"
                alt="Snowflake"
                class="opacity-70 hover:opacity-100 transition"
              />
            </div>

            <div class="flex items-center justify-center py-10">
              <img
                src="https://dummyimage.com/120x40/000/fff&text=Cactus"
                alt="Cactus"
                class="opacity-70 hover:opacity-100 transition"
              />
            </div>
          </div>
        </div>
      </section>

      <section class="bg-white py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="grid md:grid-cols-2 gap-10 mb-12">
            <div>
              <span class="inline-flex items-center gap-2 text-sm font-medium text-gray-600 border border-gray-200 rounded-full px-4 py-1 mb-4">
                <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                About Us
              </span>

              <h2 class="text-4xl font-bold leading-tight">
                Redefining Clean for <br />
                Homes and Businesses
              </h2>
            </div>

            <p class="text-gray-600 leading-relaxed max-w-lg">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution.
            </p>
          </div>

          <div class="grid lg:grid-cols-3 gap-10 items-stretch">
            <div class="lg:col-span-2 bg-white rounded-2xl shadow-sm border p-6">
              <img
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                alt="Cleaning"
                class="rounded-xl w-full h-[340px] object-cover"
              />

              <div class="flex items-center justify-between mt-6 flex-wrap gap-4">
                <button class="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
                  Discover More
                  <span class="bg-white text-orange-500 rounded-full w-5 h-5 flex items-center justify-center text-xs">
                    →
                  </span>
                </button>

                <div class="flex items-center gap-3">
                  <span class="text-2xl font-bold">4.8</span>
                  <div>
                    <div class="flex text-orange-400 text-sm">★★★★★</div>
                    <p class="text-xs text-gray-500">Based on 204 Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white rounded-2xl border shadow-sm overflow-hidden flex flex-col">
              <div class="bg-green-50 p-8 text-center flex-1">
                <h3 class="text-5xl font-bold text-green-600">98%</h3>
                <p class="mt-2 text-sm text-gray-600">
                  Clients Satisfied <br /> and Repeating
                </p>
              </div>

              <div class="h-px bg-gray-200"></div>

              <div class="p-8 text-center flex-1">
                <p class="text-xs uppercase tracking-wide text-gray-500 mb-2">
                  Years of Work Experience
                </p>
                <h3 class="text-6xl font-bold text-orange-500">17</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-[#eef7d9] py-32">
        <div class="max-w-[1600px] mx-auto px-16">
          <div class="bg-[#eef7d9] rounded-[36px] p-20 relative overflow-hidden">
            <div class="absolute left-0 top-0 w-[520px] h-[520px] bg-gradient-to-br from-green-500/40 to-transparent rounded-full -translate-x-1/2 -translate-y-1/2"></div>

            <div class="grid grid-cols-12 gap-20 relative z-10">
              <div class="col-span-5">
                <span class="inline-flex items-center gap-2 text-[14px] font-semibold text-gray-600 border border-gray-300 rounded-full px-5 py-2 bg-white mb-8">
                  <span class="w-2 h-2 bg-orange-500 rounded-full"></span>
                  Service Area
                </span>

                <h2 class="text-[42px] font-extrabold leading-[1.25] text-gray-900 mb-6">
                  What We are Offering <br />
                  to Our Potential Client
                </h2>

                <p class="text-[16px] text-gray-600 leading-relaxed max-w-[520px] mb-10">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that it has a more-or-less
                  normal distribution.
                </p>

                <div class="grid grid-cols-2 gap-x-10 gap-y-4 mb-10">
                  <div class="flex items-center gap-3 text-[15px] font-medium">
                    <span class="text-green-600">✔</span> Eco-Friendly
                  </div>
                  <div class="flex items-center gap-3 text-[15px] font-medium">
                    <span class="text-green-600">✔</span> Affordable
                  </div>
                  <div class="flex items-center gap-3 text-[15px] font-medium">
                    <span class="text-green-600">✔</span> Quick Service
                  </div>
                  <div class="flex items-center gap-3 text-[15px] font-medium">
                    <span class="text-green-600">✔</span> Certified Cleaners
                  </div>
                </div>

                <div class="bg-white rounded-2xl p-5 shadow-sm w-fit">
                  <img
                    src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1"
                    class="rounded-xl w-[360px] h-[200px] object-cover"
                    alt="Cleaner"
                  />
                </div>
              </div>

              <div class="col-span-7 space-y-10">
                <div class="bg-white rounded-2xl p-10 flex gap-10 items-center shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1581578731548-c64695cc6952"
                    class="w-[220px] h-[160px] object-cover rounded-xl"
                  />

                  <div>
                    <h3 class="text-[22px] font-bold mb-3">Office Cleaning</h3>
                    <p class="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-[520px]">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <button class="bg-orange-500 hover:bg-orange-600 text-white text-[14px] px-6 py-3 rounded-full font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>

                <div class="bg-white rounded-2xl p-10 flex gap-10 items-center shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                    class="w-[220px] h-[160px] object-cover rounded-xl"
                  />

                  <div>
                    <h3 class="text-[22px] font-bold mb-3">Home Cleaning</h3>
                    <p class="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-[520px]">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <button class="bg-orange-500 hover:bg-orange-600 text-white text-[14px] px-6 py-3 rounded-full font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>

                <div class="bg-white rounded-2xl p-10 flex gap-10 items-center shadow-sm">
                  <img
                    src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a"
                    class="w-[220px] h-[160px] object-cover rounded-xl"
                  />

                  <div>
                    <h3 class="text-[22px] font-bold mb-3">Window Cleaning</h3>
                    <p class="text-[15px] text-gray-600 leading-relaxed mb-5 max-w-[520px]">
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                    <button class="bg-orange-500 hover:bg-orange-600 text-white text-[14px] px-6 py-3 rounded-full font-semibold">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full py-24">
        <div class="px-10">
          <div class="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0e1113] via-[#14201a] to-[#1c4d16] px-20 py-20 flex gap-20 items-center">
            <span class="absolute top-12 right-40 w-10 h-10 rounded-full bg-white/20"></span>
            <span class="absolute top-32 right-16 w-6 h-6 rounded-full bg-white/20"></span>
            <span class="absolute bottom-24 left-20 w-8 h-8 rounded-full bg-white/20"></span>

            <div class="w-1/2 text-white">
              <span class="inline-flex items-center gap-2 text-sm bg-white/10 px-4 py-1 rounded-full mb-6">
                <span class="w-2 h-2 bg-orange-400 rounded-full"></span>
                Why Choose Us
              </span>

              <h2 class="text-[42px] font-bold leading-tight mb-10">
                Why We’re Committed to <br />
                Excellence in Every Clean
              </h2>

              <div class="bg-[#4aa414] rounded-2xl p-8 space-y-8">
                <div class="flex gap-5 items-start">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    👷
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">Trained Professionals</h4>
                    <p class="text-sm text-white/80 mt-1">
                      It is a long established fact that a reader will be by the
                      readable content of a page
                    </p>
                  </div>
                </div>

                <hr class="border-white/20" />

                <div class="flex gap-5 items-start">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    🌱
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">Eco-Friendly Products</h4>
                    <p class="text-sm text-white/80 mt-1">
                      It is a long established fact that a reader will be by the
                      readable content of a page
                    </p>
                  </div>
                </div>

                <hr class="border-white/20" />

                <div class="flex gap-5 items-start">
                  <div class="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    ⭐
                  </div>
                  <div>
                    <h4 class="font-semibold text-lg">
                      Guaranteed Satisfaction
                    </h4>
                    <p class="text-sm text-white/80 mt-1">
                      It is a long established fact that a reader will be by the
                      readable content of a page
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="w-1/2 relative">
              <div class="rounded-3xl overflow-hidden bg-white shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b"
                  class="w-full h-[520px] object-cover"
                  alt="Cleaning Lady"
                />

                <div class="absolute bottom-6 left-6 right-6 flex items-center gap-6">
                  <div class="bg-yellow-400 text-black rounded-xl px-6 py-4 text-sm font-semibold w-[220px]">
                    Award Winning <br />
                    Cleaning Service <br />
                    Company
                  </div>

                  <div class="flex gap-4 ml-auto">
                    <div class="w-20 h-20 bg-black/80 rounded-full"></div>
                    <div class="w-20 h-20 bg-black/80 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-28">
        <div class="bg-[#edf6dd]">
          <h2 class="text-center text-[44px] font-semibold text-[#1f2d1f] leading-tight mb-16">
            The Professional <br />
            Process Behind Every Shine
          </h2>

          <div class="relative flex items-center justify-between max-w-[1000px] mx-auto mb-16">
            <div class="absolute top-1/2 left-0 right-0 h-[1px] bg-green-700/40"></div>

            <span class="relative z-10 bg-white px-6 py-2 rounded-full text-sm font-medium">
              Step One
            </span>

            <span class="relative z-10 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-medium">
              Step Two
            </span>

            <span class="relative z-10 bg-white px-6 py-2 rounded-full text-sm font-medium">
              Step Three
            </span>
          </div>

          <div class="bg-[#edf6dd] rounded-[40px] border border-white p-20">
            <div class="grid grid-cols-3 gap-20 text-center">
              <div>
                <div class="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-8">
                  <span class="text-3xl">📅</span>
                </div>
                <h3 class="text-xl font-semibold mb-4 text-[#1f2d1f]">
                  Book Your Cleaning
                </h3>
                <p class="text-[#6f7f6f] text-base leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div>
                <div class="w-20 h-20 mx-auto bg-yellow-400 rounded-2xl flex items-center justify-center mb-8">
                  <span class="text-3xl">👥</span>
                </div>
                <h3 class="text-xl font-semibold mb-4 text-[#1f2d1f]">
                  Our Team Gets to Work
                </h3>
                <p class="text-[#6f7f6f] text-base leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>

              <div>
                <div class="w-20 h-20 mx-auto bg-white rounded-2xl flex items-center justify-center mb-8">
                  <span class="text-3xl">🧹</span>
                </div>
                <h3 class="text-xl font-semibold mb-4 text-[#1f2d1f]">
                  Enjoy a Spotless Space
                </h3>
                <p class="text-[#6f7f6f] text-base leading-relaxed">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </div>

            <div class="mt-20 flex items-center justify-between bg-white rounded-full px-10 py-5 max-w-[900px] mx-auto shadow-sm">
              <div class="flex -space-x-3">
                <img
                  class="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?1"
                />
                <img
                  class="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?2"
                />
                <img
                  class="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?3"
                />
                <img
                  class="w-10 h-10 rounded-full border-2 border-white"
                  src="https://i.pravatar.cc/100?4"
                />
              </div>

              <p class="text-lg font-medium text-[#1f2d1f]">
                Elevate Your Space with Professional Cleaning
              </p>

              <button class="flex items-center gap-4 bg-orange-500 text-white px-8 py-4 rounded-full font-medium">
                Discover More
                <span class="bg-white text-black rounded-full w-8 h-8 flex items-center justify-center">
                  →
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
      <section class="max-w-7xl mx-auto px-6 py-16 font-sans">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div class="lg:col-span-5 flex flex-col space-y-8">
            <div>
              <span class="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 text-xs font-medium text-gray-500 bg-white shadow-sm mb-6 uppercase tracking-wider">
                <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
                Faqs
              </span>
              <h2 class="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Answers to Your Most Common Queries!
              </h2>
            </div>

            <div class="bg-[#e9f3df] rounded-3xl p-8 relative overflow-hidden flex flex-col items-center text-center">
              <h3 class="text-2xl font-bold text-slate-800 mb-4 z-10">
                Have Any Question <br /> on Your Minds?
              </h3>
              <button class="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-full transition-all z-10 shadow-lg mb-8">
                Get In Touch
              </button>

              <div class="w-full mt-4">
                <img
                  src="https://path-to-your-faq-illustration.png"
                  alt="FAQ illustration"
                  class="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 flex flex-col">
            <div class="divide-y divide-gray-200">
              <div class="py-6 flex justify-between items-center group cursor-pointer">
                <div class="flex items-center">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span class="text-lg font-semibold text-slate-800">
                    What types of cleaning services do you offer?
                  </span>
                </div>
                <svg
                  class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>

              <div class="py-6 flex justify-between items-center group cursor-pointer">
                <div class="flex items-center">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span class="text-lg font-semibold text-slate-800">
                    How do I book a cleaning service?
                  </span>
                </div>
                <svg
                  class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>

              <div class="py-6">
                <div class="flex justify-between items-center mb-4">
                  <div class="flex items-center">
                    <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                    <span class="text-lg font-semibold text-slate-800">
                      Are your cleaners trained and background-checked?
                    </span>
                  </div>
                  <div class="bg-green-600 rounded-full p-1 shadow-sm">
                    <svg
                      class="w-4 h-4 text-white rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="bg-[#f7f9f5] rounded-2xl p-6 border-t-2 border-orange-500">
                  <p class="text-gray-500 leading-relaxed">
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    morelt is a reader will be distracted by the readable.
                  </p>
                </div>
              </div>

              <div class="py-6 flex justify-between items-center group cursor-pointer">
                <div class="flex items-center">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span class="text-lg font-semibold text-slate-800">
                    What's your cancellation or rescheduling policy?
                  </span>
                </div>
                <svg
                  class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>

              <div class="py-6 flex justify-between items-center group cursor-pointer">
                <div class="flex items-center">
                  <span class="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                  <span class="text-lg font-semibold text-slate-800">
                    How do I pay for the service?
                  </span>
                </div>
                <svg
                  class="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Service />

      <Testimonal />
      <Price />
      <section class="bg-[#0b120a] py-20 px-6 relative overflow-hidden font-sans">
        <div class="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:40px_40px]"></div>

        <div class="max-w-6xl mx-auto relative z-10">
          <div class="relative bg-[#3e9313] rounded-[40px] overflow-hidden flex flex-col md:flex-row items-center justify-between p-10 md:p-16 mb-16 shadow-2xl">
            <div class="absolute left-0 top-0 w-full h-full opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
            <div class="relative z-10 max-w-md">
              <h2 class="text-white text-4xl font-bold leading-tight mb-8">
                Book Your Professional Cleaning Service Today!
              </h2>
              <button class="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full flex items-center transition-all">
                Get In Touch{" "}
                <span class="ml-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center">
                  →
                </span>
              </button>
            </div>
            <div class="relative z-10 mt-8 md:mt-0">
              <img
                src="https://html.kodesolution.com/2025/cleanify-html/images/resource/card1-1.png"
                class="h-64 object-contain"
                alt="Professional Cleaner"
              />
            </div>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div class="lg:col-span-5 space-y-8">
              <div class="bg-[#1a2318] rounded-[40px] p-6 border border-white/5">
                <img
                  src="https://html.kodesolution.com/2025/cleanify-html/images/resource/offer2.png"
                  class="w-full rounded-[30px] object-cover h-64"
                  alt="Equipment"
                />
              </div>
              <div class="bg-orange-500 rounded-[30px] p-8 flex justify-between items-center text-white">
                <div>
                  <p class="text-xs font-bold uppercase tracking-widest opacity-80 mb-1">
                    Weekly Service
                  </p>
                  <h4 class="text-3xl font-bold">50% Off!</h4>
                </div>
                <div class="bg-white/20 rounded-full p-2">
                  <svg
                    class="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="3"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>

            <div class="lg:col-span-7 bg-[#1c221a] border border-white/10 rounded-[40px] p-10 shadow-2xl">
              <span class="inline-block bg-white/5 border border-white/10 text-[10px] text-white font-bold py-1 px-4 rounded-full uppercase tracking-widest mb-6">
                Get Estimate
              </span>
              <h2 class="text-3xl font-bold text-white mb-2">
                Get Your Quick Estimate
              </h2>
              <p class="text-gray-400 text-sm mb-10">
                Get an instant price estimate for your cleaning service in just
                a few steps.
              </p>

              <form class="space-y-8">
                <div class="space-y-2">
                  <label class="text-white text-xs font-bold uppercase opacity-60">
                    Type of Cleaning
                  </label>
                  <div class="relative">
                    <select class="w-full bg-white rounded-xl py-4 px-5 text-slate-800 appearance-none font-semibold">
                      <option>Residential Cleaning</option>
                    </select>
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      ▼
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <label class="text-white text-xs font-bold uppercase opacity-60">
                    Include Cleaning Supplies?
                  </label>
                  <div class="relative">
                    <select class="w-full bg-white rounded-xl py-4 px-5 text-slate-800 appearance-none font-semibold">
                      <option>Yes</option>
                    </select>
                    <div class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                      ▼
                    </div>
                  </div>
                </div>

                <div class="space-y-2">
                  <div class="flex justify-between items-center mb-4">
                    <label class="text-white text-xs font-bold uppercase opacity-60">
                      Property Size
                    </label>
                    <span class="text-white text-xs font-bold">
                      1000 sq. ft.
                    </span>
                  </div>
                  <input
                    type="range"
                    class="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                </div>

                <div class="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 gap-6">
                  <button class="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full flex items-center justify-center transition-all group">
                    Get Free Estimate{" "}
                    <span class="ml-2 bg-white text-orange-500 rounded-full w-6 h-6 flex items-center justify-center group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </button>
                  <div class="text-center md:text-right">
                    <p class="text-3xl font-black text-white leading-none">
                      $250.00
                    </p>
                    <p class="text-[10px] text-gray-500 uppercase font-bold tracking-widest mt-1">
                      Estimated Price:
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Blog />
      <Footer />
    </>
  );
}

export default Home;
