import { params } from '../_config';
import Swiper, { Autoplay, Navigation, Pagination, SwiperOptions } from 'swiper';
import 'swiper/swiper-bundle.css';

Swiper.use([Autoplay, Navigation, Pagination]);



const About = ()=>{

  const swiperParams: SwiperOptions = {
    slidesPerView: 2,
    loop: true,
    freeMode:true,
    speed:8000,
    autoplay: {
      delay: 1,
    }
  };

  const mySwiper = new Swiper(`#about .swiper-container`, swiperParams);
}

export default About;