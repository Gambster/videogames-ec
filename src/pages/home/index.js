import Product from "@/components/Product";
import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const acc_token = process.env.NEXT_PUBLIC_API_ACCESSTOKEN;
  useEffect(() => {
    fetch("/api/get/catalogue", {
      headers: {
        access_token: acc_token,
      },
    })
      .catch((err) => {
        console.log({ err_get_catalogue: err });
      })
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);
  return (
    <>
      <Carousel
        additionalTransfrom={0}
        arrows
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024,
            },
            items: 7,
            partialVisibilityGutter: 40,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464,
            },
            items: 2,
            partialVisibilityGutter: 30,
          },
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {articles.map((article, index) => (
          <Product key={index} {...article} />
        ))}
      </Carousel>
    </>
  );
};

export default Home;
