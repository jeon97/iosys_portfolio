import test from 'node:test';
import assert from 'node:assert/strict';
import { selectCompany } from './companySelection.mjs';

test('both lists use the selected company and expose only form fields', async () => {
  const calls = [];
  const value = await selectCompany('company-demo', async company => {
    calls.push(['employees', company]);
    return [{ id: 'staff-demo', label: '담당자 A', internalNote: 'omit' }];
  }, async company => {
    calls.push(['projects', company]);
    return [{ id: 'project-demo', label: '운영 지원' }];
  });
  assert.deepEqual(calls, [['employees', 'company-demo'], ['projects', 'company-demo']]);
  assert.deepEqual(value.employeeOptions, [{ id: 'staff-demo', label: '담당자 A' }]);
  assert.equal(value.employee, 'staff-demo');
  assert.equal(value.project, null);
});
test('empty lists clear dependent selections', async () => {
  const value = await selectCompany('company-empty', async () => [], async () => []);
  assert.equal(value.employee, null);
  assert.equal(value.project, null);
});
test('loading failure is propagated to the caller', async () => {
  await assert.rejects(selectCompany('company-demo', async () => {
    throw new Error('unavailable');
  }, async () => []), /unavailable/);
});
