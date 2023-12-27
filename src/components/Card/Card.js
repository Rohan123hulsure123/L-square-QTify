import React from "react";
import "./Card.css";
import Chip from "@mui/material/Chip";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";

export default function Card({ type, data }) {
  //   console.log(type);

  const getCard = (type) => {
    switch (type) {
      case "album": {
        const { title, follows, image, songs, slug } = data;
        return (
          <Tooltip title={songs.length + " songs"} placement="top" arrow>
            <Link to={"/albums/" + slug} style={{textDecoration:'none'}}>
              <div className="card-wrapper">
                <div className="album-image-and-chip">
                  {/* image and Follows chip */}
                  <div className="album-image">
                    <img src={image} alt="Album img" loading="lazy" />
                  </div>
                  <div className="album-follows">
                    <Chip label={follows + " Follows"} size="small" />
                  </div>
                </div>
                <div className="album-name">
                  {/* Album name */}
                  <span>{title}</span>
                </div>
              </div>{" "}
            </Link>
          </Tooltip>
        );
      }
      case "song": {
        // console.log(data);
        const { title, likes, image } = data;
        return (
          <div className="card-wrapper">
            <div className="album-image-and-chip">
              {/* image and Follows chip */}
              <div className="album-image">
                <img src={image} alt="Album img" loading="lazy" />
              </div>
              <div className="album-follows">
                <Chip label={likes + " Likes"} size="small" />
              </div>
            </div>
            <div className="album-name">
              {/* Album name */}
              <span>{title}</span>
            </div>
          </div>
        );
      }
      default:
        return <></>;
    }
  };

  return getCard(type);
}
