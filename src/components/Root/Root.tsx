import { Link, Outlet } from "react-router-dom";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";
import Bookmarks from "../Bookmarks/Bookmarks";
import movie from "../../../public/assets/icon-nav-movies.svg";
import serie from "../../../public/assets/icon-nav-tv-series.svg";
import bookmark from "../../../public/assets/icon-nav-bookmark.svg";
import image from "../../../public/assets/logo.svg";
import home from "../../../public/assets/icon-nav-home.svg";
import avatar from "../../../public/assets/image-avatar.png";
import { Content, Header, Img, MainBoxs, MainImg, Person } from "./Root.styled";
import { useState } from "react";
export default function Roots(props: any) {
  const [movied, setMovied] = useState("");
  const [mained, setMained] = useState("");
  const [seried, setSeried] = useState("");
  const [bookmarked, setBookmarked] = useState("");
  return (
    <MainBoxs>
      <Header>
        <MainImg src={image} />
        <Content>
          <Link to="/">
            <Img<any>
              hovered={mained}
              onClick={() => {
                setMovied("");
                setMained(
                  "brightness(0) saturate(100%) invert(51%) sepia(62%) saturate(2926%) hue-rotate(329deg) brightness(95%) contrast(109%)"
                );
                setSeried("");
                setBookmarked("");
              }}
              src={home}
            />
          </Link>
          <Link to="/movies">
            <Img<any>
              hovered={movied}
              onClick={() => {
                setMovied(
                  "brightness(0) saturate(100%) invert(51%) sepia(62%) saturate(2926%) hue-rotate(329deg) brightness(95%) contrast(109%)"
                );
                setMained("");
                setSeried("");
                setBookmarked("");
              }}
              src={movie}
            />
          </Link>
          <Link to="/series">
            <Img<any>
              hovered={seried}
              onClick={() => {
                setMovied("");
                setMained("");
                setSeried(
                  "brightness(0) saturate(100%) invert(51%) sepia(62%) saturate(2926%) hue-rotate(329deg) brightness(95%) contrast(109%)"
                );
                setBookmarked("");
              }}
              src={serie}
            />
          </Link>
          <Link to="/bookmarks">
            <Img<any>
              hovered={bookmarked}
              onClick={() => {
                setMovied("");
                setMained("");
                setSeried("");
                setBookmarked(
                  "brightness(0) saturate(100%) invert(51%) sepia(62%) saturate(2926%) hue-rotate(329deg) brightness(95%) contrast(109%)"
                );
              }}
              src={bookmark}
            />
          </Link>
        </Content>
        <Person src={avatar} />
      </Header>
      <Outlet />
    </MainBoxs>
  );
}
