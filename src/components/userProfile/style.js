import styled from "styled-components";

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 125px;
  left: 259px;

  img {
    border-radius: 26.5px;
    width: 50px;
    height: 50px;
    margin-right: 18px;
  }
  h1 {
    font-family: "Oswald";
    font-style: normal;
    font-weight: 700;
    font-size: 43px;
    line-height: 64px;
    color: #ffffff;
  }
`;

export const Body = styled.div`
  background-color: #333333;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow-x: hidden;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 130px;

  img {
    border-radius: 26.5px;
    width: 50px;
    height: 50px;
    margin-bottom: 19px;
  }

  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 13px;
    text-align: center;
    color: #ffffff;
    margin-top: 5px;
  }

  .likeButton {
    color: white;
    font-size: 1.5em;
    font-weight: bolder;
  }
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 18px;
  h1 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 19px;
    line-height: 23px;
    color: #ffffff;
    height: 23px;
    margin-bottom: 7px;
  }

  h2 {
    font-family: "Lato";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 20px;
    color: #b7b7b7;
    height: 52px;
  }

  .metadata {
    height: 155px;
    display: flex;
    align-items: center;
    margin: 10px 0 0 0;
    width: 100%;
    background-color: #171717;
    border: 1px solid #4d4d4d;
    border-radius: 11px;
    .metadataInfo {
      height: 130px;
      width: 80%;
      margin: 0 0 0 5px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      h2 {
        font-family: "Lato";
        font-size: 16px;
        color: #cecece;
      }
      h3 {
        font-family: "Lato";
        font-size: 11px;
        color: #9b9595;
        margin: 4px 0;
        overflow: hidden;
      }
      h4 {
        font-family: "Lato";
        font-size: 11px;
        color: #cecece;
        margin: 4px 0;
        overflow: hidden;
      }
    }
    .metadataImg {
      img {
        width: 154px;
        height: 155px;
        border-radius: 0px 12px 13px 0px;
      }
    }
  }
`;

export const Post = styled.div`
  display: flex;
  padding: 19px 21px 20px 18px;
  width: 611px;
  height: 276px;
  background-color: #171717;
  border-radius: 16px;
  margin-bottom: 16px;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 230px;
  left: 241px;
`;

export const Hashtag = styled.span`
  color: #00ffff;
`;

export const Navbar = styled.div`
  margin: -17px -17px;
  width: 98vw;
`;

export const MainBody = styled.div`
  overflow: hidden;
`;
