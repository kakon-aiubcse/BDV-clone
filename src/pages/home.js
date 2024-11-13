import React from "react";
import dynamic from "next/dynamic";


const Home = () => {
  const FaFacebookF = dynamic(() => import('react-icons/fa').then(mod => mod.FaFacebookF), { ssr: false });
const FaXTwitter = dynamic(() => import('react-icons/fa').then(mod => mod.FaTwitter), { ssr: false });
const FaInstagram = dynamic(() => import('react-icons/fa').then(mod => mod.FaInstagram), { ssr: false });
const FaMediumM = dynamic(() => import('react-icons/fa').then(mod => mod.FaMediumM), { ssr: false });
const CiLinkedin = dynamic(() => import('react-icons/ci').then(mod => mod.CiLinkedin), { ssr: false });
const BsQuora = dynamic(() => import('react-icons/bs').then(mod => mod.BsQuora), { ssr: false });

  return (
    <>
      <div className=" flex flex-row w-[1415px] h-[652px] space-x-2 border-b-4 border-black">
        <div className="flex-1  w-[695px] h-[637px]">
          <img
            src="https://bangladeshdefencevoice.com/uploads/news/1731298445.png"
            className="w-[694px] h-[399px]"
          />
          <span className="flex relative w-[213px] h-[19px] text-[15px] leading-[20px]">
            By{" "}
            <span className="font-semibold ml-[3px]">
              {" "}
              Corresponedent diplomatic
            </span>
          </span>
          <span className="w-[710px] h-[205px] text-[25px] font-[600] flex relative top-[5px] hover:text-red-500">
            Army chief General Waker-Uz-Zaman has said people from all religions
            including Muslims, Hindus, Buddhists and Christians want to build a
            beautiful Bangladesh He said, “Together all religions, races and
            communities want to build a Muslim, Hindu, Buddhist, Christian, all
            want to build a beautiful Bangladesh: Army chief
          </span>
        </div>

        <div className="flex-2 space-y-6 w-[340px] h-[631px] border-t-4 border-black">
          <span className="w-[331px] h-[125px] flex relative flex-col top-[29px] items-baseline border-b-[1px] border-gray-200">
            <span className="text-[19px] w-[314px] flex flex-col relative  font-semibold">
              <div className="flex items-start">
                <img
                  src="/rightarrow.svg"
                  className="w-[20px] h-[20px] mr-[8px]"
                />
                <span className="flex relative top-[-3px] font-[700]">
                  {" "}
                  Bangladesh seeks more defense cooperation from China:<br/>
                  diplomatic Corresponedent
                </span>
              </div>
            </span>
            <span >
              <a href="#"
              className="text-blue-500 mr-2"> Opinion</a> / <span className="relative left-[10px]">October 3, 2024</span>
            </span>
          </span>
          <span className="w-[331px] h-[125px] flex relative flex-col top-[29px] items-baseline  border-b-[1px] border-gray-200">
            <span className="text-[19px] w-[314px] flex flex-col relative  font-semibold">
              <div className="flex items-start">
                <img
                  src="/rightarrow.svg"
                  className="w-[20px] h-[20px] mr-[8px]"
                />
                <span className="flex relative top-[-3px] font-[700]">
                  {" "}
                 Two new three-star generals in army, DGFI gets new Director General : Staff Reporter
                </span>
              </div>
            </span>
            <span >
              <a href="#"
              className="text-blue-500 mr-2"> Defence & Diplomacy</a> / <span className="relative left-[10px]">October 3, 2024</span>
            </span>
          </span>
          <span className="w-[331px] h-[125px] flex relative flex-col top-[29px] items-baseline  border-b-[1px] border-gray-200">
            <span className="text-[19px] w-[314px] flex flex-col relative  font-semibold">
              <div className="flex items-start">
                <img
                  src="/rightarrow.svg"
                  className="w-[20px] h-[20px] mr-[8px]"
                />
                <span className="flex relative top-[-3px] font-[700]">
                  {" "}
            Army chief leaves for Us, Canada on a 10-day-visit: Staff Reporter
                </span>
              </div>
            </span>
            <span >
              <a href="#"
              className="text-blue-500 mr-2"> Geopolitics</a> / <span className="relative left-[10px]">October 3, 2024</span>
            </span>
        </span>
        <span className="w-[331px] h-[125px] flex relative flex-col top-[29px] items-baseline  border-b-[1px] border-gray-200">
            <span className="text-[19px] w-[314px] flex flex-col relative  font-semibold">
              <div className="flex items-start">
                <img
                  src="/rightarrow.svg"
                  className="w-[20px] h-[20px] mr-[8px]"
                />
                <span className="flex relative top-[-3px] font-[700]">
                  {" "}
                 Chiefs of three services visit Ramna Kali Temple: Staff Reporter
                </span>
              </div>
            </span>
            <span >
              <a href="#"
              className="text-blue-500 mr-2"> National</a> / <span className="relative left-[10px]">October 3, 2024</span>
            </span>
          </span>
        </div>
        
        <div className="flex-3 bg-[#F1F5F9] w-[340px] h-[558px]">


        <div className='flex-1  '>
                    <div className=' p-[32px]'>
                        <div>
                            <h2 className='text-lg text-black font-bold text-center'>
                                Your Trusted Source for Accurate and Timely Updates!
                            </h2>
                            <p className='my-[20px] text-[18px] text-center italic'>
                                Our commitment to accuracy, impartiality, and delivering breaking
                                news as it happens has earned us the trust of a vast audience. Stay
                                ahead with real-time updates on the latest events, trends.

                            </p>

                            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3  gap-[6px]'>
                                <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                                    <FaFacebookF className="mx-auto w-full" />
                                    <h6 className=''>Facebook</h6>
                                </div>
                                <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                                    <FaXTwitter className="mx-auto w-full" />
                                    <h6>Twitter</h6>
                                </div>
                                <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                                    <FaInstagram className="mx-auto w-full" />
                                    <h6 className=''>Insta</h6>
                                </div>
                                <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                                    <CiLinkedin className="mx-auto w-full " />
                                    <h6>LinkedIn</h6>
                                </div>
                                <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                                    <FaMediumM className="mx-auto w-full" />
                                    <h6>Medium</h6>
                                </div>
                                <div className="hover:bg-black text-center border text-sm px-[16px] py-[24px] text-black hover:text-white duration-300 transform hover:-translate-y-1 font-semibold">
                                    <BsQuora className="mx-auto w-full" />
                                    <h6>Quora</h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>


        </div>
      </div>
    </>
  );
};
export default Home;
