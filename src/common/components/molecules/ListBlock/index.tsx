'use client'

import React from 'react';
import ListBlockWrapper, { IconWrapper } from './listBlock.style';

export type listBlock_ty = {
    id?: any,
    name?: any,
    content_b?: any,
    content_h?: any,
    content_a?: any,
    img?: any,
    title?: any,
    label?: any,
    content?: any,
    icon?: any,
}


const ListBlock = ({
    id,
    name,
    content_b,
    content_h,
    content_a,
    img,
    title,
    label,
    content,
    icon,
    ...props
}: listBlock_ty) => {
    // check icon value and add
    const Icon = icon && (
        <IconWrapper className="icon__wrapper">
            {icon}
        </IconWrapper>
    );

    return (
        <>
            { id || content_b || content_h || content_a || img ?
                <ListBlockWrapper className="list__block-col" {...props}>
                    <div className={`${name}`} >
                        {content_b}
                        <span>
                            {content_h}
                        </span>
                        {content_a}
                    </div>
                </ListBlockWrapper>
                :
                <ListBlockWrapper className="list__block-row" {...props}>
                    {Icon}
                    <span className="list__block-tit">{title}</span>
                    <span className="list__block-label">{label}</span>
                    <span className="list__block-cont">
                        {content}
                    </span>
                </ListBlockWrapper>
            }
        </>

    );
};

export default ListBlock;