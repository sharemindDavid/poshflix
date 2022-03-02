import styled, { createGlobalStyle } from "styled-components";

// eslint-disable-next-line import/prefer-default-export
export const OneStyle = createGlobalStyle`


.youtube {
    text-align: center;
    padding: 50px;
}

.myBtn {
    cursor: pointer;
    display: inline-block;
}

.movie-con {
    display: flex;
    flex-direction: column;
    margin: 0 60px 60px 60px;
}

.movie-con h3 {
    color: #fff;
    font-size: x-large;
    margin-bottom: 3px;
    margin-top: 20px;
    font-weight: 400;
}

.movie-con ul li {
    list-style: none;
}

.movie-con-img {
    width: 300px;
    border-radius: 4px;
}

/* The Modal (background) */
.modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    padding-top: 100px; /* Location of the box */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0, 0, 0); /* Fallback color */
    background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

/* Modal Content */
.modal-content {
    background-color: #181818;
    margin: auto;
    padding: 500px 20px 20px 20px;
    border-radius: 10px;
    max-width: 700px;
    position: relative;
    margin-bottom: 200px;
}

.modal-content p {
    color: #fff;
    font-size: 20px;
}

.modal-content h2 {
    color: #fff;
    font-size: 25px;
    padding-bottom: 10px;
}

.modal-content video {
    width: 100%;
}

.movie-img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 10px 10px 0 0;
}

/* The Close Button */
.close {
    position: absolute;
    top: 5px;
    right: 10px;
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    z-index: 2;
}

.close:hover,
.close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
}

footer {
    background-color: black;
    width: 100%;
    margin: 0 auto;
    float: left;
    position: relative;
}

.foot-list {
    border-bottom: rgba(255, 255, 255, 0.4) solid 1px;
}

.foot-list ul {
    width: 80%;
    margin: 0 auto;
    display: flex;
}

.foot-list ul li {
    width: 20%;
    text-align: center;
    list-style: none;
    padding: 30px 0;
}

.clickable:hover {
    text-decoration: underline;
}

.foot-info {
    text-align: center;
    padding-bottom: 40px;
}

.foot-info p {
    margin: 8px 0;
    opacity: 0.4;
}

footer ul li a,
footer p,
footer p a {
    text-decoration: none;
    color: white;
}

.foot-social {
    position: absolute;
    right: 45px;
    bottom: 45px;
}

.foot-social li {
    display: inline-block;
    margin: 8px;
}

.pwa {
    display: none;
}

@media only screen and (max-width: 1220px) {
    .menu-main ul {
        width: 90%;
    }
}

@media only screen and (max-width: 844px) {
    nav ul {
        margin: auto 0px;
    }
    nav .bye {
        display: none;
    }
    nav .come {
        display: flex;
    }

    .bottom-nav {
        justify-content: space-around;
        width: 100%;
    }
    .movie-con {
        margin: 0 10px;
    }
    #profile-selecte {
        padding: 15px;
    }
    .abso-down {
        width: 100vh;
    }
    header:hover ul li ul,
    header:hover .back-drop {
        display: none;
    }
    .foot-list ul {
        width: 100%;
        margin: 0 auto;
        display: block;
    }
    .foot-list ul li {
        width: 100%;
        padding: 10px 0;
        border-bottom: rgba(255, 255, 255, 0.4) solid 1px;
    }
    .foot-social {
        position: relative;
        right: 0;
        bottom: 0;
    }
    .menu-wrap {
        display: inline-block;
    }
    .foot-social li a .fab {
        transform: scale(1.6);
        padding: 10px;
    }
    .sub-nav ul {
        width: 90%;
    }
    .menu-main {
        text-align: center;
    }
    .menu-main ul {
        display: inline-block;
        width: 100%;
    }
    .menu-main ul li {
        width: 50%;
        margin: 20px auto;
    }
    .profile-name {
        font-size: 12px;
    }
    .modal-content {
        margin: 60px 20px 100px 20px;
    }
    .modal-content {
        padding: 60% 20px 20px 20px;
    }
    .pwa {
        display: inline-block;
        position: absolute;
        bottom: 0;
        z-index: 9;
    }
    .pwa img {
        width: 200px;
    }
}

@media only screen and (max-width: 450px) {
    .sub-nav ul li a {
        padding: 30px 12%;
        font-size: 15px;
    }
    .sub-nav ul .fas {
        transform: scale(0.8);
        margin-top: 3px !important;
    }
}

@media all and (display-mode: standalone) {
    .pwa {
        display: none;
    }
}

`;
