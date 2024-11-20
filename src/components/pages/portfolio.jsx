import data from "../../assets/data/PortfolioData"
import {useState, useEffect} from "react"
import Modal from "./Modal"


const Portfolio = () => {

    const [nextItems, setNextItems] = useState(6)
    const [portfolios, setPortfolios] = useState(data)
    const [selectTab, setSelectTab] = useState("all")
    const [showModal, setShowModal] = useState(false)
    const [activeID, setActiveID] = useState(null)
 
    const loadMoreHandler = () => {
        setNextItems(prev => prev + 3)
    }
     
    const showModalHandler = id => {
        setShowModal(true)
        setActiveID(id)
    }

    useEffect(() =>{


        if(selectTab ==='all'){
            setPortfolios(data)
        }

        if(selectTab ==='web-design'){
            const filteredData = data.filter(item => item.category==='Web Design')
            setPortfolios(filteredData)
        }

        if(selectTab ==='ux-design'){
            const filteredData = data.filter(item => item.category==='Ux')
            setPortfolios(filteredData)
        }
    }, [selectTab])



    return <section className="bg-purpe-700 pb-20" id="portfolio">
        <div className="container bg-geen-700 p-10 ">

            <div className="flex items-center justify-center flex-wrap">
                <div className="mb-7 sm:mb-0">
                    <h3 className="text-headingColor text-[2rem] font-[700]">
                        My recent projects
                    </h3>
                </div>

            </div>

            <div className="flex items-center gap-4 flex-wrap mt-12 ">
                {
                    portfolios?.slice(0, nextItems)?.map((portfolio,index) => (
                        <div key={index} data-aos='fade-zoom-in' data-aos-delay='50' data-aos-duration='1000' className=" group max-w-full sm:w-[48.5%] md:w-[31/8%] lg:w-[32.2%] relative z-[1]">
                            <figure>
                                <img className="rounded-[8px] shadow-md" src={portfolio.imgUrl} alt="" />
                            </figure>

                            <div className="w-full h-full bg-primaryColor bg-opacity-60 absolute top-0 left-0 z-[5] hidden group-hover:block">
                                <div className="w-full h-full flex items-center justify-center">
                                    <button onClick={() => showModalHandler(portfolio.id)} 
                                    className="text-white bg-headingColor hover:bg-smallColor py-2 px-4 rounded-[8px] font-[500] ease-in duration-200">See Details</button>
                                </div>
                            </div>
                        </div>
                ))}
            </div>

          
        </div>

        {
          showModal   && <Modal  setShowModal={setShowModal} activeID={activeID}/>
        }
    </section>
}
 
export default Portfolio;