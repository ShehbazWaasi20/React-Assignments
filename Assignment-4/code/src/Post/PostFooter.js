import React from 'react';

const PostFooter = ({ config }) => {
    return (
        <div className='PostFooter'>
            <div className='Postdetail'>
                <div className='LikeShareWrapper'>
                    <div className='LikeShareContainer'>
                        <button className='likebtn'><img className='tap' src="../assets/like.png" alt="like img" /></button>
                        <button className='ShareBtn'><img className='share' src="../assets/share.png" alt="share btn" /></button>
                    </div>
                    <div className='Likes'>{config.likes}</div>
                </div>
                <div className='PostedON'>{config.date}</div>
            </div>
            <div className='PostCaption'>{config.description}</div>
        </div>
    );
};

export default PostFooter;
