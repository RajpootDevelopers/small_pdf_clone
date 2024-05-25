import Link from "next/link";

const Tools = () => {
    const All_tools = [
        {
            image: "/tools/compress-pdf.svg",
            title: "Compress PDF",
            description: "Reduce the size of your PDF without losing quality",
        },
        {
            image: "/tools/pdf-converter.svg",
            title: "PDF Converter",
            description: "Convert Word, PowerPoint and Excel files to and from PDF",
        },
        {
            image: "/tools/pdf-ocr.svg",
            title: "PDF OCR",
            description: "Make text in scans searchable",
        },
        {
            image: "/tools/pdf-to-ppt-to-pdf.svg",
            title: "PPT to PDF",
            description: "Convert PowerPoint presentations to PDF documents",
        },
        {
            image: "/tools/pdf-to-ppt-to-pdf.svg",
            title: "PDF to PPT",
            description: "Convert PDFs to editable PowerPoint presentations",
        },
        {
            image: "/tools/pdf-to-jpg-to-pdf.svg",
            title: "JPG to PDF",
            description: "Transform JPG, PNG, BMP, GIF, and TIFF images to PDF",
        },
        {
            image: "/tools/pdf-to-jpg-to-pdf.svg",
            title: "PDF to JPG",
            description: "Extract images from your PDF or save each page as a separate image",
        },
        {
            image: "/tools/pdf-to-excel-to-pdf.svg",
            title: "PDF to Excel",
            description: "Convert PDFs to editable Excel spreadsheets",
        },
        {
            image: "/tools/pdf-to-excel-to-pdf.svg",
            title: "Excel to PDF",
            description: "Convert Excel spreadsheets to PDF documents",
        },
        {
            image: "/tools/pdf-to-word-to-pdf.svg",
            title: "Word to PDF",
            description: "Convert Word documents to PDF files",
        },
        {
            image: "/tools/pdf-to-word-to-pdf.svg",
            title: "PDF to Word",
            description: "Convert PDFs to editable Word documents",
        },

        {
            image: "/tools/edit-pdf.svg",
            title: "Edit PDF",
            description: "Add text, shapes, images and freehand annotations to your PDF",
        },
        {
            image: "/tools/pdf-reader.svg",
            title: "PDF Reader",
            description: "Display, print, and share PDFs online",
        },
        {
            image: "/tools/number-pages.svg",
            title: "Number Pages",
            description: "Insert page numbers in PDF with ease",
        },
        {
            image: "/tools/ai-pdf-summarizer.svg",
            title: "AI Summarizer",
            description: "Summarize or chat with your PDF using AI",
        },

        {
            image: "/tools/delete-pdf-pages.svg",
            title: "Delete Pages",
            description: "Remove one or multiple pages from your PDF",
        },
        {
            image: "/tools/extract-pdf-pages.svg",
            title: "Extract Pages",
            description: "Pick only the pages you need from a PDF",
        },
        {
            image: "/tools/rotate-pdf.svg",
            title: "Rotate PDF",
            description: "Rotate one or all pages in your PDF",
        },
        {
            image: "/tools/merge-pdf.svg",
            title: "Merge PDF",
            description: "Combine multiple PDFs into one unified document",
        },
        {
            image: "/tools/split-pdf.svg",
            title: "Split PDF",
            description: "Extract pages from your PDF or save each page as a separate PDF",
        },

        {
            image: "/tools/esign-pdf.svg",
            title: "eSign PDF",
            description: "Create your signature, sign your PDF and request people to sign",
        },
        {
            image: "/tools/unlock-pdf.svg",
            title: "Unlock PDF",
            description: "Remove password, encryption, and permission from your PDF",
        },
        {
            image: "/tools/protect-pdf.svg",
            title: "Protect PDF",
            description: "Add a password and encrypt your PDF file",
        },
        {
            image: "/tools/flatten-pdf.svg",
            title: "Flatten PDF",
            description: "Make your PDF uneditable",
        },

        {
            image: "/tools/pdf-scanner.svg",
            title: "PDF Scanner",
            description: "Create PDFs from scans on your mobile",
        },

    ];
    return (
        <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20">
            <div className="mx-auto px-6">
                <div className="text-center ">
                    <h2 className="text-3xl font-bold sm:text-5xl xl:text-6xl">
                        All Smallpdf Tools
                    </h2>

                    <p className="text-center max-w-xl mt-4 sm:pb-8 mx-auto text-lg">
                        Make use of our collection of PDF tools to process digital documents and streamline your workflow seamlessly.
                    </p>
                </div>
                {/* ------------------- */}
                <div className="mx-auto mt-10 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6  ">
                    {All_tools.map((item, index) => {
                        return (
                            <Link
                                key={index}
                                href={"/tool/" + item.title.split(" ").join("-")}
                                className="flex items-start backdrop-blur-lg rounded bg-white/70 p-4 lg:p-4 hover:bg-gray-100 border shadow"
                            >
                                <img className="w-8  me-3" src={item.image} alt="ertyu" />
                                <div className="w-full">
                                    <div className="font-bold flex">
                                        <span className="">{item.title}</span>
                                        <div className="w-[20px] h-[20px] overflow-hidden ms-auto">
                                            <svg
                                                className=""
                                                xmlns="http://www.w3.org/2000/svg"
                                                width="100%"
                                                height="100%"
                                            >
                                                <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="mt-1 text-gray-700 text-sm  max-w-[80%]">{item.description}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </section>
    )
}

export default Tools