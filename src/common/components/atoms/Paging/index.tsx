import React from 'react';
import Pagination from 'react-js-pagination';
import PageWrapper from './paging.style';
import ArrowRight from '../../../assets/fonts/arrow_right.svg';
import ArrowLeft from '../../../assets/fonts/arrow_left.svg';
import ArrowFront from '../../../assets/fonts/arrow_first_page.svg';
import ArrowNext from '../../../assets/fonts/arrow_last_page.svg';

type paging_ty = {
    page?: any,
    count?: any,
    setPage?: any,
    pageWrap?: any
}


export const Paging = ({
    page,
    count,
    setPage,
    pageWrap,
}: paging_ty) => {
    return (
        <PageWrapper {...pageWrap}>
            <Pagination
                activePage={page}
                itemsCountPerPage={10}
                totalItemsCount={count}
                pageRangeDisplayed={5}
                firstPageText={'❮❮'}
                lastPageText={'❯❯'}
                prevPageText={'❮'}
                nextPageText={'❯'}
                onChange={setPage}
            />
        </PageWrapper>
    )
};