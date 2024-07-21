import React, { useState } from 'react'
import Wrapper from '../../assets/wrappers/Landing'
import Wallpaper from "../../assets/images/The-Borneo-Post-Sustainable-Palm-Oil-Communities-of-Sabah-and-Sarawak-01.jpg";
import Navbar from '../../components/Navbar'
import { Fade } from "react-awesome-reveal";
import { HiLightBulb } from "react-icons/hi";
import { RiArrowGoBackLine } from "react-icons/ri";
import { FaTags } from "react-icons/fa";
import seed from "../../assets/images/seed.png"
import seedling from "../../assets/images/seedling.png"
import ControlledCarousel from './Carousel';
import p1 from "../../assets/images/p1.webp"
import p2 from "../../assets/images/p2.png"
import p3 from "../../assets/images/p3.png"
import p4 from "../../assets/images/p4.png"
import p5 from "../../assets/images/p2.png"
import p6 from "../../assets/images/p6.png"

import s1 from "../../assets/images/supplier/s1.webp"
import s2 from "../../assets/images/supplier/s2.webp"
import s3 from "../../assets/images/supplier/s3.webp"
import s4 from "../../assets/images/supplier/s4.avif"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaCarSide } from "react-icons/fa6";
import Slider from "react-slick";
import VerticalPromotion from "../../assets/images/Palm-Sisters-Gintchin-Fine-Art.jpg"
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { IoSearchOutline } from 'react-icons/io5';
import promotion from "../../assets/images/promotion.jpg"
import FreeDelivery from "../../assets/images/Free Delivery.png"
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HitHotProds: any = [
    { product_name: "ต้นกล้า", supplier: "มณีน้อยสมบูรณ์ ฟาร์ม", img: p1 },
    { product_name: "ต้นกล้า", supplier: "สมพงฟาร์ม", img: p2 },
    { product_name: "เมล็ดพันธุ์เกรดดี", supplier: "Michel farm", img: p3 },
    { product_name: "ต้นกล้า เเจ่มๆ", supplier: "Michel farm", img: p4 },
    { product_name: "เมล็ดพันธุ์เกรดดี", supplier: "Navi farm", img: p5 },
    { product_name: "ต้นกล้าอ่อน", supplier: "ไม้เขียน ฟาร์ม", img: p6 },

    { product_name: "ต้นกล้า เเจ่มๆ", supplier: "Navi farm", img: p6 },
    { product_name: "เมล็ดพันธุ์เกรดดี", supplier: "Michel farm", img: p3 },
    { product_name: "ต้นกล้า", supplier: "สมพงฟาร์ม", img: p2 },
    { product_name: "ต้นกล้า เเจ่มๆ", supplier: "ไม้เขียน ฟาร์ม", img: p4 },
    { product_name: "ต้นกล้าอ่อน ", supplier: "Navi farm", img: p2 },
    { product_name: "เมล็ดพันธุ์เกรดดี", supplier: "มณีน้อยสมบูรณ์ ฟาร์ม", img: p3 },

]

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const suppliers: any = [
    { supplier_name: "SEED PLAN", supplier_region: "นอกประเทศไทย", img: s3 },
    { supplier_name: "สมพงฟาร์ม", supplier_region: "ในประเทศไทย", img: s1 },
    { supplier_name: "มณีน้อย ฟาร์ม", supplier_region: "ในประเทศไทย", img: s4 },
    { supplier_name: "Seed Vard", supplier_region: "นอกประเทศไทย", img: s4 },
    { supplier_name: "This Palm", supplier_region: "นอกประเทศไทย", img: s3 },
    { supplier_name: "CanPalm ฟาร์ม", supplier_region: "ในประเทศไทย", img: s1 }
    ,
    { supplier_name: "Seed Vard", supplier_region: "นอกประเทศไทย", img: s1 },
    { supplier_name: "สมพงฟาร์ม", supplier_region: "ในประเทศไทย", img: s2 },
    { supplier_name: "This Palm", supplier_region: "นอกประเทศไทย", img: s3 },
    { supplier_name: "SEED PLAN", supplier_region: "นอกประเทศไทย", img: s1 },
    { supplier_name: "มณีน้อย ฟาร์ม", supplier_region: "ในประเทศไทย", img: s1 },
    { supplier_name: "CanPalm ฟาร์ม", supplier_region: "ในประเทศไทย", img: s4 }

]

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

