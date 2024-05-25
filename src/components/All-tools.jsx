import Link from "next/link";

const All_Tools = () => {
  const Convert_and_Compress = [
    {
      text: "Compress PDF",
      image: "/tools/compress-pdf.svg",
      bg: "Convert_and_Compress",
    },
    {
      text: "PDF Converter",
      image: "/tools/pdf-converter.svg",
      bg: "Convert_and_Compress",
    },
    {
      text: "PDF Scanner",
      image: "/tools/pdf-scanner.svg",
      bg: "Convert_and_Compress",
    },
  ];

  const Organize = [
    {
      text: "Merge PDF",
      image: "/tools/merge-pdf.svg",
      bg: "Organize",
    },
    {
      text: "Split PDF",
      image: "/tools/split-pdf.svg",
      bg: "Organize",
    },
    {
      text: "Rotate PDF",
      image: "/tools/rotate-pdf.svg",
      bg: "Organize",
    },
    {
      text: "Delete Pages",
      image: "/tools/delete-pdf-pages.svg",
      bg: "Organize",
    },
    {
      text: "Extract Pages",
      image: "/tools/extract-pdf-pages.svg",
      bg: "Organize",
    },
  ];

  const View_and_Edit = [
    {
      text: "Edit PDF",
      image: "/tools/edit-pdf.svg",
      bg: "View_and_Edit",
    },
    {
      text: "PDF Reader",
      image: "/tools/pdf-reader.svg",
      bg: "View_and_Edit",
    },
    {
      text: "Number Pages",
      image: "/tools/number-pages.svg",
      bg: "View_and_Edit",
    },
    {
      text: "AI Summarizer",
      image: "/tools/ai-pdf-summarizer.svg",
      bg: "View_and_Edit",
    },
  ];

  const Convert_PDF = [
    {
      text: "PDF to Word",
      image: "/tools/pdf-to-word-to-pdf.svg",
      bg: "Convert_PDF",
    },
    {
      text: "PDF to Excel",
      image: "/tools/pdf-to-excel-to-pdf.svg",
      bg: "Convert_PDF",
    },
    {
      text: "PDF to PPT",
      image: "/tools/pdf-to-ppt-to-pdf.svg",
      bg: "Convert_PDF",
    },
    {
      text: "PDF to JPG",
      image: "/tools/pdf-to-jpg-to-pdf.svg",
      bg: "Convert_PDF",
    },
  ];

  const Sign_and_Security = [
    {
      text: "eSign PDF",
      image: "/tools/esign-pdf.svg",
      bg: "Sign_and_Security",
    },
    {
      text: "Unlock PDF",
      image: "/tools/unlock-pdf.svg",
      bg: "Sign_and_Security",
    },
    {
      text: "Protect PDF",
      image: "/tools/protect-pdf.svg",
      bg: "Sign_and_Security",
    },
    {
      text: "Flatten PDF",
      image: "/tools/flatten-pdf.svg",
      bg: "Sign_and_Security",
    },
  ];

  return (
    <div className="bg-white mx-auto grid max-w-screen-xl gap-2 px-4 py-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 xl:px-10">
      {/* Convert & Compress */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Convert & Compress</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Convert_and_Compress.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.bg} hover:text-white hover:font-semibold rounded `}
                >
                  <Link
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text.split(" ").join("-")}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Organize */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Organize</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Organize.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.bg} hover:text-white hover:font-semibold rounded `}
                >
                  <Link
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text.split(" ").join("-")}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* View & Edit */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">View & Edit</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {View_and_Edit.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.bg} hover:text-white hover:font-semibold rounded `}
                >
                  <Link
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text.split(" ").join("-")}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Convert from PDF */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Convert from PDF</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Convert_PDF.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.bg} hover:text-white hover:font-semibold rounded `}
                >
                  <Link
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text.split(" ").join("-")}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Convert to PDF */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Convert to PDF</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Convert_PDF.concat({
              text: "PDF OCR",
              image: "/tools/pdf-ocr.svg",
              bg: "Convert_and_Compress",
            }).map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.bg} hover:text-white hover:font-semibold rounded `}
                >
                  <Link
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text.split(" ").reverse().join("-")}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text.split(" ").reverse().join(" ")}
                    />
                    {item.text.split(" ").reverse().join(" ")}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      {/* Sign & Security */}
      <div>
        <h2 className="mt-4 mb-2 font-medium xl:mb-4 ">Sign & Security</h2>
        <div className="text-gray-500">
          <ul className="space-y-3">
            {Sign_and_Security.map((item, index) => {
              return (
                <li
                  key={index}
                  className={`${item.bg} hover:text-white hover:font-semibold rounded `}
                >
                  <Link
                    className="flex w-[100%]  px-2 py-1"
                    href={"/tool/" + item.text.split(" ").join("-")}
                  >
                    <img
                      className="w-[25px] me-2"
                      src={item.image}
                      alt={item.text}
                    />
                    {item.text}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* ---------------- */}
    </div>
  );
};

export default All_Tools;
