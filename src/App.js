import "@fontsource/poppins";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";

import { StyledEngineProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAlbumsNew, fetchAlbumsTop, fetchSongs } from "./api/api";

function App() {
  const [data, setData] = useState({});
  const fetchData = (key, sourceFucntion) => {
    sourceFucntion().then((data) => {
      setData((prevState) => {
        return { ...prevState, [key]: data };
      });
    });
  };
  useEffect(() => {
    fetchData("topAlbums", fetchAlbumsTop);
    fetchData("newAlbums", fetchAlbumsNew);
    fetchData("songs", fetchSongs);
  }, []);

  const {topAlbums =[], newAlbums = [], songs = [] } = data;
  return (
    <>
      <StyledEngineProvider injectFirst>
        <Navbar />
        <Outlet context={{data: {topAlbums, newAlbums, songs}}}/>
      </StyledEngineProvider>
    </>

  );
}

export default App;
