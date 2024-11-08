import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import image1 from '../../../assets/images/Copy-of-DJI_0015 5.png';
import image2 from '../../../assets/images/Copy-of-DJI_0015 6.png';
import image3 from '../../../assets/images/Copy-of-DJI_0015 7.png';
import image4 from '../../../assets/images/Copy-of-DJI_0015 8.png';
import image5 from '../../../assets/images/Copy-of-DJI_0015 9.png';

const Slider = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
                <SwiperSlide>
                    <img src={image1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image3} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image4} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={image5} alt="" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;