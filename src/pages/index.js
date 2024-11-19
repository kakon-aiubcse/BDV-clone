import React from "react";
import Nav from "./component/nav";
import Home from "./home";
import Slider from "./component/slider";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import MultipleCards from "./cards/multipleCards";
import Footer from "./component/footer";

const HomePage = () => {
  return (
    <>
      {" "}
      <div className="h-[5000px] font-vfsans">
        <div className="absolute left-[200px] tab:absolute tab:left-[50px]">
          <Nav />
        </div>
        <div className="absolute left-[200px] top-[210px] tab:absolute tab:left-[70px]">
          <Home />
        </div>
        <div
          className="absolute top-[900px] right-[680px] tab:absolute tab:right-[450px] 
        minidesk:absolute minidesk:right-[200px]"
        >
          <Slider />
          <div className="h-[4px] w-[1408px] bg-black flex absolute top-[430px] left-[250px] tab:absolute tab:left-[250px]"></div>
        </div>{" "}
        <div
          className="absolute top-[1350px] right-[280px] tab:absolute tab:right-[60px]
        minidesk:absolute minidesk:right-[-200px]"
        >
          <Card1 />
          <div className="h-[4px] w-[1408px] bg-black flex absolute top-[430px] left-[0px] tab:absolute minidesk:absolute"></div>
        </div>{" "}
        <div className="absolute top-[1810px] right-[1360px] tab:absolute tab:right-[1090px] minidesk:absolute minidesk:right-[820px]">
          <Card2 />
          <div className="h-[4px] w-[1408px] bg-black flex absolute top-[510px] left-[0px] tab:absolute tab:left-[-50px] minidesk:absolute minidesk:left-[-60px]"></div>
        </div>{" "}
        <div className="absolute top-[2350px] right-[210px] tab:absolute tab:right-[120px] minidesk:absolute minidesk:right-[20px]">
          <MultipleCards />
        </div>
        <div className="absolute top-[3900px]  w-full tab:absolute tab:top-[4100px] minidesk:absolute minidesk:top-[4200px] minidesk:w-full minidesk:left-[100px]">
          <Footer />
        </div>
      </div>
    </>
  );
};

export default HomePage;
