import React from "react";
import Menu from "./menu";
import Profile from "../img/profile.jpg";

class Artist extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="screen__main profile">
                    <div className="bolder gray largest">Profile</div>
                    <div className="margin1"></div>
                    <img src={Profile} alt="profileImg" />
                    <div className="margin1"></div>
                    <div className="bolder larger">안민</div>
                    <div className="bolder larger gray">Min Ahn</div>
                    <div className="margin1"></div>
                    <div className="artistInfo left">
                        <div className="larger bold left">
                            계명대학교 서양화과 졸업
                        </div>
                        <div className="margin1"></div>
                        <div className="large bolder">Solo Exhibition</div>
                        <div className="margin1"></div>
                        <ul className="large">
                            <li>
                                2020 (예정)수성신진작가공모전, <br />
                                양심의 모양새(가제) (수성아트피아, 대구)
                            </li>
                            <li>2014 Courtship(스페이스 가창, 대구)</li>
                        </ul>
                        <div className="margin1"></div>
                        <div className="large bolder">
                            Selected Group Exhibition
                        </div>
                        <div className="margin1"></div>
                        <ul className="large">
                            <li>2018 Interactive (수창맨숀, 대구)</li>
                            <li>2018 유익한 정의 (대안공간 싹, 대구)</li>
                        </ul>
                        <div>
                            <a href="">프로필 전체 보기</a>
                        </div>
                    </div>
                    <div className="margin2"></div>
                    <div className="bolder gray largest">Artist Note</div>
                    <div className="margin1"></div>
                    <div className="large artistNote">
                        도덕의 기준은 문화, 상황 별로 달라질 수 있으나 타인에게
                        피해를 입히지 않는다는 전제는 대부분 비슷하다. 일상에서
                        붕괴되는 도덕과 양심 없는 상황들을 덥하며 나의 기준에서
                        나름의 정의 구현을 해본다.
                        <br />
                        당장 거리에 나가서 쉽게 접할 수 있는 인도의 불법 주정차
                        차량들을 보면서 수 많은 사람들, 어쩌면 나 역시 무뎌진
                        도덕성에 대해 궁금증을 가진다.
                        <br />
                        한편으로 죄의 질, 무게에 따라 폭력이나 과격한 파괴행위는
                        정당성을 가질 수 있을지, 만약 인도 위의 불법 차량에 해를
                        가해도 상관 없다는 법이 생긴다면 그로 인한 누군가를 향한
                        폭력과 또 다른 간접 피해자의 고통은 내가 원하던 것일지.
                    </div>
                </div>
                <Menu title="Artist" />
            </div>
        );
    }
}

export default Artist;
