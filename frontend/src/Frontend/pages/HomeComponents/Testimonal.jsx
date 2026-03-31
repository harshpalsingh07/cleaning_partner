import React from "react";

function Testimonal() {
  return (
    <>
      <section className="relative bg-[#0d150d] text-white py-20 px-6 overflow-hidden min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-green-900/40 via-transparent to-transparent"></div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <div className="text-center mb-16">
            <span className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-700 text-[10px] font-medium uppercase tracking-widest bg-zinc-900/50 mb-6">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
              Testimonials
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The Best Customers <br /> Says About Our Action
            </h2>
            <p className="text-gray-400 text-sm">
              Here's what happy customers are saying about our top-rated
              cleaning service
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 flex gap-3">
                <div className="relative flex-1 group">
                  <img
                    src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400"
                    className="rounded-2xl h-64 w-full object-cover border-2 border-green-500/50"
                    alt="Customer"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-green-600/90 py-2 flex justify-center rounded-b-2xl">
                    <span className="text-2xl italic font-serif leading-none">
                      "
                    </span>
                  </div>
                </div>
                <div className="flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
                    className="rounded-2xl h-64 w-full object-cover opacity-80"
                    alt="Customer"
                  />
                </div>
                <div className="flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
                    className="rounded-2xl h-64 w-full object-cover opacity-80"
                    alt="Customer"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 lg:pl-8">
                <div className="flex text-green-500 mb-4">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
                <p className="text-sm font-semibold mb-6">
                  Rated 4.8/ by 1300+ Happy Customer
                </p>
                <p className="text-gray-300 text-lg leading-relaxed italic mb-8 border-b border-white/10 pb-8">
                  "I'm beyond impressed with their cleaning service! The team
                  arrived right on time, worked efficiently, and left my
                  apartment spotless. I've tried other companies before, but
                  none matched their attention to detail."
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-xl font-bold">James Parker</p>
                    <p className="text-gray-400 text-sm">
                      Operations Lead at Agency
                    </p>
                  </div>
                  <div className="flex gap-1.5 pb-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                    <span className="w-2 h-2 rounded-full bg-gray-600"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-2xl overflow-hidden bg-white/5">
            <div className="p-8 text-center border-r border-b md:border-b-0 border-white/10">
              <h4 className="text-4xl font-bold mb-2">12200+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tight">
                Businesses Using <br /> Our Platform
              </p>
            </div>
            <div className="p-8 text-center border-r border-b md:border-b-0 border-white/10">
              <h4 className="text-4xl font-bold mb-2">1200+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tight">
                Businesses Using <br /> Our Platform
              </p>
            </div>
            <div className="p-8 text-center border-r border-white/10">
              <h4 className="text-4xl font-bold mb-2">98%</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tight">
                Businesses Using <br /> Our Platform
              </p>
            </div>
            <div className="p-8 text-center">
              <h4 className="text-4xl font-bold mb-2">35+</h4>
              <p className="text-xs text-gray-400 uppercase tracking-tight">
                Businesses Using <br /> Our Platform
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonal;
