import React, { useEffect, useState } from "react";
import bg from "../assets/bg.webp";
import axios from "axios";
import { netflix_requests } from "../api";
import { Button, Tooltip, Space } from "antd";
import {
  CaretRightFilled,
  InfoCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";

export default function Baner() {
  const [banerDetails, setBanerDetails] = useState({});
  const [logo, setLogo] = useState("");
  useEffect(() => {
    axios
      .get(netflix_requests.netflix_originals)
      .then((res) => {
        const random =
          res.data.results[Math.floor(Math.random() * res.data.results.length)];
        setBanerDetails(random);

        axios
          .get(
            `https://api.themoviedb.org/3/tv/${random.id}/images?api_key=${process.env.REACT_APP_KEY}`
          )
          .then((res) => {
            console.log(res, "response");
            setLogo(res?.data?.logos[0]?.file_path);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="baner">
      <div className="baner-img">
        <img
          src={`https://image.tmdb.org/t/p/original${banerDetails?.backdrop_path}`}
          alt=""
        />
      </div>
      <div className="fill-container">
        <div className="info-container">
          <div className="logo">
            {/* {logo ? (
              <img src={`https://image.tmdb.org/t/p/original${logo}`} alt="" />
            ) : (
              <h1>{banerDetails?.name}</h1>
            )} */}
            <h1>{banerDetails?.name}</h1>
          </div>
          <div className="overview">{banerDetails?.overview}</div>
          {console.log(banerDetails, "banerDetails")}
          <div className="button-container">
            <button className="play-btn">
              <div>
                <CaretRightFilled />
              </div>
              <div>Play</div>
            </button>

            <button className="moreinfo-btn">
              <div>
                <InfoCircleOutlined />
              </div>
              <div> More Info</div>
            </button>
          </div>
        </div>
      </div>
      <div className="category">
        <span className="category-label">
          {banerDetails?.adult ? "A 18+" : "U/A 16"}
        </span>
      </div>
    </div>
  );
}
