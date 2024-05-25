import Link from "next/link";

const Popular_Tools = () => {
  const Popular_tools_data = [
    {
      image: "/tools/pdf-to-word-to-pdf.svg",
      title: "PDF to Word",
      description: "Convert PDFs to editable Word documents",
    },
    {
      image: "/tools/merge-pdf.svg",
      title: "Merge PDF",
      description: "Combine multiple PDFs into one unified document",
    },
    {
      image: "/tools/pdf-to-jpg-to-pdf.svg",
      title: "JPG to PDF",
      description: "Transform JPG, PNG, BMP, GIF, and TIFF images to PDF",
    },
    {
      image: "/tools/esign-pdf.svg",
      title: "eSign PDF",
      description:
        "Create your signature, sign your PDF and request people to sign",
    },
    {
      image: "/tools/edit-pdf.svg",
      title: "Edit PDF",
      description:
        "Add text, shapes, images and freehand annotations to your PDF",
    },
    {
      image: "/tools/compress-pdf.svg",
      title: "Compress PDF",
      description: "Reduce the size of your PDF without losing quality",
    },
  ];
  return (
    <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-6">
        <div className="text-center ">
          <h2 className="text-3xl font-semibold text-[#081E4A] sm:text-4xl xl:text-5xl">
            Most Popular PDF Tools
          </h2>

          <p className="text-center mt-4">
            21 tools to convert, compress, and edit PDFs for free. Try it out
            today!
          </p>
        </div>
        {/* ------------------- */}
        <div className="mx-auto mt-10 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left ">
          {Popular_tools_data.map((item, index) => {
            return (
              <Link
                key={index}
                href={"/tool/" + item.title.split(" ").join("-")}
                className="flex items-start backdrop-blur-lg mb-3 rounded-xl bg-white/80 text-left p-4 lg:p-8 hover:bg-gray-100 hover:-translate-y-2 transition-transform duration-700 border shadow"
              >
                <img className="w-8  me-3" src={item.image} alt="ertyu" />
                <div className="w-full">
                  <div className="font-bold flex">
                    <span className="">{item.title}</span>
                    <svg
                      className="ms-auto"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                    >
                      <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                    </svg>
                  </div>
                  <p className="mt-2 text-gray-700">{item.description}</p>
                </div>
              </Link>
            );
          })}
        </div>
        {/* ------------------- */}
        <div className="text-center mt-10">
          <Link
            href="/pdf-tools"
            type="button"
            className="text-white font-bold bg-blue-700 hover:bg-blue-800  rounded-lg text-md px-5 py-2.5 mb-2 focus:outline-none"
          >
            See All PDF Tools
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Popular_Tools;
