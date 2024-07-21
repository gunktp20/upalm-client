import { MdOutlineEmail } from "react-icons/md";
import { FiLock } from "react-icons/fi";
import Wrapper from "../../assets/wrappers/Register"
import FormRow from "../../components/FormRow"
import Navbar from "../../components/Navbar"
import { validate } from "email-validator";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Alert } from "@mui/material";
import useAlert from "../../hooks/useAlert";
import { FaGoogle } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa6";
import wallpaper from "../../assets/images/The-Borneo-Post-Sustainable-Palm-Oil-Communities-of-Sabah-and-Sarawak-01.jpg"

function Register() {

    const navigate = useNavigate();
    const { alertType, alertText, showAlert, displayAlert } = useAlert();
    const [email, setEmail] = useState<string>("");

    const [firstName, setFirstName] = useState<string>("");
    const [firstNameErrorMessage, setFirstNameErrorMessage] = useState<string>("");
    const [firstNameError, setFirstNameError] = useState<boolean>(false);

    const [lastName, setLastName] = useState<string>("");
    const [lastNameErrorMessage, setLastNameErrorMessage] = useState<string>("");
    const [lastNameError, setLastNameError] = useState<boolean>(false);

    const [confirmPassword, setConfirmPassword] = useState<string>("");
    const [confirmPasswordError, setConfirmPasswordError] =
        useState<boolean>(false);
    const [confirmPasswordErrorMsg, setConfirmPasswordErrorMsg] =
        useState<string>("");

    const [password, setPassword] = useState<string>("");
    const [passwordErrorMessage, setPasswordErrorMessage] = useState<string>("");
    const [passwordError, setPasswordError] = useState<boolean>(false);
    const [emailErrorMessage, setEmailErrorMessage] = useState<string>("");
    const [emailError, setEmailError] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const [step, setStep] = useState<1 | 2>(1);
    const login = () => {

    }

    const handleChangeFirstName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
        if (e.target.value === "") {
            setFirstNameErrorMessage("* กรุณากรอก ชื่อ ของคุณ");
            setFirstNameError(true);
            return;
        }
    }

    const handleChangeLastName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
        if (e.target.value === "") {
            setLastNameErrorMessage("* กรุณากรอก นามสกุล ของคุณ");
            setLastNameError(true);
            return;
        }
    }

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
        const lower = new RegExp("(?=.*[a-z])");
        const upper = new RegExp("(?=.*[A-Z])");
        const number = new RegExp("(?=.*[0-9])");
        const special = new RegExp("(?=.*[!@#$%^&*])");
        const length = new RegExp("(?=.{8,})");

        if (lower.test(e.target.value)) {
            setPasswordErrorMessage("* ตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว");
            setPasswordError(false);
        } else {
            setPasswordErrorMessage("* ตัวอักษรพิมพ์เล็กอย่างน้อย 1 ตัว");
            setPasswordError(true);
            return;
        }
        if (upper.test(e.target.value)) {
            setPasswordErrorMessage("* ตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว");
            setPasswordError(false);
        } else {
            setPasswordErrorMessage("* ตัวอักษรพิมพ์ใหญ่อย่างน้อย 1 ตัว");
            setPasswordError(true);
            return;
        }
        if (number.test(e.target.value)) {
            setPasswordErrorMessage("* ตัวเลขอย่างน้อย 1 ตัว");
            setPasswordError(false);
        } else {
            setPasswordErrorMessage("* ตัวเลขอย่างน้อย 1 ตัว");
            setPasswordError(true);
            return;
        }
        if (special.test(e.target.value)) {
            setPasswordErrorMessage("* อักษรพิเศษอย่างน้อย 1 ตัว");
            setPasswordError(false);
        } else {
            setPasswordErrorMessage("* อักษรพิเศษอย่างน้อย 1 ตัว");
            setPasswordError(true);
            return;
        }

        if (length.test(e.target.value)) {
            setPasswordErrorMessage("* ตัวอักษรอย่างน้อย 8 ตัว");
            setPasswordError(false);
        } else {
            setPasswordErrorMessage("* ตัวอักษรอย่างน้อย 8 ตัว");
            setPasswordError(true);
            return;
        }
        setPasswordError(false);
    };

    const handleChangeConfirmPassword = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setConfirmPassword(e.target.value);
        if (e.target.value === "") {
            setConfirmPasswordErrorMsg("* กรุณากรอก ยืนยันรหัสผ่าน ของคุณ");
            setConfirmPasswordError(true);
            return;
        }
        setConfirmPasswordError(false);
    };

    useEffect(() => {
        if (confirmPassword !== password && confirmPassword) {
            setConfirmPasswordErrorMsg(
                "ยืนยันรหัสผ่านจะต้องเหมือนกันกับรหัสผ่าน"
            );
            setConfirmPasswordError(true);
            return;
        } else {
            setConfirmPasswordErrorMsg(
                "ยืนยันรหัสผ่านจะต้องเหมือนกันกับรหัสผ่าน"
            );
            setConfirmPasswordError(false);
            return;
        }
    }, [confirmPassword, password]);

    return (
        <Wrapper>
            <Navbar />
            <div className="flex flex-col justify-center items-center">
                {/* Register Form */}
                <div className="bg-white w-[540px] rounded-xl p-8 absolute z-[2] top-[9rem] sm:w-[90%] xsm:w-[90%]">
                    <div className="flex flex-col">
                        <div className="font-[400] text-[27px] text-gray-800">
                            ลงทะเบียนผู้ใช้
                        </div>
                        <div className="font-[300] text-[13.5px] text-gray-500">
                            กรอกข้อมูลของคุณเพื่อสร้างบัญชีของคุณ
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
                    {step === 1 && <FormRow
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
                    }
                    {step === 1 && <FormRow
                        type="password"
                        name="password"
                        labelText="รหัสผ่าน"
                        value={password}
                        handleChange={handleChangePassword}
                        error={passwordError}
                        errMsg={passwordErrorMessage}
                        icon={<FiLock />}
                        tailwindClass="mt-[1.3rem]"
                    />
                    }
                    {step === 1 && <FormRow
                        type="password"
                        name="confirm_password"
                        labelText="ยืนยันรหัสผ่านอีกครั้ง"
                        value={confirmPassword}
                        handleChange={handleChangeConfirmPassword}
                        error={confirmPasswordError}
                        errMsg={confirmPasswordErrorMsg}
                        icon={<FiLock />}
                        tailwindClass="mt-[1.3rem]"
                    />}
                    {step === 2 && <FormRow
                        type="text"
                        name="firstName"
                        labelText="ชื่อ"
                        value={firstName}
                        handleChange={handleChangeFirstName}
                        error={firstNameError}
                        errMsg={firstNameErrorMessage}
                        icon={<FaRegUser />}
                        tailwindClass="mt-[1.5rem]"
                    />}
                    {step === 2 && <FormRow
                        type="text"
                        name="lastName"
                        labelText="นามสกุล"
                        value={lastName}
                        handleChange={handleChangeLastName}
                        error={lastNameError}
                        errMsg={lastNameErrorMessage}
                        icon={<FaRegUser />}
                        tailwindClass="mt-[1.5rem]"
                    />}

                    <div className="w-[100%] flex justify-end mt-5">
                        <button className="text-[11.5px] text-primary-400 hover:text-primary-500 transition-all font-semibold">
                            ลืมรหัสผ่าน
                        </button>
                    </div>
                    {/* register submit button step 1 */}
                    {step === 1 && <button
                        disabled={!email || !password || !confirmPassword || emailError || passwordError || confirmPasswordError}
                        className="bg-primary-500 text-white hover:bg-primary-600 transition-all w-[100%] h-[38px] disabled:bg-gray-200 text-sm font-sm mt-6 rounded-md"
                        onClick={() => {
                            setStep(2)
                        }}
                    >
                        {isLoading ? (
                            "กำลังโหลด"
                        ) : (
                            "ถัดไป"
                        )}
                    </button>}
                    {/* register submit button step 2 */}
                    {step === 2 && <button
                        disabled={!email || !password || emailError || passwordError}
                        className="bg-primary-500 text-white hover:bg-primary-600 transition-all w-[100%] h-[38px] disabled:bg-gray-200 text-sm font-sm mt-6 rounded-md"
                        onClick={login}
                    >
                        {isLoading ? (
                            "กำลังโหลด"
                        ) : (
                            "ลงทะเบียน"
                        )}
                    </button>}
                    <div className="flex relative justify-center items-center mb-7 w-[100%] mt-7">
                        <div className="absolute z-[2] px-2 text-gray-400 text-[12.5px]">
                            หากคุณเป็นสมาชิกอยู่เเล้ว ?{" "}
                            <Link
                                to="/login"
                                className=" cursor-pointer text-primary-400 hover:text-primary-500 transition-all"
                            >
                                ลงชื่อเข้าใช้
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

export default Register
