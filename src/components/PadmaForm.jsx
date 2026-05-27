import { useState } from "react";

export default function PadmaForm() {

  const [formData, setFormData] = useState({
    otHours: "",
    leaves: "",
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

    const basic = 60000;

    // DYNAMIC VALUES

    const otPayment =
      Number(formData.otHours) * 450;

    const leaveDeduction =
      Number(formData.leaves) * 2400;

    const lateDeduction =
      Number(formData.lateHours) * 450;

    const advanceDeduction =
      Number(formData.advancePayment);

    // FINAL SALARY

    const finalSalary =
      basic +
      otPayment -
      leaveDeduction -
      lateDeduction -
      advanceDeduction;

    // SAVE RESULTS

    setSalary({
      basic,
      otPayment,
      leaveDeduction,
      lateDeduction,
      advanceDeduction,
      finalSalary,
    });
  };

  return (

    <div>

      <div className="grid gap-5">

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

        {/* LEAVES */}

        <div>
          <label className="block mb-2 font-semibold text-lg">
            Leaves
          </label>

          <input
            type="number"
            name="leaves"
            placeholder="Enter Leaves"
            value={formData.leaves}
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
              Basic Salary:
              <span className="font-bold">
                {" "}
                Rs. {salary.basic.toLocaleString()}
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
              Leave Deduction:
              <span className="font-bold text-red-600">
                {" "}
                - Rs. {salary.leaveDeduction.toLocaleString()}
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

        </div>

      )}

    </div>

  );
}