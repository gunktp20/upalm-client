import Logo from "../assets/images/u-palm.jpg"
import { useNavigate } from 'react-router-dom';

function Navbar() {

    const navigate = useNavigate()

    const backToHomePage = () => {
        navigate("/")
    }
    const toSignIn = () => {
        navigate("/login")
    }
    const toSignUp = () => {
        navigate("/register")
    }

    return (
        <div className='flex flex-col w-[100%] fixed top-[0px] z-[10] shadow-md'>
            {/* first section */}
            <div className='w-[100%] flex justify-center bg-white'>
                <div className='flex w-[80%] justify-between items-center'>
                    {/* Logo */}
                    <img src={Logo} className='w-[70px] h-[70px]' onClick={backToHomePage}></img>
                    {/* sign in / up && cart user information */}
                    <div className='flex gap-2 text-primary-500 text-[12.5px] items-center'>
                        <button onClick={toSignIn} className='border-[1px] border-[#fff] px-3 hover:text-secondary-500 rounded-md transition-all h-[30px]'>เข้าสู่ระบบ</button>
                        {/* line between sign & sign up */}
                        <div className='h-[20px] w-[1px] bg-primary-200'></div>
                        <button onClick={toSignUp} className='border-[1px] border-[#fff] px-3 hover:text-secondary-500 rounded-md transition-all h-[30px]'>สมัครสมาชิก</button>
                    </div>
                </div>
            </div>
            {/* second section */}
            <div className='w-[100%] flex justify-center bg-primary-700 py-2'>
                <div className='w-[80%] flex justify-between'>
                    {/* nav section */}
                    <div className='flex gap-3 text-white text-[13px]'>
                        <button onClick={backToHomePage} className='pr-5 hover:text-secondary-500 transition-all'>หน้าหลัก</button>
                        <button className='hover:text-secondary-500 transition-all'>สินค้าทั้งหมด</button>
                    </div>
                </div>
            </div>
        </div>
        // <div className='w-[100%] bg-primary-600 py-2 flex justify-center '>

        //     <div className='w-[80%] flex text-white  text-[11.8px] justify-between'>
        //         <div className='text-white font-bold'>
        //             u palm
        //         </div>
        //         {/* Search Product Input */}

        //         {/* Search Product Input */}
        //         <div className='flex gap-3'>
        //             <button className='border-r-[1px] border-[#fff] pr-5'>เข้าสู่ระบบ</button>
        //             <button>สมัครสมาชิก</button>
        //         </div>
        //     </div>
        // </div>
        // <div className="bg-white flex flex-col bg-primary-00 z-[10] fixed justify-between items-center pt-3 top-[0] w-[100%]">
        //     <div className="mb-2 w-[75%] h-[50px] flex justify-between items-center xl:w-[70%] lg:w-[80%] md:w-[90%] sm:w-[91%]">
        //         <div className='flex justify-between w-[100%] items-center'>
        //             <img className="w-[60px]" src={Logo}></img>
        //             <div className='w-[60%] flex'>
        //                 <input type="text" placeholder='ค้นหาสิ่งที่คุณต้องการ...' className='text-[12.5px] pl-5 border-[1px] w-[100%] h-[38px] rounded-md border-gray-300'></input>
        //                 <button className='bg-secondary-500 rounded-sm ml-1 px-3 hover:bg-[#f4b701] text-[18px]'><IoSearchOutline className='' /></button>
        //             </div>
        //             <div className='flex gap-4 text-[13px] items-center'>
        //                 <button className='border-r-[1px] pr-5 border-gray-300 '>สมัครสมาชิก</button>
        //                 <button className=''>เข้าสู่ระบบ</button>
        //             </div>
        //         </div>
        //     </div>
        //     {/* second sub nav */}
        //     <div className='bg-primary-700 w-[100%] flex justify-center'>
        //         <div className='w-[70%] py-2 flex gap-5 text-white text-[12.3px]'>
        //             <div className="cursor-pointer">หน้าหลัก</div>
        //             <div className="cursor-pointer">สินค้าทั้งหมด</div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Navbar
