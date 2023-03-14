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
  width: 100%;
  height: 200px;
  display: block;
  transition: transform 0.5s;
`;
const Item = styled.img`
  width: 250px;
  height: 150px;
`;

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
          <Item src="./img/fiverr.png" alt="" />
        </Portfolio>
      )}

      <Button onClick={() => setPortfolioOpen(!portfolioOpen)}>
        PORTFOLIO
      </Button>
    </>
  );
};

export default ProductDesign;
