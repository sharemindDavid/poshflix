import React, { useContext, useRef, useState } from "react";
import { DiaryStateContext } from "..";

function EditForm({ onCreate }) {
    const formList = useContext(DiaryStateContext);

    const titleInput = useRef();
    const contentInput = useRef();
    const nameInput = useRef();

    const [state, setState] = useState({
        title: "",
        content: "",
        user: "",
        genre: "movie",
        doneStatus: "pending",
    });

    const [isCreate, setIsCreate] = useState(false);
    const toggleForm = () => setIsCreate(!isCreate);

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = () => {
        if (state.title.length < 1) {
            titleInput.current.focus();
            return;
        }
        if (state.content.length < 5) {
            contentInput.current.focus();
            return;
        }
        if (state.user.length < 5) {
            nameInput.current.focus();
            return;
        }
        onCreate(
            state.title,
            state.content,
            state.user,
            state.genre,
            state.doneStatus
        );
        setState({
            title: "",
            content: "",
            user: "",
            genre: "",
            doneStatus: "",
        });
    };

    return (
        <div className="EditForm">
            <h3>영화 요청 게시판</h3>
            <p className="list-count" style={{ marginBottom: "20px" }}>
                총 건수 : {formList.length}
            </p>
            <div className="select text-right">
                <button className="button button_requ" onClick={toggleForm}>
	    {isCreate ? "cancel" : "영화 요청"}
                </button>
            </div>

            {isCreate ? (
                <div className="form-container" id="form-container">
                    <h3 style={{ marginBottom: "20px" }}>영화 요청</h3>
                    <div className="movie-form">
                        <div>
                            <span>재목</span>
                            <input
                                ref={titleInput}
                                type="text"
                                id="title"
                                name="title"
                                value={state.title}
                                placeholder="영화 재목..."
                                onChange={handleChangeState}
                            />

                            <span>기타 내용</span>
                            <input
                                ref={contentInput}
                                type="text"
                                id="content"
                                name="content"
                                value={state.content}
                                placeholder="내용..."
                                onChange={handleChangeState}
                            />

                            <span>이름</span>
                            <input
                                ref={nameInput}
                                type="text"
                                id="user"
                                name="user"
                                value={state.user}
                                placeholder="이름..."
                                onChange={handleChangeState}
                            />

                            <span>장르</span>
                            <select
                                id="genre"
                                name="genre"
                                value={state.genre}
                                onChange={handleChangeState}
                            >
                                <option value="movie">영화</option>
                                <option value="tv_show">드라마</option>
                                <option value="other">기타</option>
                            </select>

                            <button onClick={handleSubmit}>submit</button>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
}

export default EditForm;
