import React, { Suspense, useState } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Social_media_hologram from "./Social_media_hologram";

const ProductDesign = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
  return (
    <>
      {portfolioOpen ? (
        <Canvas>
          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <Social_media_hologram />
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

export default ProductDesign;
