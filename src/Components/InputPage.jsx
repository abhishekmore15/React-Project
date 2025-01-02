import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

export default function InputPage() {
  const [answerType, setAnswerType] = useState("");
  const [options, setOptions] = useState([
    { id: 1, placeholder: "", min: "", max: "", rows: "" },
  ]);

  const handleAnswerTypeChange = (e) => {
    setAnswerType(e.target.value);
    setOptions([{ id: 1, placeholder: "", min: "", max: "", rows: "" }]);
  };

  const addOption = () => {
    setOptions([
      ...options,
      { id: options.length + 1, placeholder: "", min: "", max: "", rows: "" },
    ]);
  };

  const removeOption = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  const handleOptionChange = (id, field, value) => {
    setOptions(
      options.map((option) =>
        option.id === id ? { ...option, [field]: value } : option
      )
    );
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl bg-white p-6 mt-10 rounded-lg shadow-md">
        <h2 className="flex items-center gap-4 text-xl font-bold text-gray-800">
          <FaArrowLeft className="mt-1" />
          Add Question
        </h2>
        <form className="mt-6 space-y-6">
          <div>
            <input
              className="w-full p-3 border border-gray-300 rounded-md outline-none shadow-md"
              type="text"
              placeholder="Question Title"
            />
          </div>

          <div>
            <select
              className="w-full h-12 px-4 border border-gray-300 rounded-md outline-none shadow-md text-zinc-600"
              value={answerType}
              onChange={handleAnswerTypeChange}
            >
              <option value="" disabled>
                Answer Type
              </option>
              <option value="none">None</option>
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="select">Select</option>
              <option value="textArea">Textarea</option>
              <option value="radio">Radio</option>
              <option value="checkbox">Checkbox</option>
              <option value="slider">Slider</option>
            </select>
          </div>

          {[
            "number",
            "textArea",
            "radio",
          ].includes(answerType) && (
            <div>
              <h3 className="font-semibold text-gray-800"></h3>
              {options.map((option, index) => (
                <div
                  key={option.id}
                  className="flex flex-col gap-2 mt-4 border p-3 rounded-md shadow-md"
                >
                  <p className="font-semibold text-gray-600">
                    Option {index + 1}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <input
                      className="flex-1 p-3 border border-gray-300 rounded-md outline-none shadow-md"
                      type="text"
                      placeholder="Placeholder"
                      value={option.placeholder}
                      onChange={(e) =>
                        handleOptionChange(
                          option.id,
                          "placeholder",
                          e.target.value
                        )
                      }
                    />
                    <input
                      className="w-20 p-3 border border-gray-300 rounded-md outline-none shadow-md"
                      type="number"
                      placeholder="Min"
                      value={option.min}
                      onChange={(e) =>
                        handleOptionChange(option.id, "min", e.target.value)
                      }
                    />
                    <input
                      className="w-20 p-3 border border-gray-300 rounded-md outline-none shadow-md"
                      type="number"
                      placeholder="Max"
                      value={option.max}
                      onChange={(e) =>
                        handleOptionChange(option.id, "max", e.target.value)
                      }
                    />
                    {answerType === "textArea" && (
                      <input
                        className="w-20 p-3 border border-gray-300 rounded-md outline-none shadow-md"
                        type="number"
                        placeholder="Rows"
                        value={option.rows}
                        onChange={(e) =>
                          handleOptionChange(option.id, "rows", e.target.value)
                        }
                      />
                    )}
                    <button
                      type="button"
                      onClick={() => removeOption(option.id)}
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <CiCircleMinus className="w-full h-auto" />
                    </button>
                  </div>
                </div>
              ))}
              <button
                type="button"
                onClick={addOption}
                className="mt-4 ml-auto bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition flex items-center"
              >
                <CiCirclePlus />
              </button>
            </div>
          )}

          <button
            type="submit"
            className="w-full md:w-1/4 bg-green-800 text-white py-3 rounded-md font-semibold hover:bg-green-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
