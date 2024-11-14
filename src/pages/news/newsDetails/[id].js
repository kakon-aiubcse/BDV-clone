import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Nav from '@/pages/component/nav';

const categoryNews = () => {
  const router = useRouter();
  const { id } = router.query; // Get the dynamic 'id' from the URL

  const imgUrl = `https://admin.bangladeshdefencevoice.com/storage/uploads/blogImg/`;
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  
  const [categoryNews, setCategoryNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photoText, setPhotoText] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    // Ensure that 'id' is available and convert it to a number
    if (id) {
      const categoryId = Number(id); // Convert the id to a number

      // Check if the id is a valid number
      if (isNaN(categoryId)) {
        setError("Invalid category ID.");
        setIsLoading(false);
        return;
      }

      const fetchCategoryNews = async () => {
        setIsLoading(true);
        setError(null);

        try {
          const res = await fetch(
            `https://admin.bangladeshdefencevoice.com/api/get-news-details/${categoryId}`
          );

          if (!res.ok) {
            throw new Error(`Failed to fetch data: ${res.statusText}`);
          }

          const data = await res.json();
          setCategoryNews(data.singleNewsData || []); // Set category news data
          setRelatedNews(data.relatedNewsData || []); // Set related news data
        } catch (error) {
          console.error(error);
          setError("Failed to fetch the news. Please try again later.");
        } finally {
          setIsLoading(false);
        }
      };
      console.log(relatedNews);
      console.log(categoryId)
      fetchCategoryNews();
    }
  }, [id]);

  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      categoryNews?.singleNewsData?.photo_text
    ) {
      const parsedText = new DOMParser().parseFromString(
        categoryNews.singleNewsData.photo_text,
        "text/html"
      ).body.textContent;

      setPhotoText(parsedText); // Set the parsed text state
    }
  }, [categoryNews]);

  // Ensure the component is only rendered on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const stripHtml = (html) => {
    if (typeof document !== "undefined") {
      const div = document.createElement("div");
      div.innerHTML = html;
      return div.textContent || div.innerText || "";
    }
    return html;
  };


  if (!isMounted) return null;

  return (<>
    <div className='flex mb-20 h-[200px] relative left-[200px]'>
    <Nav/>
           </div>
    <div className="container mx-auto">
      <Tabs>
        <TabList>
          <Tab></Tab>
        </TabList>
        <div className="flex flex-col lg:flex-row gap-4 pt-[12px]">
          {/* Article Section */}
          <div className="border-b-4 lg:w-2/3 pb-5 space-y-4">
            <section>
              <TabPanel>
                <div className="h-full w-full overflow-hidden p-[10px] lg:p-0">
                  <div className="w-full h-[500px] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      onClick={openModal}
                      src={`${imgUrl}${categoryNews?.photo}`} 
                      alt="News Image"
                    />

                
                    {isModalOpen && (
                      <div
                        className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center z-50"
                        onClick={handleModalClick}
                      >
                        <div className="relative">
                          <img
                            className="max-h-[30vh] max-w-[30vw] object-contain"
                            src={`${imgUrl}${categoryNews?.photo}`} 
                            alt="Modal View"
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                    )}
                  </div>

                  <p
                    className="text-[15px] text-center mt-[8px]"
                    dangerouslySetInnerHTML={{
                      __html: categoryNews?.photo_text || "No description",
                    }}
                  ></p>

                
                  <h1 className="text-3xl font-bold mt-3 text-red-600">
                    {categoryNews?.title || "No Title Available"}
                  </h1>

                
                  <div className="flex items-center gap-1 text-lg mt-[4px]">
                    <p>
                      By{" "}
                      <strong className="text-sky-500">
                        {categoryNews?.publish_by_data?.name || "Unknown Author"}
                      </strong>
                      <span className="ml-[8px]">
                        {categoryNews?.published_date
                          ? formatDate(categoryNews.published_date)
                          : "Date not available"}
                      </span>
                    </p>
                    <i className="fa-regular fa-bookmark text-xs"></i>
                  </div>

                  
                  <div
                    className={`grid gap-6 mt-[8px] ${
                      !categoryNews?.post_2 && !categoryNews?.post_3
                        ? "grid-cols-1"
                        : "lg:grid-cols-3 grid-cols-1"
                    }`}
                  >
                    <div className="col-span-1">
                      <p className="text-justify">
                        {stripHtml(categoryNews?.post || "No content available")}
                      </p>
                    </div>

                    {categoryNews?.post_2 && (
                      <div className="col-span-1">
                        <p className="text-justify">{categoryNews?.post_2}</p>
                      </div>
                    )}

                    {categoryNews?.post_3 && (
                      <div className="col-span-1">
                        <p className="text-justify">
                          {stripHtml(categoryNews?.post_3)}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </TabPanel>
            </section>
          </div>

      
          <aside className="lg:w-1/3 space-y-6 p-[10px] md:p-0">
            <div className="items-center justify-center">
              <div className="pb-5 px-5">
                <div className="max-w-md mx-auto">
                  <div className="mb-4 flex space-x-4 p-1 rounded-lg shadow-md">
                    <button className="flex-1 py-2 px-4 uppercase transition-all duration-300 bg-[#1091FF] text-white">
                      Related News
                    </button>
                  </div>

            
                  <div className="h-[120vh] overflow-y-auto scroll_content">
                    {relatedNews?.map((article, index) => (
                      <Link
                        href={`/news/categoryNews/${article.id}`} 
                        key={index}
                        className="flex items-start gap-4 mb-6 hover:bg-gray-50 p-4 rounded-lg transition duration-300"
                      >
                        <div className="flex-shrink-0 w-36 h-24 overflow-hidden rounded-lg">
                          <img
                            src={
                              article?.photo
                                ? `${imgUrl}${article.photo}`
                                : "/fallback-image.jpg"
                            }
                            alt="Related News"
                            className="w-full h-full object-cover"
                          />
                        </div>

            
                        <div className="flex-grow">
                          <p className="text-xs text-gray-500 mb-1">
                            {article?.published_date
                              ? new Date(
                                  article.published_date
                                ).toLocaleDateString()
                              : "Unknown Date"}
                          </p>
                          <a
                            href={article?.link || "#"}
                            className="text-lg font-semibold text-sky-600 hover:text-sky-500"
                          >
                            {article?.title || "No Title"}
                          </a>
                        </div>
                      </Link>
                    ))}
                  </div>

           
                  <div className="space-y-4 p-4">
                    <div className="">
                      <h4 className="space-y-4 text-[24px] py-[16px]">
                        Follow Us
                      </h4>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-blue-900 p-1 flex items-center gap-4 text-white">
                        <div className="pl-[4px]">
                          <FaFacebook className="text-3xl" />
                        </div>
                        <div>
                          <p>50,000</p>
                          <p>Fans</p>
                        </div>
                      </div>
                      <div className="bg-indigo-500 p-1 flex items-center gap-4 text-white">
                        <div className="pl-[4px]">
                          <FaInstagram className="text-3xl" />
                        </div>
                        <div>
                          <p>15,000</p>
                          <p>Followers</p>
                        </div>
                      </div>
                      <div className="bg-sky-500 p-1 flex items-center gap-4 text-white">
                        <div className="pl-[4px]">
                          <FaTwitter className="text-3xl" />
                        </div>
                        <div>
                          <p>9,000</p>
                          <p>Followers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </Tabs>
    </div></>
  );
};

export default categoryNews;
