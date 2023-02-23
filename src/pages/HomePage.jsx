import React from "react";
import ProductList from "../components/products/ProductList";
import "../index.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import slide1 from ".././assets/img/card-slider.png";
import phoneSlide from ".././assets/img/iphone-slide.png";
import podsSlide from ".././assets/img/card-slide.png";
import airpodsSlide from ".././assets/img/card-airpods-slide.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-creative";

import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
const HomePage = () => {
  return (
    <div>
      <div>
        <section
          style={{
            display: "flex",
            justifyContent: "center",
            fontSize: "32px",
          }}
          className="block__content"
        >
          <div className="block__content-title">
            <h1
              style={{
                color: "#6e6e73",
                letterSpacing: "1.5px",
                fontWeight: "600",
              }}
            >
              <span style={{ color: "#1d1d1f", marginRight: "5px" }}>
                Store.
              </span>
              The best way to buy the <br /> products you love.
            </h1>
          </div>
        </section>

        {/* <Swiper
          grid={{ rows: true }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          // spaceBetween={50}
          navigation
          keyboard={{ onlyInViewport: true }}
          scrollbar={{ hide: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
          slot="wrapper-start"
        >
          <SwiperSlide className="swiper-slide">
            {({ isActive }) => (
              <div>
                <img src={slide1} alt="" />
                {isActive ? "slide_active" : "not active"}
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <img src={phoneSlide} alt="" />
                {isActive ? "slide_active" : "not active"}
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <img src={podsSlide} alt="" />
                {isActive ? "slide_active" : "not active"}
              </div>
            )}
          </SwiperSlide>
          <SwiperSlide>
            {({ isActive }) => (
              <div>
                <img src={airpodsSlide} alt="" />
                {isActive ? "slide_active" : "not active"}
              </div>
            )}
          </SwiperSlide>
        </Swiper> */}
      </div>
      <ProductList />
    </div>
  );
};

export default HomePage;
