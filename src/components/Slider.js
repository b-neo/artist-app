import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import S1img1 from "../img/1.jpg";
import S1img2 from "../img/2.jpg";
import S1img3 from "../img/3.jpg";
import S1img4 from "../img/4.jpg";
import S1img5 from "../img/5.jpg";
import S1img6 from "../img/6.jpg";
import S1img7 from "../img/7.jpg";
import S1img8 from "../img/8.jpg";
import S1img9 from "../img/9.jpg";
import S1img10 from "../img/10.jpg";
import S1img11 from "../img/11.jpg";
import S1img12 from "../img/12.jpg";
import S1img13 from "../img/13.jpg";
import S1img14 from "../img/14.jpg";
import S1img15 from "../img/15.jpg";

class ImgShow extends React.Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 500,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={S1img1} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img2} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img3} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img4} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img5} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img6} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img7} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img8} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img9} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img10} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img11} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img12} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img13} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img14} alt="SlideImage" />
                </div>
                <div>
                    <img src={S1img15} alt="SlideImage" />
                </div>
            </Slider>
        );
    }
}
export default ImgShow;
