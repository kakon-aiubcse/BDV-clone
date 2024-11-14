// import React, { useEffect, useState } from 'react';
// import Link from 'next/link';
// import { FaRegBookmark } from 'react-icons/fa';
// import { fetchcategoryNews } from '../api/connection';

// const Category_news = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [categoryNews, setCategoryNews] = useState([]);
//   const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setIsLoading(true);
//         const data = await fetchcategoryNews(); 
//         setCategoryNews(data || []); 
//       } catch (error) {
//         console.error("Error fetching data:", error);
//         setError(error);
//       } finally {
//         setIsLoading(false); 
//       }
//     };
//     console.log(categoryNews)

//     fetchData();
//   }, []);

//   const stripHtml = (html) => {
//     const div = document.createElement("div");
//     div.innerHTML = html;
//     return div.textContent || div.innerText || "";
//   };

//   const limitWords = (text, wordLimit) => {
//     const wordsArray = text?.split(" ");
//     if (wordsArray?.length > wordLimit) {
//       return wordsArray.slice(0, wordLimit).join(" ") + "...";
//     }
//     return text;
//   };

//   const openModal = () => {
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   const handleModalClick = (e) => {
//     if (e.target === e.currentTarget) {
//       closeModal();
//     }
//   };

//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   return (
//     <div>
//       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
//         {categoryNews.data.length > 0 ? (
//           categoryNews.data.map((item) => (
//             <Link href={`/news/newsDetails/${item.id}`} key={item.id} className='bg-white px-[16px] pb-[8px] border-r'>
//               <div className='w-full h-[208px] overflow-hidden'>
//                 <img
//                   src={`${imgUrl}${item?.photo}`}
//                   onClick={openModal}
//                   alt="Category News"
//                   className="cursor-pointer"
//                 />
//                 {isModalOpen && (
//                   <div
//                     className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
//                     onClick={handleModalClick}
//                   >
//                     <div className="relative">
//                       <img
//                         className="max-h-[70vh] max-w-[70vw] object-contain"
//                         src={`${imgUrl}${item?.photo}`}
//                         alt="Modal View"
//                         onClick={(e) => e.stopPropagation()}
//                       />
//                     </div>
//                   </div>
//                 )}
//               </div>
//               <div className='p-[4px] mt-[8px]'>
//                 <h6 className='text-[15px] text-black font-semibold hover:text-blue-400'>
//                   {item.category_name}
//                 </h6>
//                 <p className='text-[15px] text-black'>
//                   {limitWords(stripHtml(item?.category_name || ""), 20)}
//                 </p>
//               </div>
//               <div className='flex justify-between items-center mt-[4px] mb-[4px]'>
//                 <div className='flex items-center text-[13px] justify-start gap-[8px]'>
//                   <h6>By <span className='font-semibold'>{item?.publish_by_data?.name}</span></h6>
//                   <h6>{item.created_at}</h6>
//                 </div>
//                 <FaRegBookmark />
//               </div>
//             </Link>
//           ))
//         ) : (
//           <div>No news available</div> 
//         )}
//       </div>
//     </div>
//   );
// };

// export default Category_news;
