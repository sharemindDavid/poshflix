import React from "react";
import { OneStyle } from "./Browse.styled";

export default function Browse() {
	// Get the button that opens the modal
	let btn = document.querySelectorAll(".modal-button");

	// All page modals
	let modals = document.querySelectorAll(".modal");

	// Get the <span> element that closes the modal
	let spans = document.getElementsByClassName("close");

	// When the user clicks the button, open the modal
	for (var i = 0; i < btn.length; i++) {
		btn[i].onclick = function (e) {
			e.preventDefault();
			modal = document.querySelector(e.target.getAttribute("href"));
			modal.style.display = "block";
		};
	}

	// When the user clicks on <span> (x), close the modal
	for (var i = 0; i < spans.length; i++) {
		spans[i].onclick = function () {
			for (var index in modals) {
				if (typeof modals[index].style !== "undefined") modals[index].style.display = "none";
			}
		};
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function (event) {
		if (event.target.classList.contains("modal")) {
			for (var index in modals) {
				if (typeof modals[index].style !== "undefined") modals[index].style.display = "none";
			}
		}
	};
	return (
		<>
			<OneStyle />
			<main>
				<div className="movie-con">
					<ul className="movie-icon">
						<h3>호러 드라마</h3>
						{/* walking dead btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal1" src="assets/images/poster/the-walking-dead.png" alt="the walking dead" />
						</li>
						{/* walking dead modal */}
						<div id="myModal1" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/the-walking-dead-s1.png" alt="" />
								<p>
									2019 시즌 10개 <br />
									<br />
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									시즌 1: 1화 "사라지다" <br />
									<br />
									어느 날 갑자기 좀비가 점령해버린 세상. 지금까지 살아온 방식은 잊어야 한다. 우연히 마주친 모건 부자에게 새로운 생존 법칙을 배우는 릭. 사라진 가족, 꼭 찾고 말리라.
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="B" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="B">시즌10</label>
											<ul id="twds10" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* kingdom btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal2" src="assets/images/poster/kingdom.jpg" alt="kingdom" />
						</li>
						{/* kingdom modal */}
						<div id="myModal2" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/kingdom-inner.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									어느 날 갑자기 좀비가 점령해버린 세상. 지금까지 살아온 방식은 잊어야 한다. 우연히 마주친 모건 부자에게 새로운 생존 법칙을 배우는 릭. 사라진 가족, 꼭 찾고 말리라.
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="A" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="A">킹덤</label>
											<ul id="kingdom1" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						<h3 id="movie-id">영화</h3>
						{/* mulan btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal3" src="assets/images/poster/mulan.jpg" alt="mulan" />
						</li>
						{/* mulan modal */}
						<div id="myModal3" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/mulan-modal.jpg" alt="" />
								<h2>뮬란</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/Mulan/Mulan.2020.1080p.WEBRip.x264.AAC5.1-[YTS.MX].mp4" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/Mulan/Mulan.2020.1080p.WEBRip.x264-RARBG.Multi.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* harry potter btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal4" src="assets/images/poster/harry-potter-post.jpeg" alt="Harry Potter" />
						</li>
						{/* harry potter modal */}
						<div id="myModal4" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/harry-potter-modal.jpeg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									7편의 완부작 <br />
									<br />
									영국의 작가 J. K. 롤링의 판타지 소설 해리 포터 시리즈의 주인공. 풀 네임은 해리 제임스 포터. 과거 볼드모트의 악행으로부터 유일하게 생존한 인물. 일명 살아남은 아이다. 생년월일은 1980년 7월 31일이다. 부모는 제임스 포터와 릴리 포터, 대부는 시리우스 블랙. 론 위즐리와는 형제 같은 친구이며 그의 부모인 아서 위즐리와 몰리 위즐리는 거의 양부모나 다름없다. 버넌 더즐리와 피튜니아 더즐리에게 유년 시절 무시를 당했다.
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="D" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="D">해리포터</label>
											<ul id="hpmovie" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* tenet btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal6" src="assets/images/poster/tenet.jpg" alt="mulan" />
						</li>
						{/* tenet modal */}
						<div id="myModal6" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/tenet-poster.jpg" alt="" />
								<h2>테넷</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/tenet/tenet.m4v" type="video/mp4" />
								</video>
							</div>
						</div>
						{/* you name btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal8" src="assets/images/poster/yourname.jpeg" alt="mulan" />
						</li>
						{/* your name modal */}
						<div id="myModal8" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/yourname-poster.jpeg" alt="" />
								<h2>너의 이름은???????</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/your-name/your-name.mp4" type="video/mp4" />
								</video>
							</div>
						</div>
						{/* ww84 btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal10" src="assets/images/poster/ww84.jpg" alt="ww84" />
						</li>
						{/* ww84 modal */}
						<div id="myModal10" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/ww84-poster.jpg" alt="" />
								<h2>원더우먼 1984</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/ww84/ww84.mp4" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/ww84/ww84.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* call btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal11" src="assets/images/poster/call.jpg" alt="call" />
						</li>
						{/* call modal */}
						<div id="myModal11" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/call-poster.jpg" alt="" />
								<h2>콜 | Call</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/call/call.m4v" type="video/mp4" />
								</video>
							</div>
						</div>
						{/* soul btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal12" src="assets/images/poster/soul.jpg" alt="call" />
						</li>
						{/* soul modal */}
						<div id="myModal12" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/soul-poster.jpg" alt="" />
								<h2>소울 | soul</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/soul/soul.m4v" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/soul/soul.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* spiderman btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal13" src="assets/images/poster/spider-man-mm.jpg" alt="call" />
						</li>
						{/* spiderman modal */}
						<div id="myModal13" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/spider-man-mm-poster.jpg" alt="" />
								<h2>Spider Man InTo The Spider Verse</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/spider-man-mm/spider-man-mm.mp4" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/spider-man-mm/spider-man-mm.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* dong-ju btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal15" src="assets/images/poster/dong.jpg" alt="call" />
						</li>
						{/* dong-ju modal */}
						<div id="myModal15" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/dong-poster.jpg" alt="" />
								<h2>동주</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/dong/dong.mp4" type="video/mp4" />
								</video>
							</div>
						</div>
						{/* aladdin btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal16" src="assets/images/poster/aladdin.jpg" alt="call" />
						</li>
						{/* aladdin modal */}
						<div id="myModal16" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/aladdin-poster.jpg" alt="" />
								<h2>Aladdin</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/Aladdin/Aladdin.2019.1080p.BluRay.x265-RARBG.mp4" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/Aladdin/Aladdin.2019.1080p.BluRay.x264-RARBG.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* simpsons-movie btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal19" src="assets/images/poster/simpson-movie.jpg" alt="call" />
						</li>
						{/* simpsons-movie modal */}
						<div id="myModal19" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/simpson-movie.jpg" alt="" />
								<h2>The Simpsons Movie</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/simpson-movie/simpsons.m4v" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/simpson-movie/The.Simpsons.Movie.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* ironman1 btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal20" src="assets/images/poster/Iron-Man.jpg" alt="call" />
						</li>
						{/* ironman1 modal */}
						<div id="myModal20" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/Iron-Man-poster.jpg" alt="" />
								<h2>Iron-Man</h2>
								<video controls="controls" id="video1" poster="assets/images/poster/Iron-Man.jpg" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/Iron-Man/Iron.Man.2008.1080p.BrRip.x264.YIFY.mp4" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/Iron-Man/Iron.Man.2008.1080p.BrRip.x264.YIFY.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* bubble boy btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal22" src="assets/images/poster/bubble-boy.jpg" alt="boy" />
						</li>
						{/* bubble boy modal */}
						<div id="myModal22" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/bubble-boy.jpg" alt="" />
								<h2>bubble-boy 2001</h2>
								<video controls="controls" id="video1" width="80%" preload="none">
									<source src="http://source.poshflix.me/movies/bubble-boy/bubble-boy.mp4" type="video/mp4" />
									<track src="http://source.poshflix.me/movies/bubble-boy/bubble-boy.vtt" srcLang="ko" label="Korean" default />
								</video>
							</div>
						</div>
						{/* narnia btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal23" src="assets/images/poster/Narnia.jpg" alt="narnia" />
						</li>
						{/* narnia modal */}
						<div id="myModal23" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/Narnia.jpg" alt="" />
								<p>나니아</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="O" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="O">나니아 연대기</label>
											<ul id="narnia" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* john wick btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal27" src="assets/images/poster/john-wick-poster.jpg" alt="john wick" />
						</li>
						{/* john wick modal */}
						<div id="myModal27" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/john-wick.jpg" alt="john wick" />
								<p>존윅</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="Z" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="Z">존</label>
											<ul id="john" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* black widow btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal29" src="assets/images/poster/black_widow.jpg" alt="black widow" />
						</li>
						{/* black widow modal */}
						<div id="myModal29" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/black_widow-poster.jpg" alt="black widow" />
								<h2>Black Widow</h2>
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="AB" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="AB">Black Widow</label>
											<ul id="bw" onclick="cbclick(event)">
												<li>
													<div className="sub-item">
														<input type="checkbox" id="AB-A" />
														<img src="assets/images/Arrow.png" className="arrow" />
														<label htmlFor="AB-A">Black Widow 1080p</label>
														<ul loading="lazy">
															<p>1080p</p>
															<video controls="controls" id="video1" width="80%" preload="none">
																<source src="http://source.poshflix.me/movies/black_widow/black_widow.mp4" type="video/mp4" />
																<track src="http://source.poshflix.me/movies/black_widow/black_widow.vtt" srcLang="ko" label="Korean" default />
															</video>
														</ul>
													</div>
												</li>
												<li>
													<div className="sub-item">
														<input type="checkbox" id="AB-B" />
														<img src="assets/images/Arrow.png" className="arrow" />
														<label htmlFor="AB-B">Black Widow 4K</label>
														<ul loading="lazy">
															<p>4K</p>
															<video controls="controls" id="video1" width="80%" preload="none">
																<source src="http://source.poshflix.me/movies/black_widow_4k/black_widow_4k.mp4" type="video/mp4" />
																<track src="http://source.poshflix.me/movies/black_widow_4k/black_widow_4k.vtt" srcLang="ko" label="Korean" default />
															</video>
														</ul>
													</div>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<h3 id="tv-show">TV 쇼</h3>
						{/* Disenchantment btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal5" src="assets/images/poster/disenchantment.jpg" alt="disenchantment" />
						</li>
						{/* Disenchantment modal */}
						<div id="myModal5" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/disenchantment-poster.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									에클 요청작 <br />
									<br />
									원제는 명사형인 Disenchantment(디스인챈트먼트)지만 국내명은 동사형인 '디스인챈트'로 정해졌다. 디스인첸트먼트라는 본작의 제목은 스토리 내적으로는 저주와 마법 풀기라는 주인공들의 과제를 가리키기도 하지만 이야기 밖에서는 이 작품이 판타지 세계의 신비함과 매지컬한 매력이 거세되고 환상이 풀려버린 시시껄렁함을 풍길 것이라 자조적인 태도로 시청자들에게 경고하는 중의적인 의도로 붙인 것인 모양.
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="E" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="E">디스인챈트 시즌1 파트1</label>
											<ul id="disenchantment-s1-p1" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="F" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="F">디스인챈트 시즌1 파트2</label>
											<ul id="disenchantment-s1-p2" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="M" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="M">디스인챈트 시즌2 파트3</label>
											<ul id="disenchantment-s2-p3" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* goblin btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal7" src="assets/images/poster/goblin.jpg" alt="disenchantment" />
						</li>
						{/* goblin modal */}
						<div id="myModal7" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/goblin-poster.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									라라 요청작 <br />
									<br />
									드라마 전체를 관통하는 메인 테마는 김신과 지은탁의 대화에서 나오는 슬픈 사랑이다. 극중에서 슬픈 사랑은 자기 자신, 부모와 자식, 주군과 충신, 연인, 친구 등 다양한 관계와 형태로 나타난다. 김신은 천 년이고 만 년이고 지속될 수 있는 슬픈 사랑의 매개체이자 주체이다. 전생에서 왕의 이복 형인 선왕, 왕의 신하로서의 상장군 김신, 왕비였으나 역적의 누이로 최후를 맞이한 여동생이 전하지 못했던 각각의 슬픈 사랑을 약 900년 동안 이어 현생에서 전하고 깨닫게 하는 역할로 매개체가 되며 현생과
									미래에서는 도깨비 신부와 함께 슬픈 사랑의 주체가 된다. 지은탁은 주로 슬픈 사랑을 받는 주체이다. 이때 특이한 점은 자신에게 사랑을 전하는 매개체가 대부분 신이라는 사실이다. 자신보다 자식을 살리고픈 엄마의 슬픈 사랑을 도깨비를 통해 받아 태어나게 되어 이후에도 삼신할매와 귀신들을 통해 어머니의 사랑을 받는다. 또한 도깨비 신부로서 도깨비의 슬픈 사랑을 저승사자와 창조신의 도움을 통해 받기도 한다. 도깨비와 함께 천 년이고 만 년이고 지속되는 슬픈 사랑을 시작하는 주체이다. 왕여와 김선은
									틀어진 전생과 바로잡는 현생 이후 환생으로 천 년에 걸친 기나긴 슬픈 사랑을 마무리 짓는 주체이며 각각 주군이자 친구, 누이로 도깨비의 슬픈 사랑을 함께 한다. 삼신할매 역시 자신이 하나하나 사랑으로 점지한 아이들을 괴롭히는 창조신에게 화를 내는 대목으로 슬픈 사랑을 표현한다. 이외에도 드라마에서는 슬픈 사랑을 죽은 고시원생 귀신이나 저승사자의 찻집 등 여러 방면을 통해 다룬다.
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="G" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="G">도깨비</label>
											<ul id="goblin" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="H" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="H">도깨비 스페셜</label>
											<ul id="goblin-sp" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* violet evergarden btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal9" src="assets/images/poster/violet.jpg" alt="disenchantment" />
						</li>
						{/* violet evergarden */}
						<div id="myModal9" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/violet-poster.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									라라 요청작 <br />
									<br />
									교토 애니메이션에서 개최한 제5회 교토 애니메이션 대상에서 처음으로 대상을 수상하였다. 심사가 까다롭기로 유명한 교토 애니메이션 대상에서 처음으로[1] 대상을 수상했다는 사실 때문에 일부 관심을 받기는 했지만, 본격적으로 그 이름을 알리게 된 것은 2016년에 한 홍보 영상이 등장한 이후였다. 해당 영상은 비록 짧은 홍보용 영상이기는 하지만 교토 애니메이션이라는 제작사의 명성에 걸맞게 상당히 화려한 화면으로 사람들의 시선을 사로잡으며 잠시 화제가 되었다. 2017년 6월 14일 애니메이션 방영 일시가
									공개되었을 때도 몇몇 사람들이 "아, 그 광고?"하고 반응했을 정도이다.
									<br />
									<br />
									14화는 스페셜입니다
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="I" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="I">바이올렛 에버가든</label>
											<ul id="violet" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* goddess btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal14" src="assets/images/poster/goddess.jpg" alt="disenchantment" />
						</li>
						{/* goddess */}
						<div id="myModal14" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/goddess-poster.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									드라마 <br />
									<br />
									못생겨서.. 일진들의 만두 셔틀을 해야 했고, 못생겨서.. 짝사랑하던 오빠에게도 비참하게 차였다. 홧김에 뛰어 올라간 건물 옥상에서 웬 검은 후드 아저씨(?)를 만나고 집으로 돌아온 주경. 그나저나 내일 학교 어떻게 가지? 지옥 같은 학교로 다시 돌아가고 싶지 않은데...! 그녀의 간절한 외침을 하늘에 계신 누군가가 들으신 게 분명하다. 사기를 당해 큰돈을 잃은 아빠 때문에 이사를 가야 한다고? 나.. 전학 가는 거야?
									<br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="J" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="J">여신강림</label>
											<ul id="goddess" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* penthouse btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal17" src="assets/images/poster/penthouse.jpg" alt="disenchantment" />
						</li>
						{/* penthouse */}
						<div id="myModal17" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/penthouse-poster.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									드라마 <br />
									<br />
									penthouse
									<br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="K" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="K">펜트하우스</label>
											<ul id="penthouse" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* rumors btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal18" src="assets/images/poster/rumors.jpg" alt="rumors" />
						</li>
						{/* rumors */}
						<div id="myModal18" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/rumors.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									드라마 <br />
									<br />
									경이로운 소문
									<br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="L" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="L">경이로운 소문</label>
											<ul id="rumors" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* sky btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal21" src="assets/images/poster/sky.jpg" alt="sky" />
						</li>
						{/* sky */}
						<div id="myModal21" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/sky.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									드라마 <br />
									<br />
									스카이 캐슬
									<br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="N" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="N">스카이 캐슬</label>
											<ul id="sky" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* sherlock btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal24" src="assets/images/poster/sherlock.jpg" alt="sherlock" />
						</li>
						{/* sherlock model */}
						<div id="myModal24" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/sherlock.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									드라마 <br />
									<br />
									셜록
									<br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="P" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="P">셜록 시즌1</label>
											<ul id="sherlock" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="Q" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="Q">셜록 시즌2</label>
											<ul id="sherlock2" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="R" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="R">셜록 시즌3</label>
											<ul id="sherlock3" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="S" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="S">셜록 시즌4</label>
											<ul id="sherlock4" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* titan btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal25" src="assets/images/poster/titan.jpg" alt="titan" />
						</li>
						{/* titan model */}
						<div id="myModal25" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/titan.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
									드라마 <br />
									<br />
									진격의 거인
									<br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="T" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="T">진격의 거인 1기</label>
											<ul id="titan" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="U" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="U">진격의 거인 2기</label>
											<ul id="titan2" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="V" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="V">진격의 거인 3기</label>
											<ul id="titan3" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="W" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="W">진격의 거인 4기</label>
											<ul id="titan4" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* mando btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal26" src="assets/images/poster/mando-poster.jpg" alt="mando" />
						</li>
						{/* mando modal */}
						<div id="myModal26" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/mando-poster.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="X" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="X">만달로리안 시즌1</label>
											<ul id="mando-s1" onclick="cbclick(event)" />
										</div>
										<div className="item">
											<input type="checkbox" id="Y" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="Y">만달로리안 시즌2</label>
											<ul id="mando-s2" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* myhero btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal28" src="assets/images/poster/myhero.jpg" alt="mando" />
						</li>
						{/* myhero modal */}
						<div id="myModal28" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/myhero-poster.jpg" alt="" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="AA" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="AA">나의 히어로 아카데미아</label>
											<ul id="myhero" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* jujutsu-kaisen btn */}
						<li className="myBtn">
							<img className="modal-button movie-con-img" href="#myModal30" src="assets/images/poster/jujutsu-kaisen.jpg" alt="jujutsu-kaisen" />
						</li>
						{/* jujutsu-kaisen modal */}
						<div id="myModal30" className="modal">
							<div className="modal-content">
								<span className="close">×</span>
								<img className="movie-img" src="assets/images/poster/jujutsu-kaisen.jpg" alt="jujutsu-kaisen" />
								<p>
									오늘 한국에서 콘텐츠 순위 10위 <br />
									<br />
								</p>
								<br />
								<br />
								<div className="nav">
									<div className="multi-level">
										<div className="item">
											<input type="checkbox" id="AC" />
											<img src="assets/images/Arrow.png" className="arrow" />
											<label htmlFor="AC">jujutsu-kaisen</label>
											<ul id="jujutsu-kaisen" onclick="cbclick(event)" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</ul>
				</div>
			</main>
		</>
	);
}
