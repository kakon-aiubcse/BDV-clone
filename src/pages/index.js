import React from "react";
import Nav from "./component/nav";
import Home from "./home";
import Slider from "./component/slider";
import Card1 from "./cards/card1";
import Card2 from "./cards/card2";
import Cards from "./cards/cards";
import Footer from "./component/footer";

const HomePage = () => {
  return (
    <>
      <div className="h-[5000px] font-vfsans">
        <div className="absolute left-[200px]">
          <Nav />
        </div>
        <div className="absolute left-[200px] top-[210px]">
          <Home />
        </div>
        <div className="absolute top-[900px] right-[680px] ">
          <Slider />
          <div className="h-[4px] w-[1408px] bg-black flex absolute top-[430px] left-[250px]"></div>
        </div>{" "}
        <div className="absolute top-[1350px] right-[280px] ">
          <Card1 />
          <div className="h-[4px] w-[1408px] bg-black flex absolute top-[430px] left-[0px]"></div>
        </div>{" "}
        <div className="absolute top-[1810px] right-[1360px] ">
          <Card2 />
          <div className="h-[4px] w-[1408px] bg-black flex absolute top-[510px] left-[0px]"></div>
        </div>{" "}
        <div className="absolute top-[2350px] right-[280px] ">
          <Cards />
        </div>
        <div className="absolute top-[4850px] right-[200px] w-[1400px] ">
          <Footer/>
        </div>
      </div>
    </>
  );
};

export default HomePage;
