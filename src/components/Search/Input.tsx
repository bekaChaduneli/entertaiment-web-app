import { useState } from "react";
import BookmarkEmpty from "../../../public/assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../../public/assets/icon-bookmark-full.svg";
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
  SearchBox,
  Search,
  SearchImg,
} from "./Input.styled";
import searche from "../../../public/assets/icon-search.svg";
export default function Input(props: any) {
  console.log(props.data);
  const [searchValue, setSearchValue] = useState("");
  const makeChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  let searched = props.data.filter((movie: any) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <>
      <SearchBox>
        <SearchImg src={searche} />
        <Search
          type="search"
          value={searchValue}
          onChange={makeChange}
          onFocus={() => props.setIsSearching(true)}
          onBlur={() => {
            props.setIsSearching(false);
            setSearchValue("");
          }}
          placeholder={props.text}
        />
      </SearchBox>
      {searchValue.length > 0 && (
        <>
          <Recomendation>
            <RecomemendedTxt>
              Fount {searched.length} Result for '{searchValue}'
            </RecomemendedTxt>
            <Recommended>
              {searched.map((content: any) => {
                return (
                  <>
                    {(content.category == props.mainName ||
                      content.category == props.secondName) && (
                      <>
                        <Box>
                          <Images src={content.thumbnail.regular.large} />

                          <Bookmark
                            onClick={() => {
                              content.isBookmarked = !content.isBookmarked;
                              props.setBookmark(!props.bookmark);
                            }}
                          ></Bookmark>
                          <BookM
                            onClick={() => {
                              content.isBookmarked = !content.isBookmarked;
                              props.setBookmark(!props.bookmark);
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
                                      ? props.movieImg
                                      : props.seriesImg
                                  }
                                />
                                <Txt>{content.category}</Txt>
                              </Type>
                              <Point>.</Point>
                              <Txt>{content.rating}</Txt>
                            </Info>
                            <Name>{content.title}</Name>
                          </About>
                        </Box>
                      </>
                    )}
                  </>
                );
              })}
            </Recommended>
          </Recomendation>
        </>
      )}
    </>
  );
}
