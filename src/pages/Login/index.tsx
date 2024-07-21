import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import Wrapper from "../../assets/wrappers/Login"
import FormRow from "../../components/FormRow"
import Navbar from "../../components/Navbar"
import { validate } from "email-validator";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import useAlert from "../../hooks/useAlert";
import { FaGoogle } from "react-icons/fa";
import wallpaper from "../../assets/images/The-Borneo-Post-Sustainable-Palm-Oil-Communities-of-Sabah-and-Sarawak-01.jpg"

function Login() {

  const navigate = useNavigate();
  const { alertType, alertText, showAlert, displayAlert } = useAlert();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
  const [emailError, setEmailError] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (e.target.value === "") {
      setEmailErrorMessage("* กรุณากรอก อีเมลล์ ของคุณ");
      setEmailError(true);
      return;
    }
    if (validate(e.target.value)) {
      setEmailErrorMessage("* อีเมลล์ของคุณไม่ถูกต้อง");
      setEmailError(false);
    } else {
      setEmailErrorMessage("* อีเมลล์ของคุณไม่ถูกต้อง");
      setEmailError(true);
    }
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordErrorMessage("* กรุณากรอก รหัสผ่าน ของคุณ");
      setPasswordError(true);
      return;
    }
    setPasswordError(false);
  };

  return (
    <Wrapper>
      <Navbar />
      <div className="flex flex-col justify-center items-center">
        {/* Login Form */}
        <div className="bg-white w-[540px] rounded-xl p-8 absolute z-[2] top-[9rem] sm:w-[90%] xsm:w-[90%]">
          <div className="flex flex-col">
            <div className="font-[400] text-[27px] text-gray-800">
              ลงชื่อเข้าใช้งาน
            </div>
            <div className="font-[300] text-[13.5px] text-gray-500">
              กรอกข้อมูลของคุณเพื่อเข้าสู่ระบบ
            </div>

            {showAlert && (
              <Alert
                severity={alertType}
                className="w-[100%]"
                sx={{
                  fontSize: "11.4px",
                  display: "flex",
                  justifyItems: "center",
                  alignItems: "center",
                }}
              >
                {alertText}
              </Alert>
            )}
          </div>
          <FormRow
            type="text"
            name="email"
            labelText="อีเมลล์"
            value={email}
            handleChange={handleChangeEmail}
            error={emailError}
            errMsg={emailErrorMessage}
            icon={<MdOutlineEmail />}
            tailwindClass="mt-[1.5rem]"
          />
          <FormRow
            type="text"
            name="password"
            labelText="รหัสผ่าน"
            value={password}
            handleChange={handleChangePassword}
            error={passwordError}
            errMsg={passwordErrorMessage}
            icon={<FiLock />}
            tailwindClass="mt-[1.3rem]"
          />
          <div className="w-[100%] flex justify-end mt-5">
            <button className="text-[11.5px] text-primary-500 hover:text-primary-500 transition-all font-semibold">
              ลืมรหัสผ่าน
            </button>
          </div>
          <button
            disabled={!email || !password || emailError || passwordError}
            className="bg-primary-500 text-white hover:bg-primary-600 transition-all w-[100%] h-[38px] disabled:bg-gray-200 text-sm font-sm mt-6 rounded-md"
          >
            {isLoading ? (
              "กำลังโหลด"
            ) : (
              "เข้าสู่ระบบ"
            )}
          </button>
          <div className="flex relative justify-center items-center mb-7 w-[100%] mt-7">
            <div className="absolute z-[2] px-2 text-gray-400 text-[12.5px]">
              ยังไม่ได้ละเบียนใช่หรือไม่ ?{" "}
              <Link
                to="/register"
                className=" cursor-pointer text-primary-400 hover:text-primary-500 transition-all"
              >
                ลงทะเบียน
              </Link>
            </div>
          </div>
          <div className="flex relative justify-center items-center mb-7 mt-5 w-[100%]">
            <div className="absolute bg-white z-[2] px-2 rounded-[100%] text-gray-400 text-[14.2px]">
              หรือ
            </div>
            <div className="bg-gray-300 absolute w-[75%] h-[1px]"></div>
          </div>
          <button className="mb-5 w-[100%] rounded-md mt-4 border-[1px] h-[38px] border-primary-300 hover:bg-primary-500 text-primary-300 hover:text-white transition-all flex items-center justify-center">
            <FaGoogle className="text-[15.5px] " />
            <div className="text-[11.6px] ml-2 font-semibold  ">
              เข้าสู่ระบบด้วย Google
            </div>
          </button>
        </div>
        {/* Wallpaper Background */}
        <div className="relative h-[100vh] w-[100%] object-cover">
          <div className="absolute bg-[#0000007a] top-0 w-[100%] h-[100%]"></div>
          <img
            src={wallpaper}
            className="h-[100%] w-[100%] object-cover object-right-top"
          ></img>
        </div>




      </div>

    </Wrapper>
  )
}

export default Login
