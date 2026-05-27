import { useState } from "react";

export default function SamanthaForm() {

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

    const basic = 90000;
    const incentive = 20000;
    const petrol = 10000;
    const increment = 20000;

    const loanDeduction = 25000;
    const epfEtf = 4000;

    // DYNAMIC VALUES

    const otPayment =
      Number(formData.otHours) * 675;

    const leaveDeduction =
      Number(formData.leaves) * 3600;

    const lateDeduction =
      Number(formData.lateHours) * 675;

    const advanceDeduction =
      Number(formData.advancePayment);

    // FINAL SALARY

    const finalSalary =
      basic +
      incentive +
      petrol +
      increment +
      otPayment -
      leaveDeduction -
      lateDeduction -
      loanDeduction -
      epfEtf -
      advanceDeduction;

    setSalary({
      basic,
      incentive,
      petrol,
      increment,
      otPayment,
      leaveDeduction,
      lateDeduction,
      loanDeduction,
      epfEtf,
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
              Incentive:
              <span className="font-bold">
                {" "}
                Rs. {salary.incentive.toLocaleString()}
              </span>
            </p>

            <p>
              Petrol:
              <span className="font-bold">
                {" "}
                Rs. {salary.petrol.toLocaleString()}
              </span>
            </p>

            <p>
              Increment:
              <span className="font-bold">
                {" "}
                Rs. {salary.increment.toLocaleString()}
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
              Loan Deduction:
              <span className="font-bold text-red-600">
                {" "}
                - Rs. {salary.loanDeduction.toLocaleString()}
              </span>
            </p>

            <p>
              EPF / ETF:
              <span className="font-bold text-red-600">
                {" "}
                - Rs. {salary.epfEtf.toLocaleString()}
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