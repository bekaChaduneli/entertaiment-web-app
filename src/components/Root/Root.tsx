import { Link, Outlet } from "react-router-dom";
import Movies from "../Movies/Movies";
import Series from "../Series/Series";
import Bookmarks from "../Bookmarks/Bookmarks";
import movie from "../../assets/icon-nav-movies.svg";
import serie from "../../assets/icon-nav-tv-series.svg";
import bookmark from "../../assets/icon-nav-bookmark.svg";
import image from "../../assets/logo.svg";
import home from "../../assets/icon-nav-home.svg";
import avatar from "../../assets/image-avatar.png";
import { Content, Header, Img, MainBoxs, MainImg, Person } from "./Root.styled";
import { useState } from "react";
export default function Roots(props: any) {
  return (
    <MainBoxs>
      <Header>
        <MainImg src={image} />
        <Content>
          <Link to="/">
            <Img src={home} />
          </Link>
          <Link to="/movies">
            <Img src={movie} />
          </Link>
          <Link to="/series">
            <Img src={serie} />
          </Link>
          <Link to="/bookmarks">
            <Img src={bookmark} />
          </Link>
        </Content>
        <Person src={avatar} />
      </Header>
      <Outlet />
    </MainBoxs>
  );
}
