# 구현 사례 목차

원본에서 확인한 업무 흐름을 기준으로 먼저 6개 프로젝트의 24개 사례를 작성하고, 경력기술서 대조 후 6개를 추가하여 총 30개 재작성 사례를 정리하였습니다. 각 링크는 독립 작성한 공개 예제이며 원본 회사 코드로 연결되지 않습니다.

## 실시간 평가 플랫폼

| 사례 | 코드 | 테스트 |
|---|---|---|
| 시험 설정 JSON의 이중 직렬화 처리 | [SettingsListReader](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/main/java/com/portfolio/assessment/eventworker/cases/SettingsListReader.java) | [검증 코드](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/test/java/com/portfolio/assessment/eventworker/cases/SettingsListReaderTest.java) |
| 중첩 답안 요청에서 현재·이전 문항 분리 | [AnswerEnvelopeReader](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/main/java/com/portfolio/assessment/eventworker/cases/AnswerEnvelopeReader.java) | [검증 코드](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/test/java/com/portfolio/assessment/eventworker/cases/AnswerEnvelopeReaderTest.java) |
| 캐시 반영 시도 후 영속 저장 순서 구성 | [CacheThenDatabase](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/main/java/com/portfolio/assessment/eventworker/cases/CacheThenDatabase.java) | [검증 코드](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/test/java/com/portfolio/assessment/eventworker/cases/CacheThenDatabaseTest.java) |
| 최신 활동 로그의 개수 제한과 만료 처리 | [RecentLogWriter](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/main/java/com/portfolio/assessment/eventworker/cases/RecentLogWriter.java) | [검증 코드](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/samples/event-worker/src/test/java/com/portfolio/assessment/eventworker/cases/RecentLogWriterTest.java) |

