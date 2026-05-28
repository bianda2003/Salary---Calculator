import { useState } from "react";

import employees from "./data/employees";

import EmployeeList from "./components/EmployeeList";

import SalaryForm from "./components/SalaryForm";
import SamanthaForm from "./components/SamanthaForm";
import PadmaForm from "./components/PadmaForm";
import NilukaForm from "./components/NilukaForm";
import ErandiForm from "./components/ErandiForm";
import PriyankaForm from "./components/PriyankaForm";

export default function App() {

  const [selectedEmployee, setSelectedEmployee] = useState(null);

  return (

    <div className="min-h-screen bg-gray-100 p-4 sm:p-8">

      {/* TITLE */}

      <h1
        className="
          text-3xl
          sm:text-5xl
          font-bold
          text-center
          text-blue-600
          mb-8
        "
      >
        Salary Calculator
      </h1>

      {/* EMPLOYEE LIST */}

      {!selectedEmployee ? (

        <EmployeeList
          employees={employees}
          onSelect={setSelectedEmployee}
        />

      ) : (

        <div
          className="
            bg-white
            p-4
            sm:p-8
            rounded-3xl
            shadow-xl
            max-w-4xl
            mx-auto
          "
        >

          {/* BACK BUTTON */}

          <button
            onClick={() => setSelectedEmployee(null)}
            className="
              bg-black
              text-white
              px-5
              py-2
              rounded-xl
              mb-6
              w-full
              sm:w-auto
            "
          >
            ← Back
          </button>

          {/* EMPLOYEE NAME */}

          <h2
            className="
              text-2xl
              sm:text-4xl
              font-bold
              mb-8
              break-words
            "
          >
            {selectedEmployee.name}
          </h2>

          {/* FORMS */}

          {selectedEmployee.type === "sarath" && (
            <SalaryForm />
          )}

          {selectedEmployee.type === "samantha" && (
            <SamanthaForm />
          )}

          {selectedEmployee.type === "padma" && (
            <PadmaForm />
          )}

          {selectedEmployee.name === "Niluka" && (
            <NilukaForm />
          )}

          {selectedEmployee.name === "Erandi Perera" && (
            <ErandiForm />
          )}

          {selectedEmployee.name === "Priyanka" && (
            <PriyankaForm />
          )}

        </div>

      )}

    </div>

  );
}