import { createGlobalStyle } from "styled-components";
import "@fontsource/work-sans";
const GlobalStyle = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
}
@font-face {

}
* {
    padding: 0;
    margin: 0;
    font-family: "Work Sans"
   

  }
.pointer {
    cursor: pointer;
  }
.fw-700 {
  font-weight: 700;
}
.mt-min30 {
  margin-top: -30px;
}
.mt-20 {
  margin-top : 20px
}
.mt-30 {
  margin-top: 30px
}
.mt-33 {
  margin-top: 33px
}
.mt-220 {
  margin-top : 220px
}
.mt-550 {
  margin-top : 550px
}
.mt-84 {
  margin-top: 84px
}
.mb-32 {
  margin-bottom: 32px
}
.mb-67 {
  margin-bottom: 67px
}
.mb-100 {
  margin-bottom: -100px
}
.pt-card {
  padding : 20px 20px 20px 20px
}
.padding-helptips {
  padding: 17px 16px 17px 25px
}
.padding-version {
  padding: 3px 10px 5px 10px
}
.pt-20{
  padding-top: 20px
}
.pt-84 {
  padding-top: 84px
}
.pl-20 {
  padding-left: 20px
}
.lh-32 {
  line-height: 32px
}
.flex-1 {
  flex: 1
}
.align-left {
  text-align: left
}
.align-center {
  text-align: center
}
.align-right {
  text-align: right
}
`;

export default GlobalStyle;
