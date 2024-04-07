import styled from "styled-components";

export const FootWrapper = styled.div`
  .foot {
    position: relative;
    height: 325px;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
  }
  .foot-content {
    width: 980px;
    margin: 0 auto;
  }
  .foot-content-top {
    display: flex;
    justify-content: space-between;
    margin-top: 33px;
  }
  .top-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      display: block;
      margin-bottom: 5px;
      width: 45px;
      height: 55px;
    }
    span {
      color: rgba(0, 0, 0, 0.5);
    } 
  }
  .top-content:nth-child(1) a, .top-content:nth-child(2) a, .top-content:nth-child(3) a,
  .top-content:nth-child(5) a, .top-content:nth-child(6) a, .top-content:nth-child(8) a {
    background: url(${require("../../assets/img/foot-img/foot_image.png")}) no-repeat;
    background-size: 220px 220px;
  } 
  .top-content:nth-child(1) {
    a {
      background-position: -170px -5px;
    }
    a:hover {
      background-position: -5px -115px;
    }
  }
  .top-content:nth-child(2) {
    a {
      background-position: -5px -170px;
    }
    a:hover {
      background-position: -60px -170px;
    }
  }
  
  .top-content:nth-child(3) {
    a {
      background-position: -5px -60px;
    }
    a:hover {
      background-position: -60px -5px;
    }
  }
  .top-content:nth-child(4) {
    a {
      background: url(${require("../../assets/img/foot-img/xStudio.png")}) no-repeat;
      background-size: 45px 45px;
    }
  }
  .top-content:nth-child(5) {
    a {
      background-position: -60px -60px;
    }
    a:hover {
      background-position: -115px -5px;
    }
  }
  .top-content:nth-child(6) {
    a {
      background-position: -115px -115px;
    }
    a:hover {
      background-position: -5px -5px;
    }
  }
  .top-content:nth-child(7) {
    a {
      background: url(${require("../../assets/img/foot-img/cloudSong.png")}) no-repeat;
      background-size: 45px 45px;
    }
  }
  .top-content:nth-child(8) {
    a {
      background-position: -170px -115px;
    }
    a:hover {
      background-position: -60px -115px;
    }
  }
  .foot-content-bottom {
    margin-top: 60px;
    display: flex;
    margin: 60px auto 0 auto;
    flex-direction: column;
  }
  .bottom-links, .report, .license, .copy {
    display: flex;
    justify-content: center;
    line-height: 24px;
  }
  .bottom-links a:nth-child(1) {
    padding-right: 8px;
  }
  .bottom-links a:nth-child(7) {
    padding-left: 8px;
  }
  .bottom-links a:nth-child(2), .bottom-links a:nth-child(3), .bottom-links a:nth-child(4),
  .bottom-links a:nth-child(5), .bottom-links a:nth-child(6) {
    padding: 0 8px;
  }
  .bottom-links a:nth-child(2), .bottom-links a:nth-child(4), .bottom-links a:nth-child(6) {
    border-left: 2px solid #D9D9D9;
    border-right: 2px solid #D9D9D9;
  }
  .report a,.report span:nth-child(2), .license span, .copy span:nth-child(1), .copy a:nth-child(3)  {
    margin-right: 15px;
  }
  .copy span:nth-child(4) {
    background: url(${require("../../assets/img/foot-img/police.png")}) no-repeat;
    background-size: 15px 15px;
    width: 15px;
    height: 15px;
    margin-top: 4px;
  }
`