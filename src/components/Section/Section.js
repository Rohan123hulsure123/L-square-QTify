import React, { useEffect, useState } from "react";
import "./Section.css";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import { CircularProgress } from "@mui/material";
import FiltersComp from "../Filters/Filters";

export default function Section({ title, data, filterSource }) {
  const [isCollapse, setIsCollapse] = useState(false);
  const [filters, setFilters] = useState([{ key: "All", label: "All" }]);
  const [indexOfSelectedFilter, setIndexOfSelectedFilter] = useState(0);
  useEffect(() => {
    if (filterSource) {
      filterSource().then((res) => {
        const { data } = res;
        setFilters([...filters, ...data]);
      });
    }
  }, []);

  // console.log(data);
  const sholudFilterVisible = filters.length > 1;
  const cards = data.filter((item) =>
    sholudFilterVisible && indexOfSelectedFilter !== 0
      ? item.genre.key === filters[indexOfSelectedFilter].key
      : item
  );
  // console.log(filters);

  if (cards !== undefined) {
    // console.log(title);
    return (
      <div className="section-wrapper">
        <div className="section-title-and-buttons">
          {/* section heading and collapse */}
          <h4 className="section-heading">{title}</h4>
          {title !== "Songs" ? (
            <button
              className="section-button"
              onClick={() => setIsCollapse(!isCollapse)}
            >
              {isCollapse ? "Collapse" : "Show all"}
            </button>
          ) : (
            <></>
          )}
          
        </div>
        {sholudFilterVisible && <FiltersComp filters={filters} indexOfSelectedFilter={indexOfSelectedFilter} setIndexOfSelectedFilter={setIndexOfSelectedFilter} />}
        <div className="section-cards-grid">
          {/* cards */}
          {!isCollapse ? (
            <Carousel
              type={title === "Songs" ? "song" : "album"}
              data={cards}
            />
          ) : (
            cards?.map((album) => {
              return <Card key={album.id} type={"album"} data={album} />;
            })
          )}
          {/* <Card id={album.id} title={album.title} description={album.description} follow_count={album.follows} image={album.image} slug={album.slug} songs={album.songs}/> */}
        </div>
      </div>
    );
  } else {
    return <CircularProgress />;
  }
}
