import React from 'react';
// import styled from 'styled-components';
import "./SocietyInfo.css"
import { Carousel } from 'react-responsive-carousel';
import { useParams } from 'react-router-dom'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';


import society from './data.js';

function Soc() {

  let { id:societyKey } = useParams(); 
  console.log(societyKey)
  const socToDis = society[societyKey]
  console.log(socToDis)
  
  let images = socToDis.img;
  let list = images.map((item, index) => {
    console.log(item);
    return (<div key={index}><img className="images" src={item} alt="Image"/></div>)})
  // console.log(society[1])

  return <div className ="Container"> 
    {/* <Wrapper> */}
      <Carousel autoPlay showArrows={false} showStatus={false} showThumbs={false} infiniteLoop={true} interval={3000}>
        {list}
        {/* <ImgWrapper key={1}><Img src="/mlsc/mlsc-1.jpg" alt="Image"/></ImgWrapper> */}
        {/* {console.log(list)} */}
      </Carousel>
      <div className="info" >
        <div style={{ display: "flex", justifyContent:"space-between"}}>
          <h2 className="title" style={{ display: "inline"}}>
              Society - {socToDis.name}
          </h2>
          <Link to="/" style={{ display: "inline", textDecoration: 'none'}}>
            <Button color="secondary" variant="outlined">Back to homepage</Button>
          </Link>
        </div>
        <div className="desc">
            {socToDis.desc}
        </div>

        
        </div>
    {/* </Wrapper> */}
  </div>     
}

export default Soc;