import React from 'react';
import profile1 from './images/profil1.jpg';


const SingleComment = () => {
    return (
        <div className='comment'>
                <a href="/" className='avatar'>
                    <img src={profile1} alt="profile picture" />
                </a>
                <div className='content'>
                    <a href="/" className='author'>
                        Sarah
                    </a>
                    <div className='metadata'>
                        <span className='date'>
                            Today at 5:00PM
                        </span>
                    </div>
                    <div className='text'>
                        it's amazing!
                    </div>
                </div>
            </div>
    )
}

export default SingleComment;