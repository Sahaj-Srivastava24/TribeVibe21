import React from 'react';
import './homepage.css'; 
import Nav from './navBar';
import GetStarted from './getStarted';
import TimeLine from './TimelineContent/timeline'
const homePage =()=>{
    return(
        <div className="homepage">
            <Nav/>
            <div className="gs">
                <GetStarted/>
            </div>
            <div className="aboutTribe">
            <p>

            “Coming together is the beginning, working together is a process, keeping together is a success.”
            </p>
            Hola Amigos! We are excited to announce that we are going to organise an event this weekend to vibe up your tribe. 
            What is Tribe Vibe?? Every journey begins with a single step. We start this expedition by answering the questions that boggles every fresher’s mind in the initial days of their college life. 
            <br></br>
            “Family is where life begins, and love never ends.”
            <br></br>
            As we take this legacy forward, we are about to give you what we earned and what we have learned with the opportunity that made all the differences.  Let’s embrace the new friendships bond, which will last a lifetime amidst several bonfires and gleamy nights. With a perfect blend of enthusiastic, cheerful, and highly dynamic members, we are ready to make long-lasting impressions. Get ready to pull your resources and contacts to a test to fetch the most radical and extraordinary in this epic race. 
            <br></br>
            As nostalgia hits us hard, we move forward knowing there is something unexpected beyond the horizon as life always has more to offer. Now it’s your chance to venture through this journey to take this path and see what new beginnings have to offer you. Hence, tribe vibe Euphorically presents to you a spectacular, exciting, and energetic event.
            Make sure not to miss all the fun and frolic and be on time for all the sessions. 
            Let the good times roll! And join us on the day.
            </div>
            <TimeLine/>
        </div>
    );
}

export default homePage;