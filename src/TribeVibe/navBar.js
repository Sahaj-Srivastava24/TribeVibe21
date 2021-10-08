import React from 'react';

const navBar =(props)=>{
    return(
        <div>
            
            <nav className="nav">
                <img style={{height:'60px',width:'100px'}} alt=""  src={require("./Assets/LOGO.png")}></img>
                

            </nav>
        </div>
    );
}

export default navBar;