import React from "react";
import { Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";

function ProfileButton() {
    return (
        <div className="ProfileButton">
            <div>
                <Link className="header-link" to={ROUTES.PROFILE}>
                    <img
                        src="assets/images/netflix-face.jpg"
                        alt="profile select button/pic"
                    />
                </Link>
            </div>
        </div>
    );
}

export default ProfileButton;
