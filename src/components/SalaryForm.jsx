import { useState } from "react";

export default function SalaryForm() {

  const [formData, setFormData] = useState({
    otHours: "",
    leaves: "",
    lateHours: "",
    advancePayment: "",
    bags400: "",
    bags200: "",
  });

  const [salary, setSalary] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const calculateSalary = () => {

    const basic = 80000;
    const boarding = 8000;

    // OT
    const otPayment =
      Number(formData.otHours) * 600;

    // Flour Bags
    const extra400 =
      Number(formData.bags400) * 400;

    const extra200 =
      Number(formData.bags200) * 200;

    // Leave Deduction
    const leaveDeduction =
      Number(formData.leaves) * 3200;

    // Late Hour Deduction
    const lateDeduction =
      Number(formData.lateHours) * 600;

    // Advance Payment
    const advanceDeduction =
      Number(formData.advancePayment);

    // Final Salary
    const finalSalary =
      basic +
      boarding +
      otPayment +
      extra400 +
      extra200 -
      leaveDeduction -
      lateDeduction -
      advanceDeduction;

    setSalary({
      basic,
      boarding,
      otPayment,
      extra400,
      extra200,
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

        {/* 400 FLOUR BAGS */}

        <div>
          <label className="block mb-2 font-semibold text-lg">
            400 Flour Bags
          </label>

          <input
            type="number"
            name="bags400"
            placeholder="Enter 400 Flour Bags"
            value={formData.bags400}
            onChange={handleChange}
            className="w-full p-4 border-2 border-gray-300 rounded-xl"
          />
        </div>

        {/* 200 FLOUR BAGS */}

        <div>
          <label className="block mb-2 font-semibold text-lg">
            200 Flour Bags
          </label>

          <input
            type="number"
            name="bags200"
            placeholder="Enter 200 Flour Bags"
            value={formData.bags200}
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
              Boarding:
              <span className="font-bold">
                {" "}
                Rs. {salary.boarding.toLocaleString()}
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
              400 Bag Payment:
              <span className="font-bold">
                {" "}
                Rs. {salary.extra400.toLocaleString()}
              </span>
            </p>

            <p>
              200 Bag Payment:
              <span className="font-bold">
                {" "}
                Rs. {salary.extra200.toLocaleString()}
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