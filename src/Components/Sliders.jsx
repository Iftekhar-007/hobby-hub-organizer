// import React from "react";
// import Swiper from "swiper";
// import { Navigation, Pagination } from "swiper/modules";
// // import Swiper and modules styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// // init Swiper:

// const Sliders = () => {
//   const swiper = new Swiper(".swiper", {
//     // Optional parameters
//     direction: "vertical",
//     loop: true,

//     // If we need pagination
//     pagination: {
//       el: ".swiper-pagination",
//     },

//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },

//     // And if we need scrollbar
//     scrollbar: {
//       el: ".swiper-scrollbar",
//     },
//   });
//   return (
//     <div>
//       <div class="swiper">
//         {/* <!-- Additional required wrapper --> */}
//         <div class="swiper-wrapper">
//           {/* <!-- Slides --> */}
//           <div class="swiper-slide">Slide 1</div>
//           <div class="swiper-slide">Slide 2</div>
//           <div class="swiper-slide">Slide 3</div>
//           ...
//         </div>
//         {/* <!-- If we need pagination --> */}
//         <div class="swiper-pagination"></div>

//         {/* <!-- If we need navigation buttons --> */}
//         <div class="swiper-button-prev"></div>
//         <div class="swiper-button-next"></div>

//         {/* <!-- If we need scrollbar --> */}
//         <div class="swiper-scrollbar"></div>
//       </div>
//     </div>
//   );
// };

// export default Sliders;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

const Sliders = () => {
  return (
    <Swiper
      direction="horizontal"
      loop={true}
      pagination={{ clickable: true }}
      navigation={true}
      //   scrollbar={{ draggable: true }}
      modules={[Navigation, Pagination]}
      style={{ height: "300px" }} // optional, for vertical scrolling to work
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      {/* Add more slides if needed */}
    </Swiper>
  );
};

export default Sliders;
