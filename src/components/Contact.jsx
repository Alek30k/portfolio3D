import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
  gap: 10px;

  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Redes = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0px;
  gap: 40px;
`;
const Contactos = styled.a``;
const Img = styled.img`
  width: 50px;
  height: 50px;
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // emailjs.sendForm("service_id", "template_id", ref.current, "public_key");
    emailjs
      .sendForm(
        "service_nrdd82b",
        "template_4zar7sk",
        ref.current,
        "9rRmgkaZFHbBQR_Jv"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <Section id="contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Have You Any Questions ?</Title>
            <Input placeholder="Name" name="name" />
            <Input placeholder="Email" name="email" />
            <TextArea
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button type="submit">Send</Button>
            {success &&
              "Your message has been sent. We'll get back to you soon :)"}
          </Form>
          <Redes>
            <Contactos href="https://github.com/Alek30k" target="_blank">
              <Img src="./img/github.png"></Img>
            </Contactos>
            <Contactos
              href="https://www.linkedin.com/in/alejandro-cabrera-7b13a7177/"
              target="_blank"
            >
              <Img src="./img/linkedin.png"></Img>
            </Contactos>
            <Contactos href="https://bit.ly/3CPWW1j" target="_blank">
              <Img src="./img/WhatsApp_icon.png"></Img>
            </Contactos>
            <Contactos href="https://twitter.com/Alejandrok31k" target="_blank">
              <Img src="./img/Twitter-logo.svg.png"></Img>
            </Contactos>
          </Redes>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;
