# FSD 마이그레이션 가이드

## 폴더 구조

```
src/
├── shared/              # 모든 레이어가 공유하는 코드
│   ├── ui/              # 기본 UI 컴포넌트 (Button, Input 등)
│   ├── lib/             # 유틸 함수, API 클라이언트
│   ├── config/          # 설정 (메뉴, 상수)
│   ├── types/           # 공유 타입
│   └── constants/       # 상수값
│
├── entities/            # 비즈니스 도메인 모델
│   ├── notice/
│   │   ├── model/       # 타입, 초기 데이터
│   │   └── ui/          # (선택) 엔티티 자체를 표시하는 UI
│   └── user/
│
├── features/            # 사용자 기능/페이지
│   ├── notice/
│   │   ├── ui/          # 공지사항 기능 UI (NoticePage, WritePage)
│   │   ├── api/         # API 훅 (useBoardFetch)
│   │   └── model/       # 상태 관리
│   └── auth/
│
├── widgets/             # 조합된 위젯 (Navbar, Footer)
│   ├── navbar/
│   └── footer/
│
├── pages/               # 실제 라우트 페이지 (기존 유지)
├── pages/api/           # 백엔드 API (기존 유지)
└── pages-fsd/           # (선택) FSD 방식의 샘플 페이지
```

## 임포트 방식

### 기존 방식 (변경 전)

```typescript
import { NoticePage } from "@/common/components/organisms";
import { useBoardFetch } from "@/hooks/api/notice";
```

### FSD 방식 (변경 후)

```typescript
import { NoticePage } from "@/features/notice/ui";
import { useBoardFetch } from "@/features/notice/api";
```

## 마이그레이션 계획

1. ✅ 폴더 구조 생성
2. ✅ 공유 파일 분리 (shared)
3. ✅ 엔티티 정의 (entities)
4. ✅ 기능별 구성 (features)
5. ⏳ 실제 컴포넌트 이동 (단계적 진행)
6. ⏳ Import 경로 수정
7. ⏳ 기존 폴더 정리

## 다음 단계

기존 pages의 임포트 경로를 새로운 FSD 구조로 수정하세요.
