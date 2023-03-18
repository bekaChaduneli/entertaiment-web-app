import styled from "styled-components";

export const SearchBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  @media screen and (min-width: 1440px) {
    margin-top: 55px;
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
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

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

export const Box = styled.div`
  width: 164px;
  display: flex;
  flex-direction: column;
  gap: 6px;
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
`;

export const RecomemendedTxt = styled.p`
  font-size: 20px;
  letter-spacing: -0.31px;
  line-height: 25.2px;
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
