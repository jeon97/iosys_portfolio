# IOSYS 개발 포트폴리오

Java·Spring 기반 시험·교육 시스템의 백엔드와 운영 화면을 개발하였습니다. 시험 접수, 문항 관리, 응시자 API, 채점·결과 처리, 기관 인증과 예산·정산 업무를 담당하였습니다. Spring Boot 전환 작업에서는 공통 모델·인증·Gateway·이벤트 워커를 개발하였고, 사내 AI 과제에서는 모델 호출 API와 일괄 평가를 구현하였습니다.

## 프로젝트별 담당 업무

| 프로젝트 | 담당 범위 | 기술 | 상세 |
|---|---|---|---|
| 실시간 평가 플랫폼 | 공통 모델, 응시자 API, 인증·Gateway, 메시지 워커와 관리자 기능 | Java 17 · WebFlux · RabbitMQ · Redis · PostgreSQL | [저장소](https://github.com/jeon97/iosys_realtime_assessment_platform) |
| 온라인 시험·문항 관리 | 시험 결과·부정행위 통계, 검토계획, 선정위원 배정과 외부 API | Java · Spring MVC · MyBatis · JSP | [저장소](https://github.com/jeon97/iosys_online_test_platform) |
| 글쓰기 지원 플랫폼 | 기관 로그인·SSO, 세션, 접속·활동 로그와 콘텐츠 관리 | Java · Spring MVC · MyBatis · JSP | [저장소](https://github.com/jeon97/iosys_writing_center) |
| 자격시험 운영 시스템 | CBT 모니터링·채점, 시행결과, 출제계획과 전문가·설문 관리 | Java · Spring MVC · MyBatis/iBATIS · Nexacro | [저장소](https://github.com/jeon97/iosys_certification_test_system) |
| 교육사업 운영 시스템 | 모집·신청, 예산·정산, 보고서와 집합연수 채점 | Java · Spring MVC · MyBatis · JSP | [저장소](https://github.com/jeon97/iosys_education_business_operations_system) |
| 범용 AI API | FastAPI·Ollama 호출, 입력 정제, JSON 파싱·재시도와 일괄 평가 | Python · FastAPI · Ollama · SQLite | [저장소](https://github.com/jeon97/iosys_ai_api) |

## 주요 구현

### Spring Boot 전환과 실시간 답안 처리

응시자 API에서 답안·진행 상태·접속 로그를 처리하고 RabbitMQ로 이벤트를 발행하였습니다. 워커는 Redis에 상태를 반영하고 PostgreSQL에 답안·로그를 저장하도록 구성하였습니다. 캐시 반영 시도 후 DB 저장이 실행되도록 처리 순서를 조정하였습니다.

[전환 과정과 담당 기능](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/docs/MODERNIZATION.md)

### 문항 검토와 시험 결과 처리

출제계획의 분야·유형·문항을 검토계획으로 이관하였습니다. 문항 수의 몫·나머지를 이용해 위원별 연속 문항 구간을 배정하였고, 채점 확정 취소 시 성적 데이터 삭제와 응시 상태 복구를 트랜잭션으로 처리하였습니다.

[검토계획·배정](https://github.com/jeon97/iosys_online_test_platform/blob/main/docs/CASE-STUDIES.md) · [채점·결과 처리](https://github.com/jeon97/iosys_certification_test_system/blob/main/docs/CASE-STUDIES.md)

### 기관 인증·운영 관리와 집합연수 채점

대학별 로그인·SSO와 세션 설정을 연결하고 접속·활동 로그의 조회·삭제·출력 기능을 개발하였습니다. 교육사업에서는 신청 정원, 예산 변경, 정산 상태와 보고서 출력 이력을 처리하였습니다. 집합연수에서는 주관식 점수 저장, 엑셀 성적 반입과 채점 완료·취소 기능을 개발·개선하였습니다.

[기관 인증·로그](https://github.com/jeon97/iosys_writing_center/blob/main/docs/CASE-STUDIES.md) · [교육사업](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/CASE-STUDIES.md) · [집합연수 채점](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/TRAINING-GRADING.md)

### 범용 AI API와 일괄 평가

역할 지시문·입력·응답 필드 설명을 받아 Ollama를 호출하는 FastAPI를 구현하였습니다. JSON 문법 오류에 최대 3회 호출을 적용하고, 일괄 평가에서는 저장된 점수로 완료 행을 구분하여 미완료 행을 처리하였습니다.

[API·입력 정제·배치](https://github.com/jeon97/iosys_ai_api/blob/main/docs/CASE-STUDIES.md)

## 참여 프로젝트와 코드

[전체 참여 프로젝트](docs/CAREER-COVERAGE.md) · [프로젝트 상세](docs/PROJECTS.md) · [코드 예제 목록](docs/EXAMPLE-CATALOG.md) · [운영 개선·현장 지원](docs/ADDITIONAL-WORK.md)

코드는 업무 처리 흐름을 별도로 작성한 예제이며 회사 운영 코드와 데이터는 포함하지 않습니다. [예제 테스트](docs/VALIDATION.md)
