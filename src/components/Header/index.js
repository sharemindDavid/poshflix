import React from "react";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import ProfileButton from "./ProfileButton";
import "./styles.scss";
import * as ROUTES from "../../constants/routes";

function Header() {
    const login = " ";
    return (
        <header className="Header">
            <nav>
                <div className="inner-nav">
                    <ul>
                        <li>
                            <div>
                                <NavLink
                                    className="header-link"
                                    to={ROUTES.HOME}
                                >
                                    <img
                                        src="assets/images/main-logo.png"
                                        alt=""
                                    />
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-active header-link"
                                        : "header-link"
                                }
                                to={ROUTES.HOME}
                            >
                                TV프로그램
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-active header-link"
                                        : "header-link"
                                }
                                to={ROUTES.BROWSE}
                            >
                                영화
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                className={({ isActive }) =>
                                    isActive
                                        ? "nav-active header-link"
                                        : "header-link"
                                }
                                to={ROUTES.FORM}
                            >
                                내가 원하는 영화 요청
                            </NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li>검색</li>
                        <li>알림</li>
                        <li>{login ? <ProfileButton /> : <LoginButton />}</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
