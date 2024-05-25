const Faster_Work = ({ data }) => {
  let { title, list } = data;

  return (
    <section className="max-w-screen-xl mx-auto py-12 sm:py-16 lg:py-20">
      <div className="mx-auto px-6">
        <h1 className="text-center text-3xl font-bold sm:text-4xl xl:text-5xl">
          {title}
        </h1>

        {/* ------------------- */}
        <div className="mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left ">
          {list?.map((item, index) => {
            return (
              <div className="p-6" key={index}>
                <img className="w-[80px]" src={item.img} alt={item.title} />
                <h2 className="pt-6 pb-2 font-bold text-xl">{item.title}</h2>
                <p className="font-light">{item.desc}</p>
              </div>
            );
          })}
        </div>
        {/* ------------- */}
      </div>
    </section>
  );
};

export default Faster_Work;
