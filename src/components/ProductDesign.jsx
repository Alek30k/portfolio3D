import React, { Suspense, useState } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styled from "styled-components";
import Shoe from "./Shoe";

// const Desc = styled.div`
//   width: 200px;
//   height: 70px;
//   padding: 20px;
//   background-color: white;
//   border-radius: 10px;
//   position: absolute;
//   bottom: 500px;
//   right: 100px;

//   @media only screen and (max-width: 768px) {
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     margin: auto;
//   }
// `;
const Portfolio = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  position: relative;
  background-color: green;
`;

const PortfolioItem = styled.div`
  flex: 0 0 33.33%;
  max-width: 33.33%;
  margin-bottom: 30px;
  border-radius: 10px;
  // overflow: hidden;
  // cursor: pointer;
  // position: relative;
`;
const Inner = styled.div`
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  position: relative;
`;
const InnerImg = styled.div`
  &:hover {
    layer {
      height: 100%;
    }
  }
`;

const Item = styled.img`
  width: 100%;
  height: 200px;
  display: block;
  transition: transform 0.5s;

  // &:hover {
  //   transform: scale(1.1);
  // }
`;
const Layer = styled.div`
  width: 100%;
  height: 0%;
  background: linear-gradient(rgba(0, 0, 0, 0.6), rgb(211, 20, 52));
  position: absolute;
  color: #fff;
  left: 0;
  bottom: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 40px;
  text-align: center;
  transition: height 0.5s;
`;
const Title = styled.h3``;
const Desc = styled.p``;
const Enlace = styled.a``;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  bottom: 500px;
  right: 100px;
`;

const ProductDesign = () => {
  const [portfolioOpen, setPortfolioOpen] = useState(false);
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
                <Item src="./img/fiverr.png" alt="" />
                <Layer>
                  <Title>Fiverr</Title>
                  <Desc>React-Node.Js-Express-Hooks-MongoDB-Stripe</Desc>
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
