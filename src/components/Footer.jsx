import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 ">
      <div className="mx-auto max-w-screen-xl py-10 px-4 xl:px-10  grid gap-4 sm:grid-cols-2 md:grid-cols-4 ">
        <div className="max-w-sm">
          <div className="mb-4 mt-4 space-x-2">
            <span className="text-3xl font-bold">Giridot</span>
          </div>
          <div className="text-gray-800">
            This Website design & Code was built using our Tools. Treat it as a
            Proof Concept.
            <pre></pre>
            <br />
            Subscribe Now to receive Discount, News, and Updates. We Pinky swear
            to not spam you.
          </div>
        </div>
        {/* grid cols Company */}
        <div className="sm:ml-10">
          <div className="mt-4 mb-2 font-medium xl:mb-4 text-xl">Company</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded "
                  href="#"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded "
                  href="#"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded "
                  href="#"
                >
                  Newsletter
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded "
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* grid cols Products */}
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 text-xl">Products</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Email Builder
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Website Generator
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Bootstrap Builder
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Static Pages
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Help Articles
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Affiliate Program
                </a>
              </li>
            </ul>
          </nav>
        </div>
        {/* grid cols Resource */}
        <div className="">
          <div className="mt-4 mb-2 font-medium xl:mb-4 text-xl">Resource</div>
          <nav aria-label="Footer Navigation" className="text-gray-500">
            <ul className="space-y-3">
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  No Code Design
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Uptime Monitoring
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Static Website Host
                </a>
              </li>
              <li>
                <a
                  className=" hover:bg-gray-200 hover:font-semibold py-1 px-2 rounded"
                  href="#"
                >
                  Email Marketing
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      {/* Social breaker */}
      <div className="bg-gray-100">
        <div className="mx-auto max-w-screen-xl flex flex-col gap-y-4 px-4 py-3 text-center text-gray-500 sm:flex-row sm:justify-between sm:text-left">
          <div className="order-2">
            Copyright © 2024 Giridot | All Rights Reserved
          </div>
          <div className="order-1 flex gap-6 justify-center">
            <a href="#Instagram">
              <img
                className="w-6"
                src="/Social/instagram-icon.svg"
                alt="instagram-icon"
              />
            </a>
            <a href="#twitter">
              <img className="w-6" src="/Social/x-icon.svg" alt="x-icon" />
            </a>

            <a href="#Linkedin">
              <img
                className="w-6"
                src="/Social/linkedin-icon.svg"
                alt="linkedin-icon"
              />
            </a>
            <a href="#facebook">
              <img
                className="w-6"
                src="/Social/facebook-icon.svg"
                alt="facebook-icon"
              />
            </a>
            <a href="#youtube">
              <img
                className="w-6"
                src="/Social/youtube-icon.svg"
                alt="youtube-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
