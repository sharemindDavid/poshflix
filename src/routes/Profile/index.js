import React from "react";
import { Link } from "react-router-dom";
import ProfileItem from "./components/ProfileItem";
import "./styles.scss";

function Profile(props) {
    return (
        <div className="menu">
            <div>
                <div>
                    <div className="pro-logo">
                        <Link to="/">
                            <img
                                src="https://fontmeme.com/permalink/201109/e52951d466a0db107caf4e426bd6430b.png"
                                alt=""
                            />
                        </Link>
                    </div>
                    <h2>Poshflix를 시청할 프로필을 선택하세요.</h2>
                    <ul>
                        {props.profileList.map((it) => (
                            <ProfileItem key={it.id} {...it} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Profile;
