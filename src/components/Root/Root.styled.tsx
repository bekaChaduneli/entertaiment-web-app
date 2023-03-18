import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${({ theme }) => theme.semiDark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  @media screen and (min-width: 1440px) {
    max-width: 96px;
    width: 10px;
    padding: 35px;
    height: 90vh;
    margin-left: 32px;
    flex-direction: column;
    align-self: center;
    margin-right: 16px;
    justify-self: center;
    border-radius: 20px;
  }
`;

export const MainBoxs = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1440px) {
    flex-direction: row;
    max-width: 93%;
  }
`;

export const Img = styled.img`
  width: 16px;
  height: 16px;
  filter: ${(props: any) => props.hovered};
  &:hover {
    filter: brightness(300%);
    transition: 0.5s;
  }
  @media screen and (min-width: 1440px) {
    width: 20px;
    height: 20px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  @media screen and (min-width: 1440px) {
    flex-direction: column;
    transform: translateY(-230px);
  }
`;

export const MainImg = styled.img`
  width: 25px;
  height: 20px;
`;

export const Person = styled.img`
  width: 24px;
  height: 24px;
  border: 1.5px solid white;
  border-radius: 999%;
`;
