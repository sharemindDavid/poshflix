import React from "react";
import { Link } from "react-router-dom";

function ProfileItem(props) {
    return (
        <li className="profile">
            <div>
                <div>
                    <Link to="/main">
                        <div
                            className="profile-icon"
                            style={{
                                backgroundImage: `url(assets/images/${props.icon}.jpg)`,
                            }}
                        />
                    </Link>
                </div>
                <span className="profile-name">{props.name}</span>
            </div>
        </li>
    );
}

export default ProfileItem;
