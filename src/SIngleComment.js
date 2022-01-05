import React from 'react';


const SingleComment = (props) => {
    console.log(props)
    return (
        <div className='ui comments'>
            <div className='comment'>
                    <a href="/" className='avatar'>
                        <img src={props.picture} alt="profile picture" />
                    </a>
                    <div className='content'>
                        <a href="/" className='author'>
                            {props.name}
                        </a>
                        <div className='metadata'>
                            <span className='date'>
                                Today at {props.time}PM
                            </span>
                        </div>
                        <div className='text'>
                            {props.comment}
                        </div>
                    </div>
            </div>
        </div>
    )
}

export default SingleComment;