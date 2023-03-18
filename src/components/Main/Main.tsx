import BookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../../public/assets/icon-bookmark-full.svg";
import movieImg from "../../../public/assets/icon-category-movie.svg";
import seriesImg from "../../../public/assets/icon-category-tv.svg";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import {
  Bookmark,
  Box,
  Images,
  BookM,
  About,
  Info,
  Txt,
  Type,
  Imgs,
  Name,
  Point,
  Recomendation,
  RecomemendedTxt,
  Recommended,
  MainBox,
  TrandingBox,
  TrandingImg,
  TrandingElement,
  TrandingAbout,
  TrandingBookmark,
  TrandingBookM,
  TrandingName,
  Headline,
  Space,
  HoverBox,
  HoverCont,
  HoverImg,
  HoverTxt,
  HoverBoxTranding,
  HoverContTranding,
  HoverImgTranding,
  HoverTxtTranding,
} from "./Main.styled";
import { useState } from "react";
import Input from "../Search/Input";
import play from "../../../public/assets/icon-play.svg";
export default function Main(props: any) {
  const [bookmark, setBookmark] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  return (
    <MainBox>
      <Input
        text="Search for movies or TV series"
        setIsSearching={setIsSearching}
        bookmark
        seriesImg
        searchValue
        setSearchValue
        movieImg
        BookmarkFull
        mainName="TV Series"
        secondName="Movie"
        BookmarkEmpty
        setBookmark
        isSearching
        data={props.data}
      />
      {isSearching ? (
        ""
      ) : (
        <>
          <TrandingBox>
            <Headline>Trending</Headline>
            <Splide
              options={{
                fixedWidth: 500,
                autoplay: true,
                perMove: 1,
                interval: 3000,
                pagination: false,
                arrows: false,
                direction: "ltr",
                pauseOnFocus: true,
                pauseOnHover: true,
                start: 0,
                gap: 16,
                breakpoints: {
                  768: {
                    fixedWidth: 240,
                    gap: 16,
                  },
                },
              }}
            >
              {props.data.map((content: any, index: any) => {
                return (
                  <>
                    {content.isTrending && (
                      <>
                        <SplideSlide key={index}>
                          <TrandingElement>
                            <TrandingImg
                              src={content.thumbnail.trending.large}
                            />
                            <TrandingBookmark
                              onClick={() => {
                                content.isBookmarked = !content.isBookmarked;
                                setBookmark(!bookmark);
                              }}
                            ></TrandingBookmark>
                            <TrandingBookM
                              onClick={() => {
                                content.isBookmarked = !content.isBookmarked;
                                setBookmark(!bookmark);
                              }}
                              src={
                                content.isBookmarked
                                  ? BookmarkFull
                                  : BookmarkEmpty
                              }
                            />
                            <TrandingAbout>
                              <Info>
                                <Txt>{content.year}</Txt>
                                <Point>.</Point>
                                <Type>
                                  <Imgs
                                    src={
                                      content.category === "Movie"
                                        ? movieImg
                                        : seriesImg
                                    }
                                  />
                                  <Txt>{content.category}</Txt>
                                </Type>
                                <Point>.</Point>
                                <Txt>{content.rating}</Txt>
                              </Info>
                              <TrandingName>{content.title}</TrandingName>
                            </TrandingAbout>
                            <HoverBoxTranding />
                            <HoverContTranding>
                              <HoverImgTranding src={play} />
                              <HoverTxtTranding>Play</HoverTxtTranding>
                            </HoverContTranding>
                          </TrandingElement>
                        </SplideSlide>
                      </>
                    )}
                  </>
                );
              })}
            </Splide>
          </TrandingBox>
          <Recomendation>
            <RecomemendedTxt>Recommended for you</RecomemendedTxt>
            <Recommended>
              {props.data.map((content: any) => {
                return (
                  <Box>
                    <Images src={content.thumbnail.regular.large} />

                    <Bookmark
                      onClick={() => {
                        content.isBookmarked = !content.isBookmarked;
                        setBookmark(!bookmark);
                      }}
                    ></Bookmark>
                    <BookM
                      onClick={() => {
                        content.isBookmarked = !content.isBookmarked;
                        setBookmark(!bookmark);
                      }}
                      src={content.isBookmarked ? BookmarkFull : BookmarkEmpty}
                    />
                    <About>
                      <Info>
                        <Txt>{content.year}</Txt>
                        <Point>.</Point>
                        <Type>
                          <Imgs
                            src={
                              content.category === "Movie"
                                ? movieImg
                                : seriesImg
                            }
                          />
                          <Txt>{content.category}</Txt>
                        </Type>
                        <Point>.</Point>
                        <Txt>{content.rating}</Txt>
                      </Info>
                      <Name>{content.title}</Name>
                    </About>
                    <HoverBox />
                    <HoverCont>
                      <HoverImg src={play} />
                      <HoverTxt>Play</HoverTxt>
                    </HoverCont>
                  </Box>
                );
              })}
            </Recommended>
          </Recomendation>
        </>
      )}
      <Space>-</Space>
    </MainBox>
  );
}
