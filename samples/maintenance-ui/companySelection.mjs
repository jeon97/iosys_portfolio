// Rewritten explanation of the company -> employee/project selection in a support form.
// The original JSP contribution is confirmed only at file metadata level.
export async function selectCompany(company, loadEmployees, loadProjects) {
  const employees = await loadEmployees(company);
  const projects = await loadProjects(company);
  return {
    company,
    employeeOptions: employees.map(({ id, label }) => ({ id, label })),
    projectOptions: projects.map(({ id, label }) => ({ id, label })),
    employee: employees[0]?.id ?? null,
    project: null,
  };
}
