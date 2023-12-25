import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "./Carousel.css";
import Card from "../Card/Card";

function LeftButtom() {
  return (
    <div className="left-button">
      <img src="./left.png" alt="left" />
    </div>
  );
}
function RightButtom() {
  return (
    <div className="right-button">
      <img src="./right.png" alt="right" />
    </div>
  );
}

export default function Carousel({ albums }) {
  return (
    <div className="carousel">
      <Swiper
        // initialSlide={3}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={7}
        navigation={{
          prevEl: ".left-button",
          nextEl: ".right-button",
        }}
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
        {/* <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
        <SwiperSlide>4</SwiperSlide>
        <SwiperSlide>5</SwiperSlide>
        <SwiperSlide>6</SwiperSlide>
        <SwiperSlide>7</SwiperSlide>
        <SwiperSlide>8</SwiperSlide>
        <SwiperSlide>9</SwiperSlide>
        <SwiperSlide>10</SwiperSlide>
        <SwiperSlide>11</SwiperSlide>
        <SwiperSlide>12</SwiperSlide>
        <SwiperSlide>13</SwiperSlide> */}
        {albums?.map((album) => {
        return (
          <SwiperSlide key={album.id}>
            <Card
              id={album.id}
              title={album.title}
              description={album.description}
              follow_count={album.follows}
              image={album.image}
              slug={album.slug}
              songs={album.songs}
            />
          </SwiperSlide>
        );
      })}
      </Swiper>
      <div className="slider-navigation">
        <LeftButtom />
        <RightButtom />
      </div>
    </div>
  );
}
