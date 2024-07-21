import { IoSearchOutline } from "react-icons/io5"
import Wrapper from "../../assets/wrappers/DairyDiscover"
import Navbar from "../../components/Navbar"
import p1 from "../../assets/images/p1.webp"
import FreeDelivery from "../../assets/images/Free Delivery.png"
import Footer from "../../components/Footer"
import { useState } from "react"
import { motion } from "framer-motion"
import PriceRangeSlider from "./PriceRangeSlider"
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function DairyDiscover() {

    const categories = [
        { id: 1, title: "ต้นกล้า" },
        { id: 2, title: "เมล็ดพันธุ์" },
        { id: 3, title: "ต้นอ่อน" },
        { id: 4, title: "ปุ๋ยอินทรีย์" },
        { id: 5, title: "ปุ๋ยเคมี" },
        { id: 6, title: "ดินปลูก" },
        { id: 7, title: "เครื่องมือการเกษตร" },
        { id: 8, title: "ระบบชลประทาน" },
        { id: 9, title: "ถุงเพาะชำ" },
        { id: 10, title: "ฮอร์โมนพืช" },
        { id: 11, title: "สารเคมีกำจัดศัตรูพืช" },
        { id: 12, title: "อุปกรณ์เกษตรอัจฉริยะ" },
        { id: 13, title: "วัสดุคลุมดิน" },
        { id: 14, title: "เมล็ดหญ้า" },
        { id: 15, title: "พืชน้ำ" },
        { id: 16, title: "ไม้ประดับ" },
        { id: 17, title: "กล้วยไม้" },
        { id: 18, title: "พืชสมุนไพร" },
        { id: 19, title: "ไม้ผล" },
        { id: 20, title: "ต้นไม้เนื้อแข็ง" }
    ];

    const [viewAllCategories, setViewAllCategories] = useState<boolean>(false);
    const [age, setAge] = React.useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value);
    };

    return (
        <Wrapper>
            <Navbar />
            <div className="flex flex-col mt-[10rem]">
                {/* categories filter */}
                <div className="w-[100%] flex justify-center">
                    <div className="w-[80%] flex justify-left">
                        {/* search product input*/}
                        <div className='flex rounded-md p-[1.5px] gap-1 mr-10'>
                            <input type="text" placeholder="ค้นหาสิ่งที่คุณต้อง..." className='w-[250px] focus:outline-none pl-3 text-[12.5px] h-[45px] rounded-sm border-[1px] border-[#fff] shadow-sm text-[#000]'></input>
                            <button className='bg-secondary-500  w-[50px] text-[20px] text-[#3e3e3e] hover:bg-secondary-400 transition-all flex items-center justify-center rounded-sm h-[45px]'><IoSearchOutline /></button>
                        </div>
                        {/* sort and filter bar */}
                        <div className="bg-white w-[100%] shadow-sm h-[45px] flex items-center px-5">
                            <div className="text-[14px]">เรียงโดย</div>
                            <FormControl>
                                <Select
                                    value={age}
                                    onChange={handleChange}
                                    displayEmpty
                                    sx={{ fontSize: "14px" }}
                                    className="h-[30px] ml-5 border-primary-500"
                                    inputProps={{ 'aria-label': 'Without label' }}
                                >
                                    <MenuItem value="">
                                        <em>ราคา</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                    </div>
                </div>
                {/* container horizontal */}
                <div className="flex w-[100%] justify-center">

                    <div className="flex w-[80%] mt-6">
                        {/* sport & filter bar */}
                        <div className="flex flex-col h-fit shadow-sm mr-10 transition-all duration-500">
                            {/* Category */}
                            <div className=" pb-10 relative bg-white">
                                <div className={`flex flex-col items-start px-5 py-3 w-[300px] relative overflow-hidden ${viewAllCategories ? "h-[100%]" : "h-[350px]"}`}>
                                    <div className="text-[13.6px] mb-4 border-b-[1px] border-gray-200 pb-2 w-[100%]">หมวดหมู่</div>

                                    {/* categories filter */}
                                    <div className={` flex flex-col gap-3 ${viewAllCategories ? "h-fit" : "h-[300px]"}`}>
                                        {/* category check box */}
                                        {categories.map((category) => {
                                            return <div className="flex items-center">
                                                <input className="h-[15px] w-[15px] mr-3 accent-primary-500  bg-grey-700 text-red-500  rounded cursor-pointer" type="checkbox"></input>
                                                <label className="text-[12.3px]">{category.title}</label>
                                            </div>
                                        })}

                                    </div>

                                </div>
                                {/* view more button */}
                                <button onClick={() => {
                                    setViewAllCategories(!viewAllCategories)
                                }} className={`absolute bottom-[11px] ml-5 text-primary-500 hover:text-secondary-500 transition-all cursor-pointer text-sm text-nowrap`}>{viewAllCategories ? "ดูน้อยลง" : "ดูเพิ่มเติม"}
                                </button>
                            </div>
                            {/* Price Range */}
                            <div className="bg-white mt-5 flex px-5 py-3 flex-col pb-8">
                                {/* title */}
                                <div className="text-[13.6px] mb-4 border-b-[1px] border-gray-100 pb-2 w-[100%]">ช่วงราคา</div>
                                <div className="flex">
                                    {/* min */}
                                    <input className="pl-3 text-sm border-[1px] w-[120px] border-[#888888] h-[34px] rounded-sm pr-2" type="number" placeholder="min"></input>
                                    {/* max */}
                                    <div className="mr-2 ml-2">-</div>
                                    <input className="pl-3 text-sm border-[1px] w-[120px] border-[#888888] h-[34px] rounded-sm pr-2" type="number" placeholder="max"></input>
                                </div>
                                <div className="flex">
                                    <button className="w-[100%] text-sm border-[1px] bg-primary-500 text-white rounded-sm mt-4 py-[6px] hover:bg-primary-400 transition-all">ตกลง</button>
                                </div>
                            </div>

                        </div>

                        {/* product container */}
                        <div className="gap-5 grid grid-cols-4 w-[100%]">
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>
                            {/* Product Card */}
                            <div className='bg-white flex w-[100%] flex-col border-[1px] sm:w-[100%] xsm:w-[157px]'>
                                <div className='relative'>
                                    <img src={p1} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
                                    <div className='bg-primary-700  w-[125px] h-[29px] absolute bottom-[0] flex text-white items-center gap-1 px-1'>
                                        <img src={FreeDelivery} className='w-[34%]'></img>
                                        <div className='text-[10.1px]'>Free delivery</div>
                                    </div>
                                </div>
                                <div className='px-2 pb-3'>
                                    <div className='text-primary-600 mt-2 text-[14px] truncate '>
                                        ต้นกล้ามากเก่งมาก
                                    </div>
                                    <div className='text-[12px] text-primary-300 truncate'>
                                        มณีน้อยสมบูรณ์ ฟาร์ม
                                    </div>
                                    <div className='mt-3 text-primary-500 text-[16.5px]'>
                                        ฿ 100
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
            <Footer />

        </Wrapper>
    )
}

export default DairyDiscover
