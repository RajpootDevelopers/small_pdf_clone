import React from "react";

const Why_Choose = () => {
  const whyChoose = [
    {
      image: "https://s.smallpdf.com/static/fab0b222d02f8d15.svg",
      title: "People Trust Us",
      description:
        "Over a billion users have used our service to simplify their work with digital documents.",
    },
    {
      image: "https://s.smallpdf.com/static/84121b568dbdb86e.svg",
      title: "Businesses Trust Us",
      description:
        "We’re one of the highest-rated PDF software on major B2B software listing platforms: Capterra, G2, and TrustPilot.",
    },
    {
      image: "https://s.smallpdf.com/static/bb9d0a11fb7606ac.svg",
      title: "Our Partners Trust Us",
      description:
        "Unlock bonus features with the Smallpdf Chrome Extension, Google Workspace, and Dropbox App—all free to use.",
    },
    {
      image: "https://s.smallpdf.com/static/6307d219b9e3c9aa.svg",
      title: "24/7 Customer Support",
      description:
        "Get all the help you need with our round-the-clock customer support.",
    },
    {
      image: "https://s.smallpdf.com/static/e12bb76d471da4cc.svg",
      title: "256-Bit TLS Encryption",
      description:
        "We use 256-bit TLS encryption for secure information transfer.",
    },
    {
      image: "https://s.smallpdf.com/static/0b212f4e700cc9a5.png",
      title: "Security Standards",
      description:
        "Your safety is our priority. Smallpdf is ISO/IEC 27001 certified and GDPR, CCPA, and nFADP compliant.",
    },
  ];
  return (
    <section className="max-w-screen-xl mx-auto py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-6">
        <h1 className="text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
          Why Choose Smallpdf?
        </h1>

        {/* ------------------- */}
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left ">
          {whyChoose.map((item, index) => {
            return (
              <div className="p-6" key={index}>
                <img className="w-[80px]" src={item.image} alt={item.title} />
                <h2 className="pt-6 pb-2 font-bold text-xl">{item.title}</h2>
                <p className="font-light">{item.description}</p>
              </div>
            );
          })}
        </div>
        {/* ------------- */}
      </div>
    </section>
  );
};

export default Why_Choose;
