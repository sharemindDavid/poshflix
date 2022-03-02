import React, { useCallback, useReducer, useRef, useState } from "react";
import Main from "../../components/Main";
import EditForm from "./components/EditForm";
import List from "./components/List";
import "./form.scss";

const reducer = (state, action) => {
    switch (action.type) {
        case "INIT": {
            return action.date;
        }
        case "CREATE": {
            const createdDate = new Date().getTime();
            const newItem = {
                ...action.date,
                createdDate,
            };
            return [newItem, ...state];
        }
        case "REMOVE": {
            return state.filter((it) => it.id !== action.targetId);
        }
        case "EDIT": {
            return state.map((it) =>
                it.id === action.targetId
                    ? { ...it, content: action.newContent }
                    : it
            );
        }
        default:
            return state;
    }
};

export const DiaryStateContext = React.createContext();

export const DiaryDispatchContext = React.createContext();

function ReqForm() {
    const [data, dispatch] = useReducer(reducer, []);

    const dataId = useRef(0);

    const onCreate = useCallback((title, content, user, genre) => {
        dispatch({
            type: "CREATE",
            date: {
                title,
                content,
                user,
                genre,
                id: dataId.current,
            },
        });

        dataId.current += 1;
    }, []);

    return (
        <DiaryStateContext.Provider value={data}>
            <Main>
                <EditForm onCreate={onCreate} />
                <List formList={data} />
            </Main>
        </DiaryStateContext.Provider>
    );
}

export default ReqForm;
