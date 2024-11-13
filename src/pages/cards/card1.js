import React from "react";

const Card1 = () => {
  return (
    <>
      <div className="flex relative w-[1410px] h-[400px] bg-[#f0f6fd]">
        <div className="flex flex-col items-center justify-center space-y-2 bg-white">
          <img
            src="https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1727942423.jpg"
            className="w-[447px] h-[207px]"
          />
          <span className="flex relative top-[30px] h-[200px] w-[447px] font-bold text-center text-[20px] justify-center">
            Turkish fighter jet KAAN featured in Chinese military media
          </span>
          <span className="flex relative text-gray-600 top-[10px] h-[200px] w-[447px] font-normal text-center text-[15px] justify-center">
            Türkiye’s ambitious defense project, the National Combat Aircraft
            KAAN, which garnered considerable attention in global media was
            recently recognized in...
          </span>
        </div>
      </div>
    </>
  );
};
export default Card1;
