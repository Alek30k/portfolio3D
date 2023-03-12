import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import styled from "styled-components";
import Osaka_silla from "./Osaka_silla";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;
const Portfolio = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PortfolioItem = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.6}>
            <Osaka_silla />
          </Stage>
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Desc>
        We design products with a strong focus on both world class design and
        ensuring your product is a market success.
      </Desc>
      <Portfolio>
        <PortfolioItem src="./img/bg.jpeg" />
        <PortfolioItem src="./img/bg.jpeg" />
        <PortfolioItem src="./img/bg.jpeg" />
        <PortfolioItem src="./img/bg.jpeg" />
        <PortfolioItem src="./img/bg.jpeg" />
        <PortfolioItem src="./img/bg.jpeg" />
        <PortfolioItem src="./img/bg.jpeg" />
        <PortfolioItem src="./img/bg.jpeg" />
      </Portfolio>
    </>
  );
};

export default WebDesign;
