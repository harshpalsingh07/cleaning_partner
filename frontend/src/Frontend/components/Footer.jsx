import React from "react";

function Footer() {
  return (
    <>
      <footer class="bg-[#050B05] text-white py-12 px-6 font-sans">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col lg:flex-row gap-12 mb-16">
            <div class="bg-[#1C261C] p-8 rounded-[40px] w-full lg:w-1/3 relative overflow-hidden border-l-4 border-green-600">
              <div class="flex items-center gap-2 mb-10">
                <img
                  src="https://via.placeholder.com/40"
                  alt="Logo"
                  class="rounded-full"
                />{" "}
                <span class="text-2xl font-bold">Cleanify</span>
              </div>

              <div class="space-y-6">
                <div class="flex items-center gap-4">
                  <i class="fas fa-phone-alt text-orange-500"></i>
                  <span class="text-gray-300 font-medium">+629 555-0129</span>
                </div>
                <div class="flex items-center gap-4">
                  <i class="fas fa-envelope text-orange-500"></i>
                  <span class="text-gray-300 font-medium">
                    demo@example.com
                  </span>
                </div>
                <div class="flex items-start gap-4">
                  <i class="fas fa-map-marker-alt text-orange-500 mt-1"></i>
                  <span class="text-gray-300 font-medium leading-relaxed">
                    1901 Thornridge Cir. Shiloh,
                    <br />
                    Hawaii 81063
                  </span>
                </div>
              </div>
            </div>

            <div class="flex-1 lg:pt-12 relative">
              <div class="absolute -top-4 right-0 flex items-center gap-4">
                <div class="hidden lg:block h-[1px] w-64 bg-gray-800 mr-4"></div>
                <a
                  href="#"
                  class="text-orange-500 font-bold flex items-center gap-2 text-lg"
                >
                  Book A Free Consultation
                  <span class="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-[10px]">
                    <i class="fas fa-arrow-up rotate-45"></i>
                  </span>
                </a>
              </div>

              <div class="grid grid-cols-1 md:grid-cols-3 gap-12 mt-8 lg:border-t lg:border-l border-gray-800 lg:rounded-tl-[40px] lg:p-10">
                <div>
                  <h4 class="text-green-500 font-bold mb-6">Company</h4>
                  <ul class="space-y-4 text-gray-400 text-sm font-medium">
                    <li class="hover:text-white transition cursor-pointer">
                      About
                    </li>
                    <li class="hover:text-white transition cursor-pointer">
                      Our Mission
                    </li>
                    <li class="hover:text-white transition cursor-pointer">
                      Our Blogs
                    </li>
                    <li class="hover:text-white transition cursor-pointer">
                      Help Center
                    </li>
                    <li class="hover:text-white transition cursor-pointer">
                      Contact Us
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-green-500 font-bold mb-6">Service</h4>
                  <ul class="space-y-4 text-gray-400 text-sm font-medium">
                    <li class="hover:text-white transition cursor-pointer">
                      Home Cleaning
                    </li>
                    <li class="hover:text-white transition cursor-pointer">
                      Office Cleaning
                    </li>
                    <li class="hover:text-white transition cursor-pointer">
                      Carpet & Upholstery
                    </li>
                    <li class="hover:text-white transition cursor-pointer">
                      Post-Construction
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 class="text-green-500 font-bold mb-6">Working Ours</h4>
                  <ul class="space-y-4 text-gray-400 text-sm font-medium">
                    <li class="flex justify-between">
                      <span>Mon - Fri:</span>
                      <span>9.00 am - 8.00pm</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Saturday:</span>
                      <span>10.00 am - 8.00pm</span>
                    </li>
                    <li class="flex justify-between">
                      <span>Sunday:</span>
                      <span>9.00 am - 3.00pm</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <hr class="border-gray-800 mb-8" />

          <div class="flex flex-col md:flex-row justify-between items-center gap-6">
            <p class="text-gray-400 text-sm">© Copyright 2025 by Company.com</p>

            <div class="flex flex-wrap justify-center gap-3">
              <a
                href="#"
                class="px-5 py-2 rounded-full border border-gray-800 text-xs font-semibold flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <i class="fab fa-twitter"></i> Twitter
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-full border border-gray-800 text-xs font-semibold flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <i class="fab fa-facebook-f"></i> Facebook
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-full border border-gray-800 text-xs font-semibold flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <i class="fab fa-pinterest-p"></i> Pinterest
              </a>
              <a
                href="#"
                class="px-5 py-2 rounded-full border border-gray-800 text-xs font-semibold flex items-center gap-2 hover:bg-gray-800 transition"
              >
                <i class="fab fa-instagram"></i> Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
