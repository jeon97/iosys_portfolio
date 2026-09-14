# 프로젝트별 구현

## 실시간 평가 플랫폼

기존 Java 시스템의 Spring Boot 전환에 참여하여 응시자 API·인증·Gateway·이벤트 워커를 개발하였습니다. 시험계획·응시자·답안 모델과 Repository를 공통 모듈에서 관리하였습니다.

답안 요청의 내부 data 객체를 해석하고 메시지를 발행하였습니다. 워커는 캐시 반영 시도 후 DB 저장을 실행하도록 구성하였으며 최근 활동 로그는 Redis 목록에서 개수를 제한하였습니다.

[저장소](https://github.com/jeon97/iosys_realtime_assessment_platform) · [코드·입출력·테스트](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/docs/CASE-STUDIES.md)

## 온라인 시험·문항 관리

시험 결과·부정행위 통계, 응시자 조회, 문항 검토계획과 선정위원 배정을 개발하였습니다. 외부 홈페이지와 연결하는 인증·평가·오답노트 API도 개발하였습니다.

검색 건수·시험 정보·페이지 목록을 함께 반환하고, 계획의 분야·유형·문항 변경을 트랜잭션으로 처리하였습니다. 자동 배정은 몫·나머지로 위원별 연속 문항 구간을 계산하였습니다.

[저장소](https://github.com/jeon97/iosys_online_test_platform) · [코드·입출력·테스트](https://github.com/jeon97/iosys_online_test_platform/blob/main/docs/CASE-STUDIES.md)

## 대학 글쓰기 지원

기관별 로그인·SSO, 세션, 접속·활동 로그와 게시판 기능을 개발하였습니다. 학사 사용자와 강좌 검색, 연계 DB View 설계와 기관별 결과 화면도 담당하였습니다.

권한·동의 상태에 따라 진입 화면을 결정하고 기관 설정에 맞춰 세션 시간을 적용하였습니다. 로그 조회 행위 자체를 기록하고 달력 연도를 기준으로 보존기간을 계산하였습니다.

[저장소](https://github.com/jeon97/iosys_writing_center) · [코드·입출력·테스트](https://github.com/jeon97/iosys_writing_center/blob/main/docs/CASE-STUDIES.md)

## 자격시험 운영

CBT 시험실 모니터링·시간 변경·재시작, 채점과 시행결과 처리, 출제계획과 전문가·설문 관리 기능을 개발하였습니다.

확정 취소 시 성적 삭제와 응시 상태 초기화를 같은 트랜잭션으로 처리하였습니다. 이미 마감한 일정은 결과 재생성을 차단하고 대량 접수자 목록은 5,000건씩 조회하여 합산하였습니다.

[저장소](https://github.com/jeon97/iosys_certification_test_system) · [코드·입출력·테스트](https://github.com/jeon97/iosys_certification_test_system/blob/main/docs/CASE-STUDIES.md)

## 교육사업 운영·집합연수

모집·신청, 기관 운영, 예산 변경, 보조금·정산, 안내 메일과 보고서를 개발하였습니다. 집합연수 프로젝트에서는 주관식 채점과 관리자 화면을 개발·개선하였습니다.

신청 정원과 시험실 좌석을 나누어 확인하고 예산 원안과 선택한 변경 이력을 함께 조회하였습니다. 집합연수는 엑셀 전체 행 검증 후 성적 반입, 문항 저장 후 요약 집계와 권한별 완료·취소를 처리하였습니다.

[저장소](https://github.com/jeon97/iosys_education_business_operations_system) · [코드·입출력·테스트](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/CASE-STUDIES.md)

## 범용 AI API

역할 지시문·입력·응답 필드 설명을 받아 Ollama를 호출하는 FastAPI를 개발하였습니다. 입력 정제, JSON 파싱·재시도, SQLite 로그와 VOC 평가 배치를 구현하였습니다.

JSON 문법 오류에 최초 호출을 포함해 최대 3회 호출을 적용하였습니다. 배치는 결과 파일의 점수 열로 완료 여부를 판단하고 오류가 난 행을 남겨 다음 실행에서 재처리하도록 구성하였습니다.

[저장소](https://github.com/jeon97/iosys_ai_api) · [코드·입출력·테스트](https://github.com/jeon97/iosys_ai_api/blob/main/docs/CASE-STUDIES.md)

[전체 참여 프로젝트](CAREER-COVERAGE.md) · [운영 개선·현장 지원](ADDITIONAL-WORK.md)
