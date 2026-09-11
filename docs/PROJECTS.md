# 프로젝트별 상세

구현 설명은 원본 자료의 확인 범위에 맞춰 작성하였습니다. 공개 예제에서 추가한 규칙은 각 저장소의 근거 문서에 구분하였습니다.

## 실시간 평가 플랫폼

공통 모델, 응시자 API, 인증·Gateway, 메시지 워커와 관리자 기능을 담당하였습니다. Java 17 · WebFlux · RabbitMQ · Redis · PostgreSQL 등을 사용하는 시스템의 업무 흐름을 다음 사례로 정리하였습니다.

- 시험 설정 JSON의 이중 직렬화 처리: 원본은 첫 번째 파싱이 실패하면 내부 문자열을 다시 읽고, 해석할 수 없는 설정에는 빈 목록을 반환합니다.
- 중첩 답안 요청에서 현재·이전 문항 분리: 원본 답안 처리에는 현재 문항과 진행 상태 외에 이전 문항 정보가 전달되는 분기도 존재합니다.
- 캐시 반영 시도 후 영속 저장 순서 구성: 캐시 오류를 처리하는 분기와 DB 저장 순서를 분리해 구성하였습니다.
- 최신 활동 로그의 개수 제한과 만료 처리: 장기 보존 데이터와 최근 조회용 목록을 구분한 기능입니다.

