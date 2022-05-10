import React from "react";
import Navbar from "../../components/molecules/Navbar";
import SectionOne from "../../components/organisms/SectionOne";
import SectionTwo from "../../components/organisms/SectionTwo";
import SectionThree from "../../components/organisms/SectionThree";
const Home = () => {
  return (
    <>
      <Navbar />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </>
  );
};

export default React.memo(Home);
