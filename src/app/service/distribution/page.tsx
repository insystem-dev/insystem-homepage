import React from "react";
import { PageHeader } from "../../../common/components/organisms/PageHeader";
import DistributePage from "../../../common/components/organisms/DistributePage";

const siPage = () => {
  return (
    <>
      <PageHeader
        title="제공 서비스"
        subTitle="디지털 유통 분야"
        variant="distribution"
      />
      <DistributePage />
    </>
  );
};

export default siPage;
