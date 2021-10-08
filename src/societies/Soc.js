import React from 'react';
import styled from 'styled-components';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import society from './data.js';

const Title = styled.h1`
  font-size: 1.5em;
  color: #EA698B;
`;
const Desc = styled.h1`
  font-size: 1.5em;
  // color: #822FAF;
  color: #C77DFF;
`;
const ImgWrapper = styled.div`
margin: auto;
`;
const Img = styled.img`
  display: block;
  max-width:800px;
  max-height:350px;
  width: auto;
  height: auto;
`;
const Wrapper = styled.div`
  // padding: 4em;
  width: 80vw;
  margin : auto;
  height: 100vh;
`;
const Container = styled.section`
  padding-top: 4em;
  width: 99vw;
  margin : auto;
  height: 100vh;
  background: rgb(151,58,168);
  background: linear-gradient(rgba(151,58,168,1) 0%, rgba(71,18,107,1) 100%);
`;
function Soc(props) {
  return <Container> 
    <Wrapper>
      <Carousel autoPlay>
        <ImgWrapper>
            <Img src={society[0].img3} alt="Image 1"/>
        </ImgWrapper>
        <ImgWrapper>
            <Img src={society[0].img3} alt="Image 2"/>
        </ImgWrapper>
        <ImgWrapper>
            <Img src={society[0].img3} alt="Image 3"/>
        </ImgWrapper>
        </Carousel>
      <Title>
          Society - {society[0].name}
      </Title>
      <Desc>
          {society[0].desc}
      </Desc>
    </Wrapper>
  </Container>     
}

export default Soc;