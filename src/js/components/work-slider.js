// import Swiper JS
import Swiper, {Navigation, Thumbs} from 'swiper';
// import Swiper styles
import 'swiper/swiper-bundle.min.css';


var swiper = new Swiper(".mySwiper", {
    spaceBetween: 16,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
});

var swiper2 = new Swiper(".mySwiper2", {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 10,

    thumbs: {
        swiper: swiper,
    }
});


