import React from "react";

function Price() {
  return (
    <>
      <section className="bg-[#fdfdfd] py-20 px-6 font-sans">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-gray-200 text-[10px] font-bold uppercase tracking-widest text-gray-500 bg-white mb-6 shadow-sm">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-2"></span>
              Our Pricing Plan
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Select a Plan According to <br /> Your Requirements
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="border border-gray-100 rounded-[40px] p-2 bg-white shadow-xl shadow-gray-100/50">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                      Basic Package
                    </p>
                    <h3 className="text-2xl font-bold text-orange-500">
                      Fresh Start
                    </h3>
                  </div>
                  <span className="bg-[#e9f3df] text-[#4e9419] text-[10px] font-bold px-3 py-1 rounded-full">
                    Save 35%
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-6xl font-black text-slate-900">
                    $50
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">
                  Per visit (up to 2 bed / 1 bath)
                </p>
              </div>

              <div className="bg-[#f4f9f0] rounded-[32px] p-8">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Deep Cleaning Included
                  </li>
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Eco-Friendly Products
                  </li>
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Professional Equipment
                  </li>
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Fast & Reliable Service
                  </li>
                  <li className="flex items-center text-xs font-semibold text-gray-400 italic">
                    <span className="w-5 h-5 bg-gray-200 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Satisfaction Guaranteed
                  </li>
                  <li className="flex items-center text-xs font-semibold text-gray-400 italic">
                    <span className="w-5 h-5 bg-gray-200 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Free Support
                  </li>
                </ul>
                <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-200 uppercase tracking-widest">
                  Select Plan
                </button>
              </div>
            </div>

            <div className="bg-[#1a1f16] rounded-[40px] p-2 text-white shadow-2xl scale-105 z-10 border border-white/5">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                      Standard Package
                    </p>
                    <h3 className="text-2xl font-bold text-white">
                      Comfort Clean
                    </h3>
                  </div>
                  <span className="bg-orange-500/20 text-orange-500 text-[10px] font-bold px-3 py-1 rounded-full border border-orange-500/30">
                    Save 50%
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-6xl font-black">$120</span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">
                  Per visit (up to 3 bed / 2 bath)
                </p>
              </div>

              <div className="bg-gradient-to-b from-[#3a4d2b] to-[#4e9419] rounded-[32px] p-8">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-xs font-semibold">
                    <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Deep Cleaning Included
                  </li>
                  <li className="flex items-center text-xs font-semibold">
                    <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Eco-Friendly Products
                  </li>
                  <li className="flex items-center text-xs font-semibold">
                    <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Professional Equipment
                  </li>
                  <li className="flex items-center text-xs font-semibold">
                    <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Fast & Reliable Service
                  </li>
                  <li className="flex items-center text-xs font-semibold">
                    <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Satisfaction Guaranteed
                  </li>
                  <li className="flex items-center text-xs font-semibold">
                    <span className="w-5 h-5 bg-white/20 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Free Support
                  </li>
                </ul>
                <button className="w-full py-4 bg-white hover:bg-gray-100 text-slate-900 rounded-full font-bold text-sm transition-all uppercase tracking-widest">
                  Select Plan
                </button>
              </div>
            </div>

            <div className="border border-gray-100 rounded-[40px] p-2 bg-white shadow-xl shadow-gray-100/50">
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mb-1">
                      Standard Package
                    </p>
                    <h3 className="text-2xl font-bold text-orange-500">
                      Deep Refresh
                    </h3>
                  </div>
                  <span className="bg-[#e9f3df] text-[#4e9419] text-[10px] font-bold px-3 py-1 rounded-full">
                    Save 50%
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-6xl font-black text-slate-900">
                    $170
                  </span>
                </div>
                <p className="text-[11px] text-gray-400 font-medium">
                  Per visit (up to 2 bed / 1 bath)
                </p>
              </div>

              <div className="bg-[#f4f9f0] rounded-[32px] p-8">
                <ul className="space-y-4 mb-10">
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Deep Cleaning Included
                  </li>
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Eco-Friendly Products
                  </li>
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Professional Equipment
                  </li>
                  <li className="flex items-center text-xs font-semibold text-slate-700">
                    <span className="w-5 h-5 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Fast & Reliable Service
                  </li>
                  <li className="flex items-center text-xs font-semibold text-gray-400 italic">
                    <span className="w-5 h-5 bg-gray-200 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Satisfaction Guaranteed
                  </li>
                  <li className="flex items-center text-xs font-semibold text-gray-400 italic">
                    <span className="w-5 h-5 bg-gray-200 text-white rounded-full flex items-center justify-center mr-3 text-[10px]">
                      ✓
                    </span>{" "}
                    Free Support
                  </li>
                </ul>
                <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-orange-200 uppercase tracking-widest">
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Price;
