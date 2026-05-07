const employees = [
  { id: 101, name: "Alice", salary: 6000 },
  { id: 102, name: "Bob", salary: 3500 },
  { id: 103, name: "Charlie", salary: 5200 },
];

function taxLogic(salary) {
  if (salary >= 5000) {
    return 0.2;
  } else {
    return 0.1;
  }
}

function calculatePayroll(employees, taxCallback)
 {
  const processedEmployees = employees.map((employee) => {
    const taxRate = taxCallback(employee.salary);
    const taxAmount = employee.salary * taxRate;
    const netSalary = employee.salary - taxAmount;
    const status = netSalary > 4000 ? "Premium" : "Standard";

    return {
      ...employee,
      netSalary: netSalary,
      status: status,
    };
  });

  const totalPayout = processedEmployees.reduce((total, employees) => {
    return total + employees.netSalary;
  }, 0);

  console.log(
    `Payroll Processed: Total Net Payout is $${totalPayout} for ${processedEmployees.length} employees.`,
  );

  setTimeout(()=>{
    console.log(processedEmployees);
  },2000);
}

calculatePayroll(employees, taxLogic);