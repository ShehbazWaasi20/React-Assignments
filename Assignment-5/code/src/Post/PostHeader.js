import React from 'react';

const PostHeader = ({ config }) => {
    return (
        <div className='postHeader'>
            <div className='PostTitleWrapper'>
                <div className='PostTitle'>{config.name || "" }</div>
                <div className='PostLocation'>{config.location || ""}</div>
            </div>
            <div className='PostAction'>...</div>
        </div>
    );
};

export default PostHeader;