[상세 저장소](https://github.com/jeon97/iosys_realtime_assessment_platform) · [구현 사례](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/docs/CASE-STUDIES.md) · [확인 근거](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/docs/SOURCE-SCOPE.md)

## 온라인 시험·문항 관리

시험 결과·부정행위 통계, 검토계획, 선정위원 배정과 외부 API를 담당하였습니다. Java · Spring MVC · MyBatis · JSP를 사용하는 시스템의 업무 흐름을 다음 사례로 정리하였습니다.

- 시험 정보·검색 건수·결과 목록 조합: 운영 화면에서 시험 정보와 검색 결과를 함께 표시하는 처리입니다.
- 위원 수에 따른 연속 문항 구간 배정: 나머지는 앞 순서의 위원부터 한 문항씩 더 배정하고, 문항 순서를 유지한 연속 구간을 각 위원에게 연결하였습니다.
- 출제계획의 분야·유형·문항을 검토계획으로 이관: 원본은 이 과정을 명시적인 트랜잭션으로 묶고 실패 시 롤백합니다.
- 엑셀 문항번호로 검토 대상 재구성: 중간 오류가 발생하면 삭제와 등록을 함께 롤백합니다.

[상세 저장소](https://github.com/jeon97/iosys_online_test_platform) · [구현 사례](https://github.com/jeon97/iosys_online_test_platform/blob/main/docs/CASE-STUDIES.md) · [확인 근거](https://github.com/jeon97/iosys_online_test_platform/blob/main/docs/SOURCE-SCOPE.md)

## 글쓰기 지원 플랫폼

기관 로그인·SSO, 세션, 접속·활동 로그와 콘텐츠 관리를 담당하였습니다. Java · Spring MVC · MyBatis · JSP를 사용하는 시스템의 업무 흐름을 다음 사례로 정리하였습니다.

- 기관별 세션 유지시간 적용: 원본은 Controller 안의 여러 기관 조건문에서 세션 시간을 설정합니다.
- 로그인 활동에서 계정 식별 정보 추출: 일반 활동과 로그인 활동을 구분하고, 로그인 로그에서는 저장된 요청 파라미터의 JSON을 읽어 사용자 식별 정보를 목록에 표시하도록 구성하였습니다.
- 로그 조회 작업 자체의 권한 확인과 기록: 권한 확인 후 작업 기록을 남기고 실제 로그 조회를 수행하는 순서입니다.
- 달력 연도 기준의 로그 보존기간 계산: 단순히 365일을 곱한 기간과는 윤년 경계에서 차이가 있습니다.

[상세 저장소](https://github.com/jeon97/iosys_writing_center) · [구현 사례](https://github.com/jeon97/iosys_writing_center/blob/main/docs/CASE-STUDIES.md) · [확인 근거](https://github.com/jeon97/iosys_writing_center/blob/main/docs/SOURCE-SCOPE.md)

## 자격시험 운영 시스템

CBT 모니터링·채점, 시행결과, 출제계획과 전문가·설문 관리를 담당하였습니다. Java · Spring MVC · MyBatis/iBATIS · Nexacro를 사용하는 시스템의 업무 흐름을 다음 사례로 정리하였습니다.

- 채점 확정 취소 시 관련 데이터 복구: 원본은 해당 작업을 하나의 트랜잭션으로 처리합니다.
- 대량 접수자 결과의 구간 분할 조회: 원본은 5,000건 단위의 조회 결과를 모아 화면에 전달합니다.
- 이미 마감한 시험 결과의 재생성 차단: 원본은 이미 마감된 결과가 확인되면 합격·자격 관련 자료를 다시 생성하기 전에 업무 오류로 중단합니다.
- 시험실 일괄 종료시간 변경의 시작 상태 확인: 개인별 시험시간 연장과 시험실 계획시간 변경은 다른 조건으로 처리합니다.

[상세 저장소](https://github.com/jeon97/iosys_certification_test_system) · [구현 사례](https://github.com/jeon97/iosys_certification_test_system/blob/main/docs/CASE-STUDIES.md) · [확인 근거](https://github.com/jeon97/iosys_certification_test_system/blob/main/docs/SOURCE-SCOPE.md)

## 교육사업 운영 시스템

모집·신청, 기관 운영, 예산 변경, 정산과 보고서를 담당하였습니다. Java · Spring MVC · MyBatis · JSP를 사용하는 시스템의 업무 흐름을 다음 사례로 정리하였습니다.

- 전체 모집 정원과 물리 좌석 조건 분리: 시험실을 사용하는 유형에서는 기관의 수용 인원을 추가 확인하여 전체 모집이 무제한이어도 좌석 조건을 적용하도록 구성하였습니다.
- 예산 원안과 선택한 변경 이력의 상세 조회: 현재 예산 세부항목은 항상 조회하고, 선택한 변경 이력이 있을 때 해당 요청의 운영비 상세를 추가 조회하여 함께 반환하도록 구성하였습니다.
- 정산 반려 안내와 승인 후 값 갱신 구분: 상태 변경 결과에 따라 트랜잭션을 커밋하거나 롤백합니다.
- 보고서 미리보기와 출력 요청 이력 구분: 단순 조회와 출력 요청을 구분한 처리입니다.

[상세 저장소](https://github.com/jeon97/iosys_education_business_operations_system) · [구현 사례](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/CASE-STUDIES.md) · [확인 근거](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/SOURCE-SCOPE.md)

## 범용 AI API

FastAPI·Ollama 호출, 입력 정제, JSON 파싱·재시도와 일괄 평가를 담당하였습니다. Python · FastAPI · Ollama · SQLite를 사용하는 시스템의 업무 흐름을 다음 사례로 정리하였습니다.

- 업무별 설명을 받는 공통 응답 형식 구성: 업무별로 API를 늘리는 대신 호출자가 원하는 필드와 설명을 전달하고, 서버가 모델에 사용할 시스템 메시지와 사용자 메시지를 조합하도록 구현하였습니다.
- JSON 문법 오류만 제한적으로 재시도: 성공 응답에는 시도 횟수를 포함합니다.
- 저장된 결과 행을 이용한 일괄 평가 재개: 원본은 행 인덱스가 10의 배수인 처리 지점과 종료 시점에 결과 파일을 저장합니다.
- 평가 데이터셋의 불필요한 행 제거: 문자열이 아닌 값, 식별자만 있는 데이터와 정제 후 내용이 너무 짧은 행을 제외하고, HTML의 스크립트·스타일·화면 요소를 제거하여 본문을 추출하도록 구성하였습니다.

[상세 저장소](https://github.com/jeon97/iosys_ai_api) · [구현 사례](https://github.com/jeon97/iosys_ai_api/blob/main/docs/CASE-STUDIES.md) · [확인 근거](https://github.com/jeon97/iosys_ai_api/blob/main/docs/SOURCE-SCOPE.md)

## 추가 참여 프로젝트와 공통 업무

[전체 참여 목록](CAREER-COVERAGE.md)에서 21개 경력 항목을 확인할 수 있습니다. [운영 화면 개선과 현장 지원](ADDITIONAL-WORK.md)은 별도 상세 저장소가 없는 공통 업무로 정리하였습니다.
