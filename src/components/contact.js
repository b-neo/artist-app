import React from "react";
import logo from "../img/logo.png";
import map from "../img/map.png";
import Menu from "./menu";

class Cpntact extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="screen__main">
                    <div className="largest bolder gray">Map</div>
                    <div className="margin1"></div>
                    <div className="map">
                        <a href="https://place.map.kakao.com/8453110">
                            <img src={map} alt="mapImage" />
                        </a>
                    </div>
                    <div className="large bold">
                        지도를 누르면 카카오맵이 열립니다.
                    </div>
                    <div className="margin2"></div>
                    <img src={logo} alt="logo" />
                    <div className="large bold">
                        대구광역시 수성구 무학로 180 (지산동 1137-3)
                    </div>
                    <div className="margin1"></div>
                    <div className="large bold">
                        <a href="tel:053-668-1800">053-668-1800</a>
                    </div>
                </div>
                <Menu title="Contact" />
            </div>
        );
    }
}

export default Cpntact;
