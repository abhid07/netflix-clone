import React, { useEffect, useState } from "react";

import Baner from "../components/Baner";
import Carousal from "../components/Carousal";
import axios from "axios";
import { netflix_requests } from "../api";

export default function Landing() {
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    axios
      .get(netflix_requests.trending_all)
      .then((res) => {
        setTrending(res?.data?.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="main-container">
        <Baner />
        <div className="carousel-wrapper">
          <Carousal data={trending} title={"Trending Now"} />
          <Carousal data={[]} title={"Trending Now"} />
          <Carousal data={[]} title={"Trending Now"} />
          <Carousal data={[]} title={"Trending Now"} />
          <Carousal data={[]} title={"Trending Now"} />
          <Carousal data={[]} title={"Trending Now"} />
          <Carousal data={[]} title={"Trending Now"} />
        </div>
      </div>
    </>
  );
}
