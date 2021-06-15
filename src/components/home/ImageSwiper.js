import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {
	Navigation,
	Pagination,
	Scrollbar,
	A11y
} from 'swiper';

// style
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function ImageSwiper() {
	return (
		<Swiper
			className="swiper-container"
			spaceBetween={50}
			slidesPerView={4}
				navigation
			pagination={{ clickable: true }}
			scrollbar={{ draggable: true }}
			onSwiper={(swiper) => console.log(swiper)}
			onSlideChange={() => console.log("slide change")}
		>
			<SwiperSlide><img src="/img/swiper.png" /></SwiperSlide>
			<SwiperSlide>slide2</SwiperSlide>
			<SwiperSlide>slide3</SwiperSlide>
		</Swiper>
	)
}

export default ImageSwiper;