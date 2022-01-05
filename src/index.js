import React from 'react';
import ReactDom from 'react-dom';
import SingleComment from './SIngleComment';
import profile1 from './images/profil1.jpg';
import profile2 from './images/profil2.jpg';
import profile3 from './images/profil3.jpg';
import USERCARD from './userCard';



const App = () => {
    return(
        <div>
            <USERCARD>
                Hello my name is Sara and I am live in Madrid
            </USERCARD>
            <USERCARD>
                <SingleComment name = 'Alex' time = '5:02' comment = 'Its amayzing!' picture = {profile1}/>
            </USERCARD>  
            <USERCARD>                
                 <SingleComment name = 'Jack' time = '6:02' comment = 'Nice' picture = {profile2}/>
            </USERCARD> 
            <USERCARD>
                <SingleComment name = 'Sara' time = '7:02' comment = 'Cool' picture = {profile3}/>   
            </USERCARD>
        </div>

    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)