import React, { useEffect, useState } from "react";
import Link from "next/link";
import { fetchtopnavbarData } from "../api/connection";

const Nav = () => {
  const [newsData, setNewsData] = useState([]);
  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchtopnavbarData();
        setNewsData(fetchedData || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {newsData.length > 0 ? (
        <div className="flex flex-row relative items-center w-[1434px] mt-[20px]">
          <div>
            <img
              src="https://bangladeshdefencevoice.com/frontend/assets/Logo/logo4.png"
              className="w-[250px] h-[100px]"
              alt="Logo"
            />
          </div>

          <div className="flex items-center relative left-[325px] w-[268px] h-[100px] ">
            {newsData.map((item) => (
              <div key={item.id} className="flex items-center space-x-4 mb-4">
                <img
                  src={`${imgUrl}${item.photo}`}
                  className="h-[50px] w-[70px]"
                  alt={item.title}
                />
                <span className="text-[13px] w-[270px] font-semibold">
                  <div className="flex items-start">
                    <img
                      src="/cameraicon.svg"
                      className="w-[20px] h-[20px] mr-[8px]"
                      alt="Camera Icon"
                    />
                    <span>{item.title}</span>
                  </div>
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between relative right-[510px] top-[100px]">
            <nav className="flex flex-row space-x-4 text-[20px]">
              <Link href="#">Home</Link>
              <Link href="#">Defence & Diplomacy</Link>
              <Link href="#">Geopolitics</Link>
              <Link href="#">National</Link>
              <Link href="#">Opinion</Link>
              <Link href="#">Contact us</Link>

              <div className="flex items-center relative left-[700px]">
                <img
                  src="/usericon.svg"
                  alt="Logo"
                  className="h-[25px] pr-[5px]"
                />
                <button className="btn-login">Login</button>
              </div>
            </nav>
          </div>
        </div>
      ) : (
        <p>Loading Top news data</p>
      )}
    </>
  );
};

export default Nav;




// import React from "react";
// import Link from "next/link";

// const Nav = () => {
//   return (
//     <>
//       <div className="flex flex-row relative  items-center w-[1434px] mt-[20px] ">
//         <div>
//           <img
//             src="http://localhost:5173/src/assets/logo4.png"
//             className="w-[250px] h-[100px]"
//           />
//         </div>

//         <div
//           className="flex items-center relative left-[295px] w-[268px] h-[100px] 
//        "
//         >
//           {" "}
//           <div className="flex items-center relative right-[20px] ">
//             <img
//               src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1729656969.jpg"
//               className="h-[50px] w-[70px] flex relative right-[0px]"
//             />

//             <span className="text-[13px] w-[280px] flex flex-col relative left-[20px] font-semibold">
//               <div className="flex items-start">
//                 <img
//                   src="/cameraicon.svg"
//                   className="w-[20px] h-[20px] mr-[8px]"
//                 />
//                 <span>Netanyahu's home targeted</span>
//               </div>
//               <span>
//                 by drone launched from Lebanon, <br />
//                 says office.
//               </span>
//             </span>
//           </div>
//           <div className="flex items-center relative left-[10px] w-[268px] h-[100px]">
//             <img
//               src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1729656864.jpg"
//               className="h-[50px] w-[70px]"
//             />

//             <span className="text-[13px] w-[270px] flex flex-col relative left-[20px] font-semibold">
//               <div className="flex items-start">
//                 <img
//                   src="/cameraicon.svg"
//                   className="w-[20px] h-[20px] mr-[8px]"
//                 />
//                 <span> US deploys Thaad anti-</span>
//               </div>
//               <span>missile system to Israel after Iranian attack</span>
//             </span>
//           </div>
//           <div className="flex items-center relative left-[30px] w-[268px] h-[100px] font-semibold">
//             <img
//               src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1729656794.jpg"
//               className="h-[50px] w-[70px]"
//             />

//             <span className="text-[13px] w-[270px] flex flex-col relative left-[20px]">
//               <div className="flex items-start">
//                 <img
//                   src="/cameraicon.svg"
//                   className="w-[20px] h-[20px] mr-[8px]"
//                 />
//                 <span> Pakistan, US navies conduct </span>
//               </div>
//               <span>bilateral exercise to 'enhance' interoperability</span>
//             </span>
//           </div>
//         </div>
//       </div>

//       <div className="flex flex-col justify-between relative top-[50px]">
//         <nav className="flex flex-row space-x-4  text-[20px] ">
//           <Link href="#">Home</Link>
//           <Link href="#">Defence & Diplomacy</Link>
//           <Link href="#">Geopolitics</Link>
//           <Link href="#">National</Link>
//           <Link href="#">Opinion</Link>
//           <Link href="#">Contact us</Link>

//           <div className="flex items-center relative left-[700px]  ">
//             <img src="/usericon.svg" alt="Logo" className="h-[25px] pr-[5px]" />
//             <button className="btn-login">Login</button>
//           </div>
//         </nav>
//       </div>
//     </>
//   );
// };
// export default Nav;
