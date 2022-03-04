import React, {
    useCallback,
    useEffect,
    useMemo,
    useReducer,
    useRef,
} from "react";
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

    // const getData = async () => {
    //     const res = await fetch(
    //         "https://jsonplaceholder.typicode.com/comments"
    //     ).then((res) => res.json());

    //     const initData = res.slice(0, 20).map((it) => ({
    //         user: it.email,
    //         content: it.body,
    //         created_date: new Date().getTime(),
    //         id: dataId.current++,
    //     }));

    //     dispatch({ type: "INIT", date: initData });
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

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

    const onRemove = useCallback((targetId) => {
        dispatch({ type: "REMOVE", targetId });
    }, []);

    const onEdit = useCallback((targetId, newContent) => {
        dispatch({ type: "EDIT", targetId, newContent });
    }, []);

    const memoizedDispatches = useMemo(
        () => ({ onCreate, onRemove, onEdit }),
        []
    );

    return (
        <DiaryStateContext.Provider value={data}>
            <DiaryDispatchContext.Provider value={memoizedDispatches}>
                <Main>
                    <EditForm />
                    <List />
                </Main>
            </DiaryDispatchContext.Provider>
        </DiaryStateContext.Provider>
    );
}

export default ReqForm;
