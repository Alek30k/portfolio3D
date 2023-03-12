import React, { Suspense, useState } from "react";
import styled from "styled-components";
import Cube from "./Cube";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 24px;
  color: lightgray;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
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
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  flex-wrap: wrap;
  border: 1px solid lightgray;
  border-radius: 5px;
  padding: 20px;
`;
const Image = styled.img`
  width: 80px;
`;

const Skills = styled.button`
  background-color: transparent;
  color: red;
  font-size: 20px;
  font-weight: 500;
  text-align: start;
  border: none;
  cursor: pointer;
`;

const Who = () => {
  const [modal, setModal] = useState(false);

  return (
    <Section id="studio">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title>Think outside the square space</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Who I am</Subtitle>
          </WhatWeDo>
          <Desc>
            I consider myself a very curious and self-taught person who likes to
            learn new technologies, I really want to contribute what I know and
            incorporate new learning and face challenges!
          </Desc>
          {modal ? (
            <Skills onClick={() => setModal(false)}>X</Skills>
          ) : (
            <Button onClick={() => setModal(!modal)}>Skills</Button>
          )}
          {modal && (
            <Modal>
              <Image src="./img/js.png" />
              <Image src="./img/html.png" />
              <Image src="./img/css.png" />
              <Image src="./img/boostrap.png" />
              <Image src="./img/react.png" />
              <Image src="./img/redux.png" />
              <Image src="./img/node.png" />
              <Image src="./img/express.png" />
              <Image src="./img/git.png" />
              <Image src="./img/insomnia.png" />
              <Image src="./img/sql.png" />
              <Image src="./img/mongo.png" />
              <Image src="./img/postman.png" />
            </Modal>
          )}
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
