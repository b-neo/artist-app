import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import S2img1 from "../img2/1.jpg";
import S2img2 from "../img2/2.jpg";
import S2img3 from "../img2/3.jpg";
import S2img4 from "../img2/4.jpg";
import S2img5 from "../img2/5.jpg";
import S2img6 from "../img2/6.jpg";
import S2img7 from "../img2/7.jpg";
import S2img8 from "../img2/8.jpg";
import S2img9 from "../img2/9.jpg";
import S2img10 from "../img2/10.jpg";

class Slider2 extends React.Component {
    render() {
        const settings = {
            dots: true,
            autoplay: true,
            infinite: true,
            speed: 500,
            fade: true,
            slidesToShow: 1,
            slidesToScroll: 1,
        };
        return (
            <Slider {...settings}>
                <div>
                    <img src={S2img1} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img2} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img3} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img4} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img5} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img6} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img7} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img8} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img9} alt="DPImage" />
                </div>
                <div>
                    <img src={S2img10} alt="DPImage" />
                </div>
            </Slider>
        );
    }
}
export default Slider2;
