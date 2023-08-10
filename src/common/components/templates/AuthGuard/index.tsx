import { useSession } from "next-auth/react";
import React, { useEffect } from "react";
import { setToken, setUserId } from "../../../../lib/api";

const AuthGuard = ({ children }: any) => {
  const { status, data }: any = useSession();

  useEffect(() => {
    if (data) {
      setUserId(data.userId);
      setToken(data.accessToken);
    }
  }, [data]);

  if (status === "loading") {
    return <div>페이지를 불러오는 중입니다.</div>;
  }

  return <>{children}</>;
};

export default AuthGuard;
