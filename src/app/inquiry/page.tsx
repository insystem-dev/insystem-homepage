import React from 'react';
import InquiryPage from '../../common/components/organisms/InquiryPage';
import { PageHeader } from '../../common/components/organisms/PageHeader';

const Inquiry = () => {
    return (
        <>
            <PageHeader title="문의하기" subTitle="INQUIRY" variant="inquiry" />
            <InquiryPage />
        </>
    )
}

export default Inquiry;