import React from "react";

function Blog() {
  return (
    <>
      <section class="bg-white py-16 px-4">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-12">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 text-sm font-medium mb-4">
              <span class="w-2 h-2 rounded-full bg-orange-500"></span>
              <span class="text-gray-600">Our Blog</span>
            </div>
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Check out latest news <br class="hidden md:block" /> update &
              articles
            </h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <article class="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800"
                  alt="Home cleaning"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 left-4 bg-[#4CAF50] text-white px-3 py-1 rounded text-lg font-bold">
                  03
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-green-600 transition-colors">
                  10 Proven Tips to Keep Your Home Spotless Year-Round
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed mb-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a
                </p>
                <a
                  href="#"
                  class="inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600"
                >
                  Read More
                  <span class="bg-green-100 text-green-600 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </article>

            <article class="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800"
                  alt="Workspace cleaning"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 left-4 bg-[#4CAF50] text-white px-3 py-1 rounded text-lg font-bold">
                  08
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-green-600 transition-colors">
                  The Hidden Benefits of a Clean Workspace
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed mb-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a
                </p>
                <a
                  href="#"
                  class="inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600"
                >
                  Read More
                  <span class="bg-green-100 text-green-600 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </article>

            <article class="group border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div class="relative h-64 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=800"
                  alt="Deep cleaning"
                  class="w-full h-full object-cover"
                />
                <div class="absolute top-4 left-4 bg-[#4CAF50] text-white px-3 py-1 rounded text-lg font-bold">
                  05
                </div>
              </div>
              <div class="p-6">
                <h3 class="text-xl font-bold text-gray-800 mb-3 leading-snug group-hover:text-green-600 transition-colors">
                  The Ultimate Guide to Deep Cleaning Your Home
                </h3>
                <p class="text-gray-500 text-sm leading-relaxed mb-6">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a
                </p>
                <a
                  href="#"
                  class="inline-flex items-center gap-2 font-semibold text-gray-700 hover:text-green-600"
                >
                  Read More
                  <span class="bg-green-100 text-green-600 rounded-full p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3 w-3 rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="3"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </span>
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
