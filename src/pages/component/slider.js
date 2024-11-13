import { useState, useEffect } from "react";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { id: 1, img: "https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1729657498.jpg", h1: "Two new three-star generals in army, DGFI gets new Director General", h2: "Two major generals have been made lieutenant generals in a high-level reshuffle in the Bangladesh Army on October 14.Of them..." },
    { id: 2, img: "https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1729657399.jpg", h1: "Chiefs of three services visit Ramna Kali Temple", h2: "hiefs of the three services- Chief of Army Staff General Waker-Uz-Zama, Chief of Naval Staff Admiral M Nazmul Hassan and" },
    { id: 3, img: "https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/1729657306.jpg", h1: "Air chief visits Japan to join InPACT", h2: "Chief of Air Staff of Bangladesh Air Force (BAF) Air Chief Marshal Hasan Mahmood Khan made a four-day official visit..." },
   
  ];

  
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length); 
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length); 
  };


  useEffect(() => {
    const timer = setInterval(nextSlide, 3000); 
    return () => clearInterval(timer);
  }, []);

  
  const visibleSlides = [
    slides[(currentSlide) % slides.length],
    slides[(currentSlide + 1) % slides.length],
    slides[(currentSlide + 2) % slides.length],
  ];

  return (
    <div className="relative ">
   
      <div className="flex">
        {visibleSlides.map((slide) => (
          <div
            key={slide.id}
            className="flex flex-col items-center justify-center relative top-[60px] w-[420px] left-[320px] h-[220px] "
          >
            <img
              src={slide.img}
              alt={`Slide ${slide.id}`}
              className="w-[400px] h-[220px] object-cover p-4 border-2 border-gray-200"
            />
            <h1 className="mt-[6px] h-[20px] relative left-[10px] text-[18px] text-slate-600 font-semibold">{slide.h1}</h1>
            <h2 className="mt-[10px] w-[400px] h-[20px] relative top-[30px] left-[5px] text-[13px] text-slate-600 font-semibold">{slide.h2}</h2>
          </div>
        ))}
      </div>

      
      <button
        onClick={prevSlide}
        className="absolute left-[300px] h-[60px] top-[150px] transform -translate-y-1/2
         text-white bg-black bg-opacity-50 rounded-[10px] p-2 "
      >
        <span className="bg-slate-300 rounded-[40px] text-black hover:bg-slate-100 hover:font-bold">&#10094;</span>
      </button>
      <button
        onClick={nextSlide}
        className="absolute h-[60px] top-[150px] right-[-340px] transform -translate-y-1/2 text-white
         bg-black bg-opacity-50 rounded-[10px] p-2 "
      >
       <span className="bg-slate-300 rounded-[40px] text-black hover:bg-slate-100 hover:font-bold"> &#10095;</span>
      </button>

    
      <div className="absolute bottom-4 top-[400px] right-[300px] transform -translate-x-1/2 flex space-x-2">
        {slides.slice(0, slides.length).map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full cursor-pointer ${currentSlide === index ? "bg-slate-500" : "bg-gray-200"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
