import { useState } from "react";
import { IForm } from "./types";
const AandBForm = () => {
  const [formData, setFormData] = useState<IForm>({
    companyName: "",
    numberOfUsers: 200,
    numberOfProducts: 400,
    percentage: 0,
  });

  const percentage = (): number => {
    return (100 * formData.numberOfUsers) / formData.numberOfProducts;
  };
  const updateFormData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    setFormData({
      ...formData,
      [fieldName]: e.target.value.trim(),
    });
  };

  return (
    <div className="flex  h-screen items-center justify-center bg-slate-200">
      <div className=" w-9/12 lg:w-1/5 bg-white rounded-md shadow-md">
        <p className="mt-2 text-center font-bold">Create a Company</p>
        <form className="mt-4 text-xs flex flex-col gap-4 p-2 ">
          <label>
            {"Company Name "}
            <input
              name="companyName"
              value={formData.companyName}
              onChange={updateFormData}
              className="w-full block border-2 rounded-md p-1"
            />
          </label>

          <label>
            {"Number of Users"}
            <input
              name="numberOfUsers"
              value={formData.numberOfUsers}
              onChange={updateFormData}
              className="block border-2 rounded-md p-1 w-full"
            />
          </label>
          <label>
            {"Number of Products"}
            <input
              name="numberOfProducts"
              value={formData.numberOfProducts}
              onChange={updateFormData}
              className="block border-2 rounded-md p-1 w-full"
            />
          </label>

          <label>
            {"Percentage "}
            <input
              name="percentage"
              value={formData.percentage}
              className="w-full block border-2 rounded-md p-1"
              readOnly
            />
          </label>
          <button
            className="bg-cyan-700 w-1/5 text-white py-2 rounded-md mx-auto"
            onClick={(e) => {
              e.preventDefault();
              console.log(formData);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default AandBForm;
