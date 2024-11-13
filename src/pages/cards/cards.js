import React, { useState, useEffect } from "react";
import { fetchcatnewsdata } from "../api/connection";
import Link from "next/link";

const Cards = () => {
  
  const [catNewsData, setCatNewsData] = useState([]);
  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [catNewsData] = await Promise.all([fetchcatnewsdata()]);
        setCatNewsData(catNewsData || []);
        console.log(catNewsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  
  const stripHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
};

// for word limits
const limitWords = (text, wordLimit) => {
    const wordsArray = text?.split(" ");
    if (wordsArray?.length > wordLimit) {
    }}
  return (

 {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 relative w-[1410px] h-[1400px] left-[10px]">
        {Object.keys(catNewsData).map((category, index) => (
          <div
            key={index}
            className="flex flex-col space-y-2 w-[330px] h-[700px] shadow-lg"
          >
            <h1 className="h-[40px] bg-[#dae8f8] rounded-[5px] font-semibold pt-[5px] pl-[5px]">
              {category.length > 20
                ? `${category.substring(0, 40)}...`
                : category}
            </h1>

            {catNewsData[category].map((article, articleIndex) => (
              <div key={articleIndex} className="flex flex-col space-y-2">
                <img
                  src={`https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/${article.photo}`}
                  className="h-[193px] w-[330px] mt-[5px]"
                  alt={article.title}
                />
                <span
                  className="h-[50px] w-[330px] text-center font-bold p-2"
                  dangerouslySetInnerHTML={{
                    __html:
                      article.title.length > 50
                        ? `${article.title.substring(0, 70)}...`
                        : article.title,
                  }}
                ></span>

                <span
                  className="h-[30px] w-[330px] text-center font-normal text-gray-600 text-[15px] relative top-[10px]"
                  dangerouslySetInnerHTML={{
                    __html:
                      article.post.substring(0, 100) +
                      (article.post.length > 100 ? "..." : ""),
                  }}
                ></span>

                <span className=" h-[20px] w-[330px] relative top-[35px] text-center text-[15px] font-semibold text-gray-700">
                  {new Date(article.published_date).toLocaleDateString()}
                </span>
                <div className="w-[330px] h-[1px] bg-gray-300 flex relative top-[25px]"></div>
                <ul className="flex flex-col list-none pl-4 space-y-1 relative top-[20px] right-[20px]">
                  {article.additional_posts &&
                    article.additional_posts.map((post, postIndex) => (
                      <li
                        key={postIndex}
                        className="w-[330px] flex items-start border-b-[1px] border-gray-300"
                      >
                        <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />

                        <div className="flex flex-col">
                         
                          {post.photo && (
                            <img
                              src={`/path/to/images/${post.photo}`} // Update with the correct path to your images
                              alt={post.title} // Use the post title as the alt text for accessibility
                              className="w-[100%] h-auto object-cover mb-2" // Adjust the size as needed
                            />
                          )}

                         
                          <span className="text-[15px] flex relative top-[15px]">
                            {post.title}
                          </span>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div> */}
// <div className="flex flex-col space-y-2 w-[330px] h-[700px] shadow-lg">
// <h1 className="h-[40px] bg-[#dae8f8] rounded-[5px] font-semibold pt-[5px] pl-[5px]">
//   Defence & Diplomacy
// </h1>
// <img
//   src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1727943265.jpg"
//   className="h-[193px] w-[330px] mt-[5px] "
// />
// <span className="h-[50px] w-[330px] text-center font-bold p-2">
//   UN Fears Repeat of 2017 Atrocities Against Rohingyas
// </span>
// <span className="h-[30px] w-[330px] text-center font-normal text-gray-600 text-[15px] relative top-[10px]">
//   The United Nations has said that it fears a repeat of the 2017
//   atrocities committed against the Rohingya...
// </span>
// <span className="h-[20px] w-[330px] relative top-[35px] text-center text-[15px] font-semibold text-gray-700">
//   August 28, 2024
// </span>
// <div className="w-[330px] h-[1px] bg-gray-300 flex relative top-[35px]"></div>

// <ul className="flex flex-col list-none pl-4 space-y-1 relative top-[20px] right-[20px]">
//   <li className="w-[330px] flex items-start border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px] ">
//       Army donates one day's salary to relief fund
//     </span>
//   </li>
//   <li className="w-[330px] flex h-[80px] items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Army deployed in 6 districts to rescue flood...
//     </span>
//   </li>
//   <li className="w-[330px] h-[80px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Pentagon to work with Bangladesh on shared interests
//     </span>
//   </li>
//   <li className="w-[330px] h-[70px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       ICT begins probe against Bangladesh's ousted PM Hasina,...
//     </span>
//   </li>
// </ul>
// </div>
// <div className="flex flex-col space-y-2 w-[330px] h-[700px] shadow-lg">
// <h1 className="h-[40px] bg-[#dae8f8] rounded-[5px] font-semibold pt-[5px] pl-[5px]">
//   Geopolitics
// </h1>
// <img
//   src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1727942555.jpg"
//   className="h-[193px] w-[330px] mt-[5px] "
// />
// <span className="h-[50px] w-[330px] text-center font-bold p-2">
//   India hosting first multi-nation air combat drills considered...
// </span>
// <span className="h-[30px]  text-center font-normal text-gray-600 text-[15px] relative top-[10px]">
//   The first multi-nation air combat exercises hosted by India took off
//   at Sulur in Tamil Nadu on August...
// </span>
// <span className="h-[20px] w-[330px] relative top-[40px] text-center text-[15px] font-semibold text-gray-700">
//   August 28, 2024
// </span>
// <div className="w-[330px] h-[1px] bg-gray-300 flex relative top-[40px]"></div>

// <ul className="flex flex-col list-none pl-4 space-y-1 relative top-[30px] right-[20px]">
//   <li className="w-[330px] flex items-start border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px] ">
//       7th Fleet Destroyer Transits Taiwan Strait...
//     </span>
//   </li>
//   <li className="w-[330px] flex h-[80px] items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Major reshuffle in Bangladesh Army, General Zia sacked...
//     </span>
//   </li>
//   <li className="w-[330px] h-[70px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Around 650 killed from july 16 to Aug...
//     </span>
//   </li>
//   <li className="w-[330px] h-[70px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[5px]">
//       Erdogan calls for Islamic alliance against growing threat...
//     </span>
//   </li>
// </ul>
// </div>
// <div className="flex flex-col space-y-2 w-[330px] h-[700px] shadow-lg">
// <h1 className="h-[40px] bg-[#dae8f8] rounded-[5px] font-semibold pt-[5px] pl-[5px]">
//   National
// </h1>
// <img
//   src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1727942423.jpg"
//   className="h-[193px] w-[330px] mt-[5px] "
// />
// <span className="h-[50px] w-[330px] text-center font-bold p-2">
//   Turkish fighter jet KAAN featured in Chinese military...
// </span>
// <span className="h-[30px] w-[330px] text-center font-normal text-gray-600 text-[15px] relative top-[10px]">
//   Türkiye’s ambitious defense project, the National Combat Aircraft
//   KAAN, which garnered considerable attention in global media was
//   recently...
// </span>
// <span className="h-[20px] w-[330px] relative top-[60px] text-center text-[15px] font-semibold text-gray-700">
//   August 28, 2024
// </span>
// <div className="w-[330px] h-[1px] bg-gray-300 flex relative top-[55px]"></div>

// <ul className="flex flex-col list-none pl-4 space-y-1 relative top-[40px] right-[20px]">
//   <li className="w-[330px] h-[70px] flex items-start border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px] ">
//       `No foreign missions personnel currently staying cantonments`
//     </span>
//   </li>
//   <li className="w-[330px] flex h-[50px] items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Bangladesh Army seals Hasina's fate
//     </span>
//   </li>
//   <li className="w-[330px] h-[70px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Army chief briefs president on various activities{" "}
//     </span>
//   </li>
//   <li className="w-[330px] h-[70px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Who is Pakistan's new spy Chief Asim Malik?...
//     </span>
//   </li>
// </ul>
// </div>
// <div className="flex flex-col space-y-2 w-[330px] h-[700px] shadow-lg">
// <h1 className="h-[40px] bg-[#dae8f8] rounded-[5px] font-semibold pt-[5px] pl-[5px]">
//   Opinion
// </h1>
// <img
//   src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1727942423.jpg"
//   className="h-[193px] w-[330px] mt-[5px] "
// />
// <span className="h-[50px] w-[330px] text-center font-bold p-2">
//  Us announces new round of military assistance for...
// </span>
// <span className="h-[30px] w-[330px] text-center font-normal text-gray-600 text-[15px] relative top-[10px]">
// The United States has announced a new round of military assistance to Ukraine, following a phone call between......
// </span>
// <span className="h-[20px] w-[330px] relative top-[60px] text-center text-[15px] font-semibold text-gray-700">
//   August 28, 2024
// </span>
// <div className="w-[330px] h-[1px] bg-gray-300 flex relative top-[55px]"></div>

// <ul className="flex flex-col list-none pl-4 space-y-1 relative top-[40px] right-[20px]">
//   <li className="w-[330px] h-[70px] flex items-start border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px] ">
//       Gaza ceasefire talks in Cairo continue to iron...
//     </span>
//   </li>
//   <li className="w-[330px] flex h-[70px] items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//      Army clarifies why it sheltered AL ministers, MPs
//     </span>
//   </li>
//   <li className="w-[330px] h-[70px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//      Zhang Youxia stresses China-US military stabiliy in meeting...
//     </span>
//   </li>
//   <li className="w-[330px] h-[60px] flex items-start  border-b-[1px] border-gray-300">
//     <span className="before:content-['•'] before:text-red-500 before:text-[30px] before:mr-2 inline-block w-[30px] mt-1" />
//     <span className="text-[15px] flex relative top-[15px]">
//       Reinvestigation into BDR carnage soon...
//     </span>
//   </li>
// </ul>
// </div>
  )}