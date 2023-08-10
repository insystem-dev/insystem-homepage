import React from 'react';
import TagWrapper from './postTag.style';

const PostTag = ({
    type
}: any) => {
    return (
        <TagWrapper>
            {type === 'new' &&
                'NEW'}
        </TagWrapper>
    )
};

export default PostTag;