import portfolios from "../../assets/data/PortfolioData";

const Modal = ({ activeID, setShowModal }) => {
  const portfolio = portfolios.find((portfolio) => portfolio.id === activeID);

  return (
    <div className="w-full bg-red-500 h-3/4 fixed top-0 left-0 z-10  bg-opacity-0 ">
      <div className=" md:max-w-[600px] md:w-full sm:w-full bg-headingColor w-5/6 absolute top-1/2  left-1/2 z-20  rounded-[8px] transform -translate-x-1/2 -translate-y-1/4 p-5">
        <div>
          <figure>
            <img className="rounded-[8px]" src={portfolio.imgUrl} alt="" />
          </figure>
        </div>

        <div>
          <h2 className="text-2xl text-headingColor font-[700] my-5">
            {portfolio.title}
          </h2>

          <p className="text-[15px]  leadin-7 text-smallTextColor">
            {portfolio.description}
          </p>

          <div className="mt-5 flex items-center gap-3 flex-wrap">
            <h4 className="text-headingColor text-[18px] text-[700]">
              Technologies:
            </h4>

            {portfolio.technologies.map((item, index) => (
              <span
                key={index}
                className="bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0 "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
        <div className=" ">
          <a href={portfolio.slideDeckUrl} target="_blank">
            <button className="bg-primaryColor text-white py-2 px-4 my-8 mr-10 rounded-[8px] font-[500] hover:bg-headingColor ease-in  duration-300">
              slide deck
            </button>
          </a>

          <a href={portfolio.videoPresentationUrl} target="_blank">
            <button className="bg-primaryColor text-white py-2 px-4 my-8  rounded-[8px] font-[500] hover:bg-headingColor ease-in  duration-300">
              video presentation
            </button>
          </a>

          <button
            onClick={() => setShowModal(false)}
            className="bg-primaryColor rounded-[8px] text-white py-2 px-4  absolute bottom-[3.4rem] hover:bg-headingColor right-[1.7rem] ease-in duration-300 text-[15px] flex items-center justify-center  leading-0 cursor-pointer "
          >
            close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
