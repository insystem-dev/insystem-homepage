import React from 'react';
import { PageHeader } from '../../../common/components/organisms/PageHeader';
import HealthCarePage from '../../../common/components/organisms/HealthcarePage/index';

const Healthcare = () => {
    return (
        <>
            <PageHeader title="제공 서비스" subTitle="디지털 헬스케어 분야" variant="health" />
            <HealthCarePage className="HealthCare">
                <p> 페이지 준비 중입니다. </p>
            </HealthCarePage>
        </>
    );
}

export default Healthcare;
