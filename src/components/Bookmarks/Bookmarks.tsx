import BookmarkEmpty from "../../assets/icon-bookmark-empty.svg";
import BookmarkFull from "../../assets/icon-bookmark-full.svg";
import movieImg from "../../assets/icon-category-movie.svg";
import seriesImg from "../../assets/icon-category-tv.svg";
import search from "../../assets/icon-search.svg";
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
  SearchBox,
  Search,
  SearchImg,
  SecondBox,
} from "./Bookmarks.styled";
import { useState } from "react";
export default function Series(props: any) {
  const [bookmark, setBookmark] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const makeChange = (e: any) => {
    setSearchValue(e.target.value);
  };
  let searched = props.data.filter((movie: any) =>
    movie.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <MainBox>
      <SearchBox onClick={() => console.log(searched)}>
        <SearchImg src={search} />
        <Search
          type="search"
          value={searchValue}
          onChange={makeChange}
          placeholder="Search for bookmarked shows"
        />
      </SearchBox>
      <Recomendation>
        <RecomemendedTxt>Bookmarked Movies</RecomemendedTxt>
        <Recommended>
          {props.data.map((content: any) => {
            return (
              <>
                {content.category == "Movie" && content.isBookmarked && (
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
                          content.isBookmarked ? BookmarkFull : BookmarkEmpty
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
                    </Box>
                  </>
                )}
              </>
            );
          })}
        </Recommended>
        <SecondBox>
          <RecomemendedTxt>Bookmarked TV Series</RecomemendedTxt>
          <Recommended>
            {props.data.map((content: any) => {
              return (
                <>
                  {content.category == "TV Series" && content.isBookmarked && (
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
                            content.isBookmarked ? BookmarkFull : BookmarkEmpty
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
                      </Box>
                    </>
                  )}
                </>
              );
            })}
          </Recommended>
        </SecondBox>
      </Recomendation>
    </MainBox>
  );
}

{
}
