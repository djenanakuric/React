import React from 'react';
import ReactDom from 'react-dom';
import SingleComment from './SIngleComment';

const App = () => {
    return(
        <div className = 'ui comments'>
            <SingleComment />
            <SingleComment />
            <SingleComment />
        </div>
    )
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
)