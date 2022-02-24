import React from "react";
import "./footer.scss";

function Footer() {
    return (
        <footer>
            <div className="inner-fooder">
                <div className="foot-list">
                    <ul>
                        <li>
                            <a href="개인정보.html">개인정보취급방침</a>
                        </li>
                        <li>
                            <a href="dd/index.html">이용약관</a>
                        </li>
                        <li>
                            <a href="footer-1.html">상담센터</a>
                        </li>
                        <li>
                            <a href="footer-2.html">PJY 안내</a>
                        </li>
                        <li>
                            <a href="#header">사이트맵</a>
                        </li>
                    </ul>
                </div>
                <div className="foot-info">
                    <ul className="foot-social">
                        <li>
                            <a
                                href="https://www.instagram.com/pjy0_02/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i
                                    className="fab fa-instagram-square foot-social-i"
                                    style={{
                                        fontSize: 40,
                                        color: "rgba(255, 255, 255, 0.4)",
                                    }}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/pjy0_02/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <i
                                    className="fab fa-twitter-square foot-social-i"
                                    style={{
                                        fontSize: 40,
                                        color: "rgba(255, 255, 255, 0.4)",
                                    }}
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="healing-insland-redesign/index.html"
                                target="_blank"
                            >
                                <i
                                    className="fab fa-facebook-square foot-social-i"
                                    style={{
                                        fontSize: 40,
                                        color: "rgba(255, 255, 255, 0.4)",
                                    }}
                                />
                            </a>
                        </li>
                    </ul>
                    <p>
                        대표 : 빡jy |{" "}
                        <a href="" className="clickable" target="_blank">
                            서귀포시 라라면 새우리
                        </a>{" "}
                        |{" "}
                        <a href="tel:064-792-3927" className="clickable">
                            T.064.792.3927
                        </a>
                    </p>
                    <p>
                        Copyright © PJY. All rights reserved. (made by{" "}
                        <a
                            href="https://www.instagram.com/davidiskim/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            David Kim
                        </a>
                        )
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
