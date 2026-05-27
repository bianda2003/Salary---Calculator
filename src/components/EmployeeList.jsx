export default function EmployeeList({ employees, onSelect }) {
  return (
    <div className="grid grid-cols-2 gap-4 mt-10">
      {employees.map((employee) => (
        <button
          key={employee.id}
          onClick={() => onSelect(employee)}
          className="bg-blue-500 hover:bg-blue-600 text-white p-5 rounded-2xl text-lg font-semibold shadow"
        >
          {employee.name}
        </button>
      ))}
    </div>
  );
}