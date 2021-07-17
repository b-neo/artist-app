import React from "react";
import ImgShow from "./Slider";
import logo from "../img/logo.png";
import Menu from "./menu";

class Home extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="screen__main">
                    <img className="home__content" src={logo} alt="logo" />
                    <div className="margin1 home__content">
                        <span className="bolder">제 4회 수성신진작가</span>
                        <span className="bold">
                            2020.<span className="bolder large">7.8</span>{" "}
                            <span className="gray bold">수</span> -{" "}
                            <span className="bolder large">7.18</span>{" "}
                            <span className="gray bold">토</span>
                        </span>
                        <span className="gray bold">호반갤러리</span>
                    </div>
                    <div className="margin1 home__content">
                        <span className="larger bolder">안민</span>
                        <span className="gray bolder">Min AHN</span>
                    </div>
                    <div className="slider">
                        <ImgShow />
                    </div>
                </div>
                <Menu title="Home" />
            </div>
        );
    }
}

export default Home;
