// import React from "react";

// console.log("hi");
// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { date: new Date() };
//     }

//     render() {
//         return (
//             <header>
//                 <nav>
//                     <div className="inner-nav">
//                         <ul className="come">
//                             <li>
//                                 <a
//                                     onClick={() => window.location.reload(true)}
//                                     href="/"
//                                 >
//                                     <img
//                                         onClick={() => window.location.reload()}
//                                         src="images/favcon.png"
//                                         alt=""
//                                     />
//                                 </a>
//                             </li>
//                         </ul>
//                         <ul className="bye">
//                             <li>
//                                 <a
//                                     onClick={() => window.location.reload(true)}
//                                     href="/"
//                                 >
//                                     <img src="images/main-logo.png" alt="" />
//                                 </a>
//                             </li>
//                             <li>
//                                 <a href="#tv-show">TV프로그램</a>
//                             </li>
//                             <li>
//                                 <a href="#movie-id">영화</a>
//                             </li>
//                             <li>
//                                 <a
//                                     href="https://docs.google.com/forms/d/e/1FAIpQLSf9n7M0ocIkulIR3tGvFkb5-iiiDFmMluowwPq0Bke-MiUn1A/viewform?vc=0&c=0&w=1&flr=0"
//                                     target="_blank"
//                                     rel="noreferrer"
//                                 >
//                                     내가 원하는 영화 요청
//                                 </a>
//                             </li>
//                         </ul>
//                         <ul>
//                             <li className="bye">
//                                 <a href="/">검색</a>
//                             </li>
//                             <li className="bye">
//                                 <a href="/">알림</a>
//                             </li>
//                             <li id="profile-selecte">
//                                 <img src="images/david.png" alt="" />
//                             </li>
//                         </ul>
//                     </div>
//                     <ul className="bottom-nav come">
//                         <li>
//                             <a href="/">TV프로그램</a>
//                         </li>
//                         <li>
//                             <a href="/">영화</a>
//                         </li>
//                         <li>
//                             <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9n7M0ocIkulIR3tGvFkb5-iiiDFmMluowwPq0Bke-MiUn1A/viewform?vc=0&c=0&w=1&flr=0">
//                                 내가 원하는 영화 요청
//                             </a>
//                         </li>
//                     </ul>
//                 </nav>
//                 <div className="menu-wrap">
//                     <div className="menu">
//                         <div>
//                             <div>
//                                 <div className="pro-logo">
//                                     <img
//                                         src="https://fontmeme.com/permalink/201109/e52951d466a0db107caf4e426bd6430b.png"
//                                         alt=""
//                                     />
//                                 </div>
//                                 <h2>Poshflix를 시청할 프로필을 선택하세요.</h2>
//                                 <ul>
//                                     <li className="profile">
//                                         <div>
//                                             <a href="master.html">
//                                                 <div>
//                                                     <div
//                                                         className="profile-icon"
//                                                         style={{
//                                                             backgroundImage:
//                                                                 "url(images/pjy-face.JPG)",
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <span className="profile-name">
//                                                     빡s flex
//                                                 </span>
//                                             </a>
//                                         </div>
//                                     </li>
//                                     <li className="profile">
//                                         <div>
//                                             <a href="master.html">
//                                                 <div>
//                                                     <div
//                                                         className="profile-icon"
//                                                         style={{
//                                                             backgroundImage:
//                                                                 "url(https://occ-0-988-993.1.nflxso.net/dnm/api/v6/0RO1pLmU93-gdXvuxd_iYjzPqkc/AAAABXhp5HP4mhkdVeQArMrlAQzXKC2Msh_QSY1MEgD1JkcGpPsVWktTQPACg__X19xET77cgRGRVYpDYbNxcr5YjWGmui83.png?r=a38)",
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <span className="profile-name">
//                                                     나샤
//                                                 </span>
//                                             </a>
//                                         </div>
//                                     </li>
//                                     <li className="profile">
//                                         <div>
//                                             <a href="master.html">
//                                                 <div>
//                                                     <div
//                                                         className="profile-icon"
//                                                         style={{
//                                                             backgroundImage:
//                                                                 "url(images/netflix-face.jpg)",
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <span className="profile-name">
//                                                     마리아
//                                                 </span>
//                                             </a>
//                                         </div>
//                                     </li>
//                                     <li className="profile">
//                                         <div>
//                                             <a href="master.html">
//                                                 <div>
//                                                     <div
//                                                         className="profile-icon"
//                                                         style={{
//                                                             backgroundImage:
//                                                                 "url(images/netflix-face.jpg)",
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <span className="profile-name">
//                                                     에클
//                                                 </span>
//                                             </a>
//                                         </div>
//                                     </li>
//                                     <li className="profile">
//                                         <div>
//                                             <a href="master.html">
//                                                 <div>
//                                                     <div
//                                                         className="profile-icon"
//                                                         style={{
//                                                             backgroundImage:
//                                                                 "url(images/netflix-face.jpg)",
//                                                         }}
//                                                     />
//                                                 </div>
//                                                 <span className="profile-name">
//                                                     라라
//                                                 </span>
//                                             </a>
//                                         </div>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </header>
//         );
//     }
// }

// export default Header;
