import React from "react";
import DPShow from "./Slider2";
import Menu from "./menu";

class DP extends React.Component {
    render() {
        return (
            <div className="screen">
                <div className="screen__main">
                    <div className="largest bolder gray">Interview</div>
                    <div className="margin1"></div>
                    <div className="bolder largest">
                        안민,
                        <br />
                        개인적 이기주의를
                        <br />
                        직관적으로 드로잉하다
                    </div>
                    <div className="margin1"></div>
                    <div className="large fontmj">
                        인간의 도덕적 이중성에 대한 분노 <br />
                        그것을 바로 잡고 싶은 욕망이, 시작이었죠.
                    </div>
                    <div className="margin1"></div>
                    <div className="large">
                        "자동차라는 게, 나와 타자를 바라보는
                        <br />
                        현대인의 이중성을 나타내고 있다고 생각해요.
                        <br />차 안과 밖은 단절된 세상이거든요.
                    </div>
                    <div className="margin1"></div>
                    <div className="large">
                        <a href="" className="bold blue">
                            인터뷰 전문 보기
                        </a>
                    </div>
                    <div className="margin2"></div>
                    <div className="slider">
                        <DPShow />
                    </div>
                </div>

                <Menu title="DP" />
            </div>
        );
    }
}

export default DP;
