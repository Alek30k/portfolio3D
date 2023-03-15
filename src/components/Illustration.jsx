import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Shoe from "./Shoe";

const Desc = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 200px;
  right: 100px;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
`;

const Illustration = () => {
  return (
    <>
      {portfolioOpen ? (
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Shoe />
            </Stage>
            <OrbitControls enableZoom={false} autoRotate />
          </Suspense>
        </Canvas>
      ) : (
        <Portfolio>
          <PortfolioItem>
            <Inner>
              <InnerImg>
                <Item src="./img/portfolio/face1.png" alt="" />
                <Layer>
                  <Title>Fiverr</Title>
                  <Enlace href="https://merry-bienenstitch-43a67e.netlify.app" />
                </Layer>
              </InnerImg>
            </Inner>
          </PortfolioItem>
          <PortfolioItem>
            <Inner>
              <InnerImg>
                <Item src="./img/portfolio/cap1.png" alt="" />
                <Layer>
                  <Title>Feisbuk</Title>
                  <Enlace href="https://merry-bienenstitch-43a67e.netlify.app" />
                </Layer>
              </InnerImg>
            </Inner>
          </PortfolioItem>
        </Portfolio>
      )}

      <Button onClick={() => setPortfolioOpen(!portfolioOpen)}>
        PORTFOLIO
      </Button>
    </>
  );
};

export default Illustration;
