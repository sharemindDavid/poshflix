import React from "react";

function ProfileItem(props) {
    return (
        <li className="profile">
            <div>
                <a href="master.html">
                    <div>
                        <div
                            className="profile-icon"
                            style={{
                                backgroundImage: `url(assets/images/${props.icon}.png)`,
                            }}
                        />
                    </div>
                    <span className="profile-name">{props.name}</span>
                </a>
            </div>
        </li>
    );
}

export default ProfileItem;
