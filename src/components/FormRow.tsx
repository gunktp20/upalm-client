import React, { FunctionComponent, ReactNode, useState } from "react";
import { VscEye } from "react-icons/vsc";
import { VscEyeClosed } from "react-icons/vsc";


interface IFormRow {
  type: string;
  name: string;
  value?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tailwindClass?: string;
  labelText?: string;
  width?: string;
  icon?: ReactNode;
  error?: boolean;
  errMsg?: string;
}

const FormRow: FunctionComponent<IFormRow> = ({
  type,
  name,
  value,
  handleChange,
  tailwindClass,
  labelText,
  width,
  icon,
  error,
  errMsg,
}: IFormRow): JSX.Element => {
  const [hide, setHide] = useState<boolean>(true);

  return (
    <div
      className={`relative items-center flex transition-all z-0 w-[${width ? width : "100%"
        }] group ${tailwindClass} ${error ? "mb-7" : "mb-3"} `}
    >
      <div className="absolute text-[18.3px] text-[#6b7280] z-[3]">{icon}</div>
      <input
        onChange={handleChange}
        type={
          type === "password" && hide
            ? "password"
            : type === "number"
              ? "number"
              : "value"
        }
        name={name}
        id={name}
        className={`${icon ? "pl-7" : ""
          } block bg-[#fff] z-[2] py-2.5 px-0 w-full text-[12px] text-gray-900 border-0 border-b-[1.6px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-primary-500 peer ${error ? "border-red-500 focus:border-red-500" : ""
          }`}
        placeholder={icon ? labelText || name : " "}
        required
        value={value}
      />
      <label
        htmlFor={name}
        className={`peer-focus:font-medium left-0 absolute text-[12.8px] text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-primary-500 peer-focus:dark:text-primary-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 z-[3] ${icon ? "hidden" : ""
          }`}
      >
        {labelText ? labelText : name}
      </label>

      {type == "password" && hide && (
        <button>
          <VscEyeClosed
            className="text-[#00000067] cursor-pointer z-[10] absolute top-[12px] text-[23px] right-[5px] text-nowrap"
            onClick={() => setHide(false)}
          />
        </button>
      )}
      {type == "password" && !hide && (
        <button>
          {" "}
          <VscEye
            className="text-[#00000067] cursor-pointer z-[10] absolute top-[12px] text-[23px] right-[5px] text-nowrap"
            onClick={() => setHide(true)}
          />
        </button>
      )}
      <div
        className={`absolute transition-all w-[100%] text-[11.3px] text-red-500 ${error ? "top-[2.8rem]" : "top-[1.5rem]"
          }`}
      >
        {errMsg}
      </div>
    </div>
  );
};

export default FormRow;
