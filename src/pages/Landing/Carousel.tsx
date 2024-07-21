import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from '../../components/ExampleCarouselImage';
import PalmFramImage from "../../assets/images/1000_F_714677311_v2KOw0jl1aUx7g3SpvbAeGiB2aaYDqyQ.jpg"
import promotion from "../../assets/images/promotion.jpg"
import PalmFramImage2 from "../../assets/images/The-Borneo-Post-Sustainable-Palm-Oil-Communities-of-Sabah-and-Sarawak-01.jpg"

const ControlledCarousel: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    const handleSelect = (selectedIndex: number) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel activeIndex={index} onSelect={(selectedIndex: number) => handleSelect(selectedIndex)}>
            <Carousel.Item>
                {/* <div className='bg-[#0000003f] z-5 w-[100%] h-[330px] absolute'></div> */}
                <img className="w-[100%] h-[330px] object-cover " src={promotion}></img>
                {/* <Carousel.Caption>
                    <h1 className='text-[20px] mb-3'>ยินดีต้อนรับเข้าสู่ u-palm</h1>
                    <p className='text-[11px]'>เเพตฟอร์มซื้อขาย เมล็ดพันธุ์ และ ต้นกล้า ปาล์ม เจ้าแรกในไทย มี supplier มากกว่า 40 เเห่งทั้งในประเทศไทย และ ต่างประเทศ การันตีความปลอดภัย</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                {/* <div className='bg-[#0000003f] z-5 w-[100%] h-[330px] absolute'></div> */}
                <img className="w-[100%] h-[330px] object-cover " src={promotion}></img>
                {/* <Carousel.Caption>
                    <h1 className='text-[20px] mb-3'>ยินดีต้อนรับเข้าสู่ u-palm</h1>
                    <p className='text-[11px]'>เเพตฟอร์มซื้อขาย เมล็ดพันธุ์ และ ต้นกล้า ปาล์ม เจ้าแรกในไทย มี supplier มากกว่า 40 เเห่งทั้งในประเทศไทย และ ต่างประเทศ การันตีความปลอดภัย</p>
                </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
                {/* <div className='bg-[#0000003f] z-5 w-[100%] h-[330px] absolute'></div> */}
                <img className="w-[100%] h-[330px] object-cover " src={promotion}></img>
                {/* <Carousel.Caption>
                    <h1 className='text-[20px] mb-3'>ยินดีต้อนรับเข้าสู่ u-palm</h1>
                    <p className='text-[11px]'>เเพตฟอร์มซื้อขาย เมล็ดพันธุ์ และ ต้นกล้า ปาล์ม เจ้าแรกในไทย มี supplier มากกว่า 40 เเห่งทั้งในประเทศไทย และ ต่างประเทศ การันตีความปลอดภัย</p>
                </Carousel.Caption> */}
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarousel;