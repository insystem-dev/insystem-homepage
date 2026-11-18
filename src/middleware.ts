import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import {
  STAFF_COOKIE,
  STAFF_QUERY,
  isStaffKey,
} from "@/shared/lib/maintenance";

// 점검 기간 동안 모든 경로를 메인("/")의 점검 안내 페이지로 보낸다.
// 직원은 `/?staff=<MAINTENANCE_BYPASS_KEY>` 로 한 번 접속하면 쿠키가 생겨
// 이후 정상 사이트를 볼 수 있다.
// 사이트를 다시 열 때는 이 파일을 삭제하면 된다.
export function middleware(request: NextRequest) {
  const { nextUrl } = request;

  // 우회 키로 접속: 쿠키를 심고 키가 주소창에 남지 않도록 쿼리를 제거해 이동
  if (isStaffKey(nextUrl.searchParams.get(STAFF_QUERY))) {
    const url = nextUrl.clone();
    const key = url.searchParams.get(STAFF_QUERY) as string;
    url.searchParams.delete(STAFF_QUERY);
    const response = NextResponse.redirect(url);
    response.cookies.set(STAFF_COOKIE, key, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return response;
  }

  // 우회 쿠키가 있으면 통과
  if (isStaffKey(request.cookies.get(STAFF_COOKIE)?.value)) {
    return NextResponse.next();
  }

  if (nextUrl.pathname === "/") {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  // Next 내부 리소스, 폰트, 파비콘, 정적 파일(확장자가 있는 경로)은 제외
  matcher: ["/((?!_next/|fonts/|favicon.ico|.*\\.[a-zA-Z0-9]+$).*)"],
};
