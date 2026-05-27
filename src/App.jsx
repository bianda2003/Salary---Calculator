import { useState } from "react";
import employees from "./data/employees";
import EmployeeList from "./components/EmployeeList";
import SalaryForm from "./components/SalaryForm";
import SamanthaForm from "./components/SamanthaForm";
import PadmaForm from "./components/PadmaForm";

export default function App() {

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (

    <div className="min-h-screen p-10 bg-gray-100">

      <h1 className="text-6xl font-bold text-center text-blue-600 mb-10">
        Salary Calculator
      </h1>

      {!selectedEmployee ? (

        <EmployeeList
          employees={employees}
          onSelect={setSelectedEmployee}
        />

      ) : (

        <div className="bg-white p-8 rounded-3xl shadow-xl">

          <button
            onClick={() => setSelectedEmployee(null)}
            className="bg-black text-white px-5 py-2 rounded-xl mb-6"
          >
            ← Back
          </button>

          <h2 className="text-4xl font-bold mb-8">
            {selectedEmployee.name}
          </h2>

          {selectedEmployee.type === "sarath" && (
            <SalaryForm />
          )}
          {selectedEmployee.type === "samantha" && (
            <SamanthaForm />
          )}
          {selectedEmployee.type === "padma" && (
            <PadmaForm />
          )}

        </div>

      )}

    </div>

  );
}