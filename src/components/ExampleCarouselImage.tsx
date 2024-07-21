import React from 'react'

interface IProp {
    text: string
}

function ExampleCarouselImage({ text }: IProp) {
    return (
        <div className='bg-[#777777] h-[330px] flex justify-center items-center'>
            <div className='text-[#444444] text-[20px]'>
                {text}
            </div>
        </div>
    )
}

export default ExampleCarouselImage