[처리 과정](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/docs/CASE-STUDIES.md) · [원본과 예제 구분](https://github.com/jeon97/iosys_realtime_assessment_platform/blob/main/docs/SOURCE-SCOPE.md)

## 온라인 시험·문항 관리

| 사례 | 코드 | 테스트 |
|---|---|---|
| 시험 정보·검색 건수·결과 목록 조합 | [ExamStatisticsQuery](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/main/java/com/portfolio/exam/cases/ExamStatisticsQuery.java) | [검증 코드](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/test/java/com/portfolio/exam/cases/ExamStatisticsQueryTest.java) |
| 위원 수에 따른 연속 문항 구간 배정 | [ContiguousReviewerAssignment](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/main/java/com/portfolio/exam/cases/ContiguousReviewerAssignment.java) | [검증 코드](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/test/java/com/portfolio/exam/cases/ContiguousReviewerAssignmentTest.java) |
| 출제계획의 분야·유형·문항을 검토계획으로 이관 | [ReviewPlanMigration](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/main/java/com/portfolio/exam/cases/ReviewPlanMigration.java) | [검증 코드](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/test/java/com/portfolio/exam/cases/ReviewPlanMigrationTest.java) |
| 엑셀 문항번호로 검토 대상 재구성 | [QuestionNumberImport](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/main/java/com/portfolio/exam/cases/QuestionNumberImport.java) | [검증 코드](https://github.com/jeon97/iosys_online_test_platform/blob/main/samples/exam-workflow/src/test/java/com/portfolio/exam/cases/QuestionNumberImportTest.java) |

[처리 과정](https://github.com/jeon97/iosys_online_test_platform/blob/main/docs/CASE-STUDIES.md) · [원본과 예제 구분](https://github.com/jeon97/iosys_online_test_platform/blob/main/docs/SOURCE-SCOPE.md)

## 글쓰기 지원 플랫폼

| 사례 | 코드 | 테스트 |
|---|---|---|
| 기관별 세션 유지시간 적용 | [SessionTimeoutPolicy](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/main/java/com/portfolio/writing/cases/SessionTimeoutPolicy.java) | [검증 코드](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/test/java/com/portfolio/writing/cases/SessionTimeoutPolicyTest.java) |
| 로그인 활동에서 계정 식별 정보 추출 | [LoginActivityProjection](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/main/java/com/portfolio/writing/cases/LoginActivityProjection.java) | [검증 코드](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/test/java/com/portfolio/writing/cases/LoginActivityProjectionTest.java) |
| 로그 조회 작업 자체의 권한 확인과 기록 | [AuditedLogQuery](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/main/java/com/portfolio/writing/cases/AuditedLogQuery.java) | [검증 코드](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/test/java/com/portfolio/writing/cases/AuditedLogQueryTest.java) |
| 달력 연도 기준의 로그 보존기간 계산 | [CalendarRetention](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/main/java/com/portfolio/writing/cases/CalendarRetention.java) | [검증 코드](https://github.com/jeon97/iosys_writing_center/blob/main/samples/operations-core/src/test/java/com/portfolio/writing/cases/CalendarRetentionTest.java) |

[처리 과정](https://github.com/jeon97/iosys_writing_center/blob/main/docs/CASE-STUDIES.md) · [원본과 예제 구분](https://github.com/jeon97/iosys_writing_center/blob/main/docs/SOURCE-SCOPE.md)

## 자격시험 운영 시스템

| 사례 | 코드 | 테스트 |
|---|---|---|
| 채점 확정 취소 시 관련 데이터 복구 | [GradingReset](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/main/java/com/portfolio/certification/cases/GradingReset.java) | [검증 코드](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/test/java/com/portfolio/certification/cases/GradingResetTest.java) |
| 대량 접수자 결과의 구간 분할 조회 | [WindowedResultReader](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/main/java/com/portfolio/certification/cases/WindowedResultReader.java) | [검증 코드](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/test/java/com/portfolio/certification/cases/WindowedResultReaderTest.java) |
| 이미 마감한 시험 결과의 재생성 차단 | [ClosedResultGate](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/main/java/com/portfolio/certification/cases/ClosedResultGate.java) | [검증 코드](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/test/java/com/portfolio/certification/cases/ClosedResultGateTest.java) |
| 시험실 일괄 종료시간 변경의 시작 상태 확인 | [RoomScheduleChange](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/main/java/com/portfolio/certification/cases/RoomScheduleChange.java) | [검증 코드](https://github.com/jeon97/iosys_certification_test_system/blob/main/samples/exam-operations/src/test/java/com/portfolio/certification/cases/RoomScheduleChangeTest.java) |

[처리 과정](https://github.com/jeon97/iosys_certification_test_system/blob/main/docs/CASE-STUDIES.md) · [원본과 예제 구분](https://github.com/jeon97/iosys_certification_test_system/blob/main/docs/SOURCE-SCOPE.md)

## 교육사업 운영 시스템

| 사례 | 코드 | 테스트 |
|---|---|---|
| 전체 모집 정원과 물리 좌석 조건 분리 | [EnrollmentCapacityDecision](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/main/java/com/portfolio/education/cases/EnrollmentCapacityDecision.java) | [검증 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/test/java/com/portfolio/education/cases/EnrollmentCapacityDecisionTest.java) |
| 예산 원안과 선택한 변경 이력의 상세 조회 | [BudgetDetailQuery](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/main/java/com/portfolio/education/cases/BudgetDetailQuery.java) | [검증 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/test/java/com/portfolio/education/cases/BudgetDetailQueryTest.java) |
| 정산 반려 안내와 승인 후 값 갱신 구분 | [SettlementActionPlan](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/main/java/com/portfolio/education/cases/SettlementActionPlan.java) | [검증 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/test/java/com/portfolio/education/cases/SettlementActionPlanTest.java) |
| 보고서 미리보기와 출력 요청 이력 구분 | [ReportPreviewOrPrint](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/main/java/com/portfolio/education/cases/ReportPreviewOrPrint.java) | [검증 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/samples/business-operations/src/test/java/com/portfolio/education/cases/ReportPreviewOrPrintTest.java) |

[처리 과정](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/CASE-STUDIES.md) · [원본과 예제 구분](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/SOURCE-SCOPE.md)

## 범용 AI API

| 사례 | 코드 | 테스트 |
|---|---|---|
| 업무별 설명을 받는 공통 응답 형식 구성 | [descriptive_contract](https://github.com/jeon97/iosys_ai_api/blob/main/app/cases/descriptive_contract.py) | [검증 코드](https://github.com/jeon97/iosys_ai_api/blob/main/tests/test_source_cases.py) |
| JSON 문법 오류만 제한적으로 재시도 | [parsing_retry](https://github.com/jeon97/iosys_ai_api/blob/main/app/cases/parsing_retry.py) | [검증 코드](https://github.com/jeon97/iosys_ai_api/blob/main/tests/test_source_cases.py) |
| 저장된 결과 행을 이용한 일괄 평가 재개 | [resume_rows](https://github.com/jeon97/iosys_ai_api/blob/main/app/cases/resume_rows.py) | [검증 코드](https://github.com/jeon97/iosys_ai_api/blob/main/tests/test_source_cases.py) |
| 평가 데이터셋의 불필요한 행 제거 | [dataset_filter](https://github.com/jeon97/iosys_ai_api/blob/main/app/cases/dataset_filter.py) | [검증 코드](https://github.com/jeon97/iosys_ai_api/blob/main/tests/test_source_cases.py) |

[처리 과정](https://github.com/jeon97/iosys_ai_api/blob/main/docs/CASE-STUDIES.md) · [원본과 예제 구분](https://github.com/jeon97/iosys_ai_api/blob/main/docs/SOURCE-SCOPE.md)

## 경력기술서 대조 후 추가한 사례 6개

| 프로젝트 | 구현 사례 | 코드·입출력·검증 |
|---|---|---|
| KBI 집합연수 | 문항별 점수 저장과 채점 요약 갱신 | [상세와 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/TRAINING-GRADING.md) |
| KBI 집합연수 | 엑셀 전체 행 검증 후 성적 반입 | [상세와 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/TRAINING-GRADING.md) |
| KBI 집합연수 | 관리자·채점자별 완료·취소 | [상세와 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/TRAINING-GRADING.md) |
| KBI 집합연수 | 화면 점수 반올림·배점 제한 | [상세와 코드](https://github.com/jeon97/iosys_education_business_operations_system/blob/main/docs/TRAINING-GRADING.md) |
| 온라인 시험 | 수험표의 응시 구분과 사진·약도 선택 | [상세와 코드](https://github.com/jeon97/iosys_online_test_platform/blob/main/docs/REPORT-PRESENTATION.md) |
| 공통 운영 개선 | 회사별 담당자·프로젝트 선택 목록 | [상세와 코드](ADDITIONAL-WORK.md) |

각 상세 문서에서 현재 원본 동작, 개인 기여 확인 수준과 공개 예제의 보완을 구분하였습니다. 앞선 24개를 포함한 재작성 사례는 30개이며, 기존부터 있던 모든 코드 예제 파일을 집계한 수치는 아닙니다.
