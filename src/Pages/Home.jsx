import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Home = () => {
    return (
        <div>
            <Swiper
                navigation={true}
                modules={[Navigation]}
                loop={true}
                className="mySwiper z-0"
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: true,
                }}
            >
                <SwiperSlide>
                    <div id="slide1" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid1.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide2" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid2.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide3" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid3.png" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide4" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid4.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div id="slide5" className="carousel-item relative h-[35vw] w-full">
                        <img src="slid5.jpg" className="w-full" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Home;