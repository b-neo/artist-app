import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
    state = {
        title: "Home",
    };

    render() {
        return (
            <div className="menu">
                <Link
                    className={
                        this.props.title === "Home"
                            ? "active menu__item"
                            : "menu__item"
                    }
                    to={{ pathname: "/", state: { title: "Home" } }}
                >
                    <div>Home</div>
                </Link>
                <Link
                    className={
                        this.props.title === "Artist"
                            ? "active menu__item"
                            : "menu__item"
                    }
                    to={{ pathname: "/Artist", state: { title: "Artist" } }}
                >
                    <div>Artist</div>
                </Link>
                <Link
                    className={
                        this.props.title === "DP"
                            ? "active menu__item"
                            : "menu__item"
                    }
                    to={{ pathname: "/DP", state: { title: "DP" } }}
                >
                    <div>DP</div>
                </Link>
                <Link
                    className={
                        this.props.title === "Contact"
                            ? "active menu__item"
                            : "menu__item"
                    }
                    to={{ pathname: "/Contact", state: { title: "Contact" } }}
                >
                    <div>Contact</div>
                </Link>
            </div>
        );
    }
}

export default Menu;
