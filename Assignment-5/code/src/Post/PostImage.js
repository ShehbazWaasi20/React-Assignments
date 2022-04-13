import React from 'react';

const PostImage = ({ config }) => {
    const relativeImgURL = `../assets/${config.PostImage}`
    return (
        <div className='postImage'>
            <img src={relativeImgURL} alt={config.description} />
        </div>
    );
};

export default PostImage;