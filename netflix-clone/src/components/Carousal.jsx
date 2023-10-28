import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel, { consts } from "react-elastic-carousel";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 6, itemsToScroll: 6 },
];

export default function Carousal({ data, title }) {
  const [items, setItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ]);

  return (
    <div className="single-carousel">
      <h3>{title}</h3>
      <Carousel
        breakPoints={breakPoints}
        className="carousel-main"
        pagination={false}
      >
        {data.map((item) => (
          <div className="carousel-item" key={item}>
            <img
              src={`https://image.tmdb.org/t/p/w200${item?.backdrop_path}`}
              alt=""
            />
            {/* <div className="carousel-title">
              <h6>{item?.title}</h6>
            </div> */}
          </div>
        ))}
      </Carousel>
    </div>
  );
}
