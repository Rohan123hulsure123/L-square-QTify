import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import styles from "./Carousel.module.css";
import Card from "../Card/Card";

function LeftButtom() {
  const swiper = useSwiper();

  return (
    <div
      id="left-buttton"
      className={styles.left_button}
      onClick={() => swiper.slidePrev()}
    >
      <img src="./left.svg" alt="left" />
    </div>
  );
}
function RightButtom() {
  const swiper = useSwiper();
  return (
    <div
      id="right-buttton"
      className={styles.right_button}
      onClick={() => swiper.slideNext()}
    >
      <img src="./right.svg" alt="right" />
    </div>
  );
}

export default function Carousel({ type, data }) {
  return (
    <div className={styles.carousel}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={7}
        // navigation={{
        //   prevEl: "#left_button",
        //   nextEl: "#right_button",
        // }}
        // navigation
        breakpoints={{
          320: {
            slidesPerView: 2,
          },
          480: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 7,
          },
        }}
      >
        <div className={styles.slider_navigation}>
          <LeftButtom />
          <RightButtom />
        </div>
        {data?.map((album) => {
          // const { title, follow_count, image, slug, songs} = album;
          return (
            <SwiperSlide key={album.id}>
              <Card id={album.id} type={type} data={album} />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* <div className={styles.slider_navigation}>
        <LeftButtom />
        <RightButtom />
      </div> */}
    </div>
  );
}
