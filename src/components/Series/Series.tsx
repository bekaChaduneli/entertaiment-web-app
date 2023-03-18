import BookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../../public/assets/icon-bookmark-full.svg";
import movieImg from "../../../public/assets/icon-category-movie.svg";
import seriesImg from "../../../public/assets/icon-category-tv.svg";
import search from "../../../public/assets/icon-search.svg";
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
  HoverBox,
  HoverCont,
  HoverImg,
  HoverTxt,
} from "./Series.styled";
import { useState } from "react";
import Input from "../Search/Input";
import play from "../../../public/assets/icon-play.svg";
export default function Series(props: any) {
  const [bookmark, setBookmark] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  return (
    <MainBox>
      <Input
        text="Search for TV series"
        setIsSearching={setIsSearching}
        bookmark
        seriesImg
        searchValue
        setSearchValue
        movieImg
        BookmarkFull
        BookmarkEmpty
        mainName="TV Series"
        itsBookmarksPage={false}
        secondName="gagagah"
        setBookmark
        isSearching={isSearching}
        data={props.data}
      />

      {isSearching === false ? (
        <>
          <Recomendation>
            <RecomemendedTxt>TV Series</RecomemendedTxt>
            <Recommended>
              {props.data.map((content: any) => {
                return (
                  <>
                    {content.category == "TV Series" && (
                      <>
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
                            src={
                              content.isBookmarked
                                ? BookmarkFull
                                : BookmarkEmpty
                            }
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
                      </>
                    )}
                  </>
                );
              })}
            </Recommended>
          </Recomendation>
        </>
      ) : (
        ""
      )}
    </MainBox>
  );
}
