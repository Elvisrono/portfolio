import frontendImg from '../../assets/images/covid19.png'
import backendImg from '../../assets/images/docapp.png'
import uiImg from '../../assets/images/ecommerse.png'
import appsImg from '../../assets/images/recipe.png'

const Process = () => {
    return ( 
        <section id="services" className='section '>
            <div className=" mx-auto container  lg:pt-4">
                <div className="text-center  ">
                    <h2 className="text-headingColor font-[800] text-[2.4rem] mb-5">
                        services 
                    </h2>
                    <p className="lg:max-w-[600px]  lg:mx-auto text-headingColor font-[500] text-[16px] leading-7">
                         I deliver quality products with effective communication and strong time management skills. Explore how my expertise can benefit your projects
                    </p>
                </div>

                <div className="  flex flex-col justify-center sm:py-12">
                    <div className="  w-full py-3 sm:max-w-xl sm:mx-auto sm:px-0">
                         <div className="  relative text-gray-700 antialiased text-sm font-semibold">
                            {/* ======= vertical line through the middle ======== */}
                            <div className="hidden absolute w-1 sm:block bg-teal-700 h-full left-1/2 transform
                             -translate-x-1/2"></div>

                             {/* ====== left card ======= */}
                             <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-up' data-aos-duration='1200' className="bg-white p-4 border border-gray-300  hover:border-accent rounded-[18px] group  cursor-pointer ease-in duration-150">
                                                <h3 className="text-teal-900 font-[700] mb-3  group-hover:font-[600] text-center lg:text-left text-2xl">Frontend Development</h3>

                                                <p className="text-[15px]">
                                                I create visually appealing websites with seamless user experiences to enhance your online presence
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure className="">
                                            <img src={frontendImg} alt="" />
                                        </figure>
                                    </div>
                                </div>
                             </div>

                             {/* ====== right card ===== */}

                             <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-up' data-aos-duration='1200' className="bg-white p-4 border border-gray-300  hover:border-accent rounded-[18px] group  cursor-pointer ease-in duration-150">
                                                <h3 className="text-teal-900 font-[700] mb-3  group-hover:font-[600] text-center lg:text-left text-2xl">Backend Development</h3>

                                                <p className="text-[15px] ">
                                                I design and implement efficient backend systems, ensuring seamless data management and smooth operations for your website or application
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    
                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure className="">
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>
                                </div>
                             </div>

                             
                             {/* ====== left card ======= */}
                             <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-up' data-aos-delay='50'  data-aos-duration='1300' className="bg-white p-4 border border-gray-300  hover:border-accent rounded-[18px] group  cursor-pointer ease-in duration-150">
                                                <h3 className="text-primaryColor font-[700] mb-3  group-hover:font-[600] text-center lg:text-left text-2xl">UI/UX</h3> 

                                                <p className="text-[15px]  ">
                                                 I create intuitive and visually appealing user experiences that captivate and engage your audience. Through thoughtful design and seamless interactions, I enhance the usability and aesthetics of your website or application.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure className="">
                                            <img src={uiImg} alt="" />
                                        </figure>
                                    </div>
                                    
                                </div>
                             </div>

                             {/* ====== right card ===== */}

                             <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">

                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                        <div 
                                            data-aos='fade-up'
                                            data-aos-delay='100'
                                            data-aos-duration='1400'
                                            className="bg-white p-4 border border-gray-300  hover:border-accent rounded-[18px] group  cursor-pointer ease-in duration-150">
                                            <h3 className="text-primaryColor font-[700] mb-3  group-hover:font-[600] text-center lg:text-left text-2xl">Cloud Development</h3>

                                            <p className="text-[15px]  ">
                                                I specialize in creating robust and user-friendly solutions that harness the power of the AWS cloud to deliver seamless experiences across devices. Whether it's designing serverless architectures, optimizing cloud infrastructure, or implementing cloud-native solutions, I ensure that your applications are well-prepared to meet the demands of today's digital landscape.
                                            </p>
                                        </div>

                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure className="">
                                            <img src={appsImg} alt="" /> 
                                        </figure>
                                    </div>
                                </div>
                             </div>

                             

                        </div> 
                    </div>
                </div>
                

            </div>
        </section>
     );
}
 
export default Process;