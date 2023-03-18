import styled from "styled-components";

export const MainBox = styled.main`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    padding: 25px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const Space = styled.div`
  width: 100%;
  height: 40px;
  opacity: 0%;
`;

export const HoverBox = styled.div`
  width: 85px;
  height: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 28.5px;
  position: absolute;
  transition: 0.5s;
  align-self: center;
  justify-self: center;
  margin-top: 41px;
  gap: 19px;
  opacity: 25%;
  background-color: ${({ theme }) => theme.white};
  @media screen and (min-width: 768px) {
    width: 100px;
    height: 40px;
    margin-top: 54px;
  }
  @media screen and (min-width: 1440px) {
    width: 117px;
    height: 48px;
    margin-top: 60px;
  }
`;

export const HoverBoxTranding = styled.div`
  width: 85px;
  height: 30px;
  display: none;
  justify-content: center;
  align-items: center;
  border-radius: 28.5px;
  position: absolute;
  transition: 0.5s;
  align-self: center;
  justify-self: center;
  margin-top: 41px;
  gap: 19px;
  opacity: 25%;
  background-color: ${({ theme }) => theme.white};
  @media screen and (min-width: 768px) {
    width: 117px;
    height: 48px;
    margin-top: 90px;
    margin-left: -20px;
  }
`;

export const HoverContTranding = styled.div`
  display: none;
  gap: 8px;
  position: absolute;
  align-self: center;
  align-items: center;
  transition: 0.5s;
  justify-self: center;
  margin-top: 47px;
  @media screen and (min-width: 768px) {
    gap: 19px;
    margin-top: 100px;
    margin-left: -20px;
  }
`;

export const HoverCont = styled.div`
  display: none;
  gap: 8px;
  position: absolute;
  align-self: center;
  align-items: center;
  transition: 0.5s;
  justify-self: center;
  margin-top: 47px;
  @media screen and (min-width: 768px) {
    gap: 12px;
    margin-top: 63px;
  }
  @media screen and (min-width: 1440px) {
    gap: 19px;
    margin-top: 70px;
  }
`;

export const HoverImg = styled.img`
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 22px;
    height: 22px;
  }
  @media screen and (min-width: 1440px) {
    width: 30px;
    height: 30px;
  }
`;

export const HoverImgTranding = styled.img`
  width: 18px;
  height: 18px;
  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;
export const HoverTxt = styled.span`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const HoverTxtTranding = styled.span`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const Box = styled.div`
  width: 164px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  &:hover div {
    display: flex;
  }
  &:hover img {
    opacity: 50%;
  }
  @media screen and (min-width: 768px) {
    width: 220px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
  }
`;

export const Images = styled.img`
  width: 164px;
  height: 110px;
  border-radius: 8px;
  opacity: ${(props: any) => props.imageHover};
  @media screen and (min-width: 768px) {
    width: 220px;
    height: 140px;
  }
  @media screen and (min-width: 1440px) {
    width: 280px;
    height: 174px;
  }
`;

export const Recomendation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  @media screen and (min-width: 768px) {
    margin-top: 30px;
  }
`;

export const RecomemendedTxt = styled.p`
  font-size: 20px;
  letter-spacing: -0.31px;
  line-height: 25.2px;
  @media screen and (min-width: 768px) {
    font-size: 32px;
    letter-spacing: -0.5px;
    line-height: 40.32px;
  }
`;

export const Recommended = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  @media screen and (min-width: 768px) {
    gap: 29px;
  }
  @media screen and (min-width: 1440px) {
    gap: 40px;
  }
`;

export const Bookmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 9999%;
  opacity: 50%;
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  color: #fff;
  align-self: flex-end;
  margin-right: 5px;
  margin-top: 5px;
`;

export const BookM = styled.img`
  width: 11.67px;
  height: 14px;
  position: absolute;
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 14px;
`;

export const About = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  gap: 6px;
  opacity: 75%;
  align-items: center;
`;

export const Txt = styled.p`
  font-size: 11px;
`;

export const Type = styled.div`
  display: flex;
  gap: 4px;
  justify-content: center;
  align-items: center;
`;

export const Imgs = styled.img`
  width: 10px;
  height: 10px;
`;

export const Name = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.white};
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const Point = styled.span`
  align-self: center;
  justify-self: center;
  transform: translateY(-4px);
`;

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  @media screen and (min-width: 1440px) {
    margin-top: 40px;
  }
`;

export const Search = styled.input`
  font-size: 16px;
  color: ${({ theme }) => theme.white};
  border: none;
  outline: none;
  width: 100%;
  background-color: ${({ theme }) => theme.black};
`;

export const SearchImg = styled.img`
  width: 18px;
  height: 18px;
`;

export const TrandingBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const TrandingImg = styled.img`
  width: 240px;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 470px;
  }
`;

export const TrandingElement = styled.div`
  display: flex;
  flex-direction: column;
  &:hover div {
    display: flex;
  }
  &:hover img {
    opacity: 50%;
  }
`;

export const TrandingAbout = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-top: 70px;
  margin-left: 16px;
  @media screen and (min-width: 768px) {
    margin-top: 166px;
    margin-left: 24px;
  }
`;

export const TrandingBookmark = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 9999%;
  opacity: 50%;
  background-color: ${({ theme }) => theme.black};
  position: absolute;
  color: #fff;
  align-self: flex-end;
  margin-right: 5px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    margin-right: 45px;
  }
`;

export const TrandingBookM = styled.img`
  width: 11.67px;
  height: 14px;
  position: absolute;
  align-self: flex-end;
  margin-right: 15px;
  margin-top: 19px;
  @media screen and (min-width: 768px) {
    margin-right: 55px;
  }
`;

export const TrandingName = styled.span`
  color: ${({ theme }) => theme.white};
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;

export const Headline = styled.p`
  font-size: 20px;
  line-height: 25px;
  letter-spacing: -0.31px;
  color: ${({ theme }) => theme.white};
  @media screen and (min-width: 768px) {
    font-size: 32px;
    line-height: 40.32px;
    letter-spacing: -0.5px;
  }
`;
