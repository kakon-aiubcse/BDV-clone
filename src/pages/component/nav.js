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
                   <Link href={`/news/newsDetails/${item.id}`}> <span>{item.title}</span></Link>
                  </div>
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-between relative right-[510px] top-[100px]">
            <nav className="flex flex-row space-x-4 text-[20px]">
              <Link href="/">Home</Link>
              <Link href={`/news/categoryNews/2`}>Defence & Diplomacy</Link>
              <Link href={`/news/categoryNews/3`}>Geopolitics</Link>
              <Link href={`/news/categoryNews/1`}>National</Link>
              <Link href={`/news/categoryNews/4`}>Opinion</Link>
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

