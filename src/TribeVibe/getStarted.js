// import 'atropos/css';
// import 'atropos/scss';

import './homepage.css'; 
import Card from './card'
import styled from 'styled-components';
import React from 'react';
import {useSpring,animated} from 'react-spring';


// const [MousePosition, setMousePosition] = useState({
//     left: 0,
//     top: 0
// });

// useEffect(() => {
//     // Update the document title using the browser API
    
//   },[MousePosition]);



// handleMouseMove =()=> {
//     setMousePosition({left: ev.pageX, top: ev.pageY}); 
// }

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Wrapper=styled(animated.div)`display: flex;
justify-content: center;
height: 67vh;
width:140%`;


const getStarted =()=>{
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1] }))

    return(
        <Wrapper
        onMouseMove={({clientX: x, clientY: y}) => (set({xys: calc(x, y)}))}
        onMouseLeave={() => set({xys:[0,0,1]})}
        style={{
            transform: props.xys.interpolate(trans)
        }}
        >
            <Card xys={props}/>
        </Wrapper>
    );
}

export default getStarted;


