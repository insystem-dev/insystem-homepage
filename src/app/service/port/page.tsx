import React from 'react';
import { PageHeader } from '../../../common/components/organisms/PageHeader';
import PortPage from '../../../common/components/organisms/PortPage';

const portPage = () => {
    return (
        <>
            <PageHeader title="제공 서비스" subTitle="항만물류운송관리 시스템" variant="port" />
            <PortPage />
        </>
    );
}

export default portPage;