function Landing() {




    const SamplePrevArrow = (props: ArrowProps) => {
        const { onClick } = props;
        return (
            <button onClick={onClick} className={`absolute top-[50%] left-[-25px] transform -translate-y-1/2 flex text-[#151717be] items-center justify-center text-[17px] border-[1px] bg-[#fff] shadow-sm w-[32px] h-[58px] rounded-md hover:shadow-md transition-all hover:text-[22px] hover:h-[62px] hover:w-[37px] z-[5]`}>

                <MdOutlineArrowBackIosNew />
            </button>
        );
    }

    const SampleNextArrow = (props: ArrowProps) => {
        const { onClick } = props;
        return (
            <button onClick={onClick} className={`absolute top-[50%] right-[-25px] transform -translate-y-1/2 flex text-[#151717be] items-center justify-center text-[17px] border-[1px] bg-[#fff] shadow-sm w-[32px] h-[58px] rounded-md hover:shadow-md transition-all hover:text-[22px] hover:h-[62px] hover:w-[37px] z-[5]`}>
                <MdOutlineArrowForwardIos />
            </button>
        );
    }

    const navigate = useNavigate();
    const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
    const [isMember, setIsMember] = useState<boolean>(true);
    const [numOfPageHitHot, setNumOfPageHitHot] = useState<number>(0);
    const [numOfPageSupplier, setNumOfPageSupplier] = useState<number>(0);

    const settings = {
        // infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2500,
        pauseOnHover: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 1150,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                },
            },
        ],
    };

    const category = [
        {
            name: `ตู้เก็บของ`,
            img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fcategory%2FOrganization%2Fdrawer-and-shelf.png&w=128&q=75`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            name: `ชุดห้องนอน`,
            img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170129736_c_LUXU-VELVET_GY.jpg&w=1920&q=75`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            name: `เฟอร์นิเจอร์`,
            img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fcategory%2FSofa-7.png&w=256&q=75`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            name: `ของตกเเต่งบ้าน`,
            img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F7%2F170113729_1567052578724oGBx_2.jpg&w=1920&q=75`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            name: `โคมไฟเเละหลอดไฟ`,
            img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2Fcache%2F29b3f741dcafc528943c644b5c704259%2F1%2F7%2F170097648_f_paribosta_bk_1_.jpg&w=1920&q=75`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            name: `อุปกรณ์เครื่องครัว`,
            img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170118801_op1_Paradox_SV.JPG&w=1920&q=75`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            name: `สินค้าสำหรับห้องน้ำ`,
            img: `https://cdn.homepro.co.th/ART_IMAGE/10/260/1026083/447x447/21082023_1026083$Imagec1.jpg`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
        {
            name: `อุปกรณ์ซักรีดเเละทำความสะอาด`,
            img: `https://www.indexlivingmall.com/_next/image?url=https%3A%2F%2Fmedia.indexlivingmall.com%2Fmedia%2Fcatalog%2Fproduct%2F1%2F7%2F170116659_op1_MANNO_BE.jpg&w=1920&q=75`,
            review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        },
    ];

    return (
        <Wrapper>
            <Navbar />
            <div className="relative h-[550px] w-[100%] flex justify-center bg-blue-500 mt-[105px]">
                <div className="bg-[#0000007a] w-[100%] absolute h-[100%]"></div>
                <div className="absolute text-white w-[60%] justify-left top-[11rem] xl:w-[70%] lg:w-[80%] md:w-[90%] sm:w-[91%] xsm:w-[85%]">
                    <Fade direction="up">
                        <div className="w-[100%]">
                            <div className="text-[31px] font-[400]">
                                ยินดีต้อนรับ' เข้าสู่ u-palm
                            </div>
                            <div className="text-[14.x] mt-4 text-[#d6d6d6]">
                                มีรถให้เช่ามากกว่า 50 คนทั่วประเทศไทย รับประกันความปลอดภัย
                                เปิดให้บริการมาเเล้วกว่า 5 ปี ถ้าคุณต้องการรถไม่ว่าจะอยู่ที่ไหน
                                นึกถึง Carental
                            </div>
                            {/* search product input*/}
                            <div className='mt-4 flex rounded-md p-[1.5px] gap-1'>
                                <input type="text" placeholder="ค้นหาสิ่งที่คุณต้อง..." className='w-[480px] focus:outline-none pl-3 text-[12.5px] h-[40px] rounded-sm border-[1px] border-[#fff] shadow-inner text-[#000]'></input>
                                <button className='bg-secondary-500  w-[50px] text-[20px] text-[#3e3e3e] hover:bg-secondary-400 transition-all flex items-center justify-center rounded-sm h-[40px]'><IoSearchOutline /></button>
                            </div>
                        </div>
                    </Fade>
                </div>
                <img src={Wallpaper} className=" object-cover w-[100%]"></img>
            </div>

            {/* Hit Hot Products */}
            <div className='flex justify-center w-[100%] mb-5 items-center mt-10'>

                <div className='w-[80%] pb-[1.7rem] flex flex-col gap-4 bg-white pt-3 px-4 shadow-sm sm:w-[90%] xsm:w-[90%]'>

                    {/* Title */}
                    <div className='text-primary-400 pb-3 border-b-[1px] border-gray-200 text-sm'>
                        สินค้าขายดี
                    </div>
                    <Slider {...settings}>
                        {HitHotProds.map((prod) => (
                            <div className='flex flex-col ml-[1.1rem]'>
                                <img src={prod.img} className='w-[160px] rounded-md h-[160px] object-cover'></img>
                                <div className='text-[14px] text-primary-600 mt-2'>{prod.product_name}</div>
                                <div className='text-[12px] text-primary-300'>{prod.supplier}</div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>

            <div className="w-[100%] flex justify-center">
                <div className="w-[80%]">

                </div>
            </div>

            <div className='relative mb-5 w-[100%] flex justify-center mt-5'>
                <div className='w-[80%] flex flex-col'>
                    <img src={promotion} className='w-[100%] h-[330px] object-cover object-center'></img>
                </div>

            </div>

            {/* Suppliers */}
            <div className='flex justify-center w-[100%] mb-5 items-center mt-10'>

                <div className='w-[80%] pb-[1.7rem] flex flex-col gap-4 bg-white pt-3 px-4 shadow-sm sm:w-[90%] xsm:w-[90%]'>
                    {/* Title */}
                    <div className='text-primary-400 pb-3 border-b-[1px] border-gray-200 text-sm'>
                        ผู้จัดจำหน่าย
                    </div>
                    <Slider {...settings}>
                        {suppliers.map((sup) => (
                            <div className='flex flex-col ml-[1.1rem]'>
                                <img src={promotion} className='w-[160px] rounded-md h-[160px] object-cover'></img>
                                <div className='text-[14px] text-primary-600 mt-2'>{sup.supplier_name}</div>
                                <div className='text-[12px] text-primary-300'>{sup.supplier_region}</div>
                            </div>
                        ))}
                    </Slider>

                </div>
            </div>


            {/* Categories */}
            <Fade>
                <div className='flex justify-center mt-5 w-[100%] mb-5 items-center'>

                    <div className='w-[80%] pb-[1.7rem] flex flex-col gap-4 bg-white pt-3 px-4 shadow-sm sm:w-[90%] xsm:w-[90%]'>


                        {/* Title */}
                        <div className='text-primary-400 pb-3 border-b-[1px] border-gray-200 text-sm'>
                            หมวดหมู่
                        </div>
                        {/* Categories Container */}
                        <div className='flex justify-start relative items-center gap-7'>
                            {/* Category */}
                            <div className='flex flex-col items-center cursor-pointer hover:text-secondary-500'>
                                <img src={seed} className='h-[70px] w-[70px]'></img>
                                <p className='text-[12px] transition-all'>เมล็ดพันธุ์</p>
                            </div>
                            {/* Category */}
                            <div className='flex flex-col items-center cursor-pointer hover:text-secondary-500'>
                                <img src={seedling} className='h-[70px] w-[70px]'></img>
                                <p className='text-[12px] transition-all'>ต้นกล้า</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>


            {/* Recommence Product*/}
            <div className='relative w-[100%] flex flex-col justify-center items-center mb-5 mt-5'>
                {/* product container */}
                <div className='w-[80%] gap-4 sm:gap-3 xsm:gap-2 grid grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xsm:grid-cols-2 sm:w-[90%] xsm:w-[90%]'>
                    {/* Product Card */}
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px]'>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px]'>
                        <div className='relative'>
                            <img src={p3} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px] '>
                        <div className='relative'>
                            <img src={p2} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px]'>
                        <div className='relative'>
                            <img src={p6} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px]'>
                        <div className='relative'>
                            <img src={p6} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px] '>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px]'>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px]'>
                        <div className='relative'>
                            <img src={p2} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
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
                    <div className='bg-white flex w-[190px] flex-col border-[1px] mt-3 sm:w-[100%] xsm:w-[157px] '>
                        <div className='relative'>
                            <img src={p2} className='w-[100%] h-[180px] object-cover xsm:h-[120px]'></img>
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
                <div className='w-[80%] flex justify-center mt-10'>
                    <button className='border-[1px] w-[350px] border-primary-500 text-primary-500 h-[35px] hover:bg-primary-500 hover:text-white text-sm transition-all'>ดูเพิ่มเติม</button>
                </div>
            </div>

            {/* <Footer /> */}
            <div className='w-[100%] bg-primary-600 mt-10 flex justify-center py-2'>
                <div className='w-[80%] flex'>
                    <div className='text-white'>
                        Footer
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}

export default Landing
