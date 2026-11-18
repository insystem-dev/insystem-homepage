// 점검 기간 직원 우회 접속용 설정.
// 우회 키는 환경변수 MAINTENANCE_BYPASS_KEY 로만 관리한다(코드/저장소에 두지 않는다).
// 값이 비어 있으면 우회 기능은 꺼진 상태가 된다.
export const STAFF_COOKIE = "insystem_staff";
export const STAFF_QUERY = "staff";

export function isStaffKey(value: string | null | undefined): boolean {
  const key = process.env.MAINTENANCE_BYPASS_KEY;
  return !!key && value === key;
}
