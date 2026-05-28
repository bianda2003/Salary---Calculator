import { useState } from "react";
import { generatePayslip } from "../utils/generatePayslip";

export default function NilukaForm() {

  const [formData, setFormData] = useState({
    workingDays: "",
    otHours: "",
    lateHours: "",
    advancePayment: "",
  });

  const [salary, setSalary] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSalary = () => {

    // FIXED VALUES

    const dailyRate = 2000;
    const incentive = 20000;

    // DYNAMIC VALUES

    const workingPayment =
      Number(formData.workingDays) * dailyRate;

    const otPayment =
      Number(formData.otHours) * 375;

    const lateDeduction =
      Number(formData.lateHours) * 375;

    const advanceDeduction =
      Number(formData.advancePayment);

    // FINAL SALARY

    const finalSalary =
      workingPayment +
      incentive +
      otPayment -
      lateDeduction -
      advanceDeduction;

    setSalary({
      workingPayment,
      incentive,
      otPayment,
      lateDeduction,
      advanceDeduction,
      finalSalary,
    });
  };

  return (

    <div>

      <div className="grid gap-5">

        {/* WORKING DAYS */}

        <div>
          <label className="block mb-2 font-semibold text-lg">
            Working Days
          </label>

          <input
            type="number"
            name="workingDays"
            placeholder="Enter Working Days"
            value={formData.workingDays}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-xl"
          />
        </div>

        {/* OT HOURS */}

        <div>
          <label className="block mb-2 font-semibold text-lg">
            OT Hours
          </label>

          <input
            type="number"
            name="otHours"
            placeholder="Enter OT Hours"
            value={formData.otHours}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-xl"
          />
        </div>

        {/* LATE HOURS */}

        <div>
          <label className="block mb-2 font-semibold text-lg">
            Late Hours
          </label>

          <input
            type="number"
            name="lateHours"
            placeholder="Enter Late Hours"
            value={formData.lateHours}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-xl"
          />
        </div>

        {/* ADVANCE PAYMENT */}

        <div>
          <label className="block mb-2 font-semibold text-lg">
            Advance Payment
          </label>

          <input
            type="number"
            name="advancePayment"
            placeholder="Enter Advance Payment"
            value={formData.advancePayment}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-xl"
          />
        </div>

        {/* BUTTON */}

        <button
          onClick={calculateSalary}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-4 rounded-xl text-lg"
        >
          Calculate Salary
        </button>

      </div>

      {/* SALARY BREAKDOWN */}

      {salary && (

        <div className="mt-10 bg-gray-100 p-6 rounded-2xl">

          <h3 className="text-3xl font-bold mb-6">
            Salary Breakdown
          </h3>

          <div className="space-y-4 text-xl">

            <p>
              Working Payment:
              <span className="font-bold">
                {" "}
                Rs. {salary.workingPayment.toLocaleString()}
              </span>
            </p>

            <p>
              Incentive:
              <span className="font-bold">
                {" "}
                Rs. {salary.incentive.toLocaleString()}
              </span>
            </p>

            <p>
              OT Payment:
              <span className="font-bold">
                {" "}
                Rs. {salary.otPayment.toLocaleString()}
              </span>
            </p>

            <p>
              Late Hour Deduction:
              <span className="font-bold text-red-600">
                {" "}
                - Rs. {salary.lateDeduction.toLocaleString()}
              </span>
            </p>

            <p>
              Advance Deduction:
              <span className="font-bold text-red-600">
                {" "}
                - Rs. {salary.advanceDeduction.toLocaleString()}
              </span>
            </p>

            <hr className="my-5" />

            <p className="text-4xl font-bold text-green-600">
              Final Salary:
              {" "}
              Rs. {salary.finalSalary.toLocaleString()}
            </p>

          </div>
                        <button
                onClick={() =>
                    generatePayslip(
                    "Niluka",
                    salary
                    )
                }
                className="mt-6 bg-green-600 hover:bg-green-700 text-white font-bold p-4 rounded-xl"
                >
                Download Payslip PDF
                </button>

        </div>

      )}

    </div>

  );
}