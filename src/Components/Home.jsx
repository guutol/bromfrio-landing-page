import React from "react";
import home from "../images/home.png";
import Common from "./Common";

const Home = () => {
  return (
    <>
      <Common
        name="Conserto e manutenção com"
        imgsrc={home}
        isCompName={true}
        compName="Bomfrio"
        visit="/services"
        btnname="Ver serviços"
      />
    </>
  );
};

export default Home;
