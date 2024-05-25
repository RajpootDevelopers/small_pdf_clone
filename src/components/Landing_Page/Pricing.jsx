import Link from "next/link";

const Pricing = () => {
  return (
    <div className="mx-auto max-w-screen-xl p-6 py-10 sm:p-10 md:p-16 lg:p-20 xl:p-24">
      {/* start */}
      <div className="bg-[#F2F6FF] mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 max-w-screen-xl pl-6 pr-4 sm:px-20 ">
        <div className="col-span-1 flex flex-col justify-center text-center sm:text-left md:pr-10">
          <h1 className="mb-6 text-4xl font-semibold">Plans & Pricing</h1>
          <p className="">
            Get unlimited access to Smallpdf tools for you and your team with
            pricing that’s right for you.
          </p>
          <div className=" mt-10">
            <Link
              href="/pricing"
              className="text-white font-bold bg-blue-700 hover:bg-blue-800  rounded-lg text-lg px-5 py-2.5 mb-2 focus:outline-none"
            >
              Compare Plans
            </Link>
          </div>
        </div>

        <div className="col-span-2  grid grid-cols-1 sm:grid-cols-2 gap-6 lg:py-10  mt-10 lg:mt-0">
          <div className="bg-white rounded-lg p-4 ">
            <div className="border-b-2 mt-4 text-2xl font-semibold flex">
              Pro
              <svg
                className="w-[28px] ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 3a5 5 0 0 1 2.424 9.374 8 8 0 0 1 5.572 7.377L20 20v1h-1v-1l-.004-.24a7 7 0 0 0-13.992 0L5 20v1H4v-1l.004-.25a8 8 0 0 1 5.573-7.376A5 5 0 0 1 12 3m0 1a4 4 0 1 0 0 8 4 4 0 0 0 0-8"></path>
              </svg>
              <span className="font-light text-lg">1</span>
            </div>
            <div className="min-h-24 py-4">
              <div>
                <span className="text-4xl">USD 9</span>
                <span className="font-light">/month</span>
              </div>
              <div className="text-sm font-light">
                per user, billed annually.
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg p-4 ">
            <div className="border-b-2 mt-4 text-2xl font-semibold flex">
              Teams
              <svg
                className="w-[28px] ms-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M10 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-1.528 3.72A4.001 4.001 0 0 0 7 4a4 4 0 0 0-1.472 7.72A5 5 0 0 0 2.025 16H2v5h1v-4.5a4 4 0 0 1 8 0V21h2v-4.5a4 4 0 0 1 8 0V21h1v-5h-.025a5 5 0 0 0-3.503-4.28A4.001 4.001 0 0 0 17 4a4 4 0 0 0-1.472 7.72A5 5 0 0 0 12.025 16h-.05a5 5 0 0 0-3.503-4.28M20 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0"></path>
              </svg>
              <span className="font-light text-lg">2-14</span>
            </div>
            <div className="min-h-24 py-4">
              <div>
                <span className="text-4xl">USD 7</span>
                <span className="font-light">/month</span>
              </div>
              <div className="text-sm font-light">
                per user, billed annually.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* end */}
    </div>
  );
};

export default Pricing;
