import React, { useCallback, useRef, useState } from "react";
import Main from "../Main";
import EditForm from "./components/EditForm";
import List from "./components/List";
import "./form.scss";

function ReqForm() {
    const [data, setData] = useState();
    const dataId = useRef(0);
    const onCreate = useCallback((title, content, user, genre) => {
        const createdDate = new Date().getTime();
        const newItem = {
            title,
            content,
            user,
            genre,
            createdDate,
            id: dataId.current,
        };
        dataId.current += 1;
        setData([newItem, ...data]);
    }, []);
    return (
        <Main>
            <EditForm onCreate={onCreate} />
            <List formList={data} />
        </Main>
    );
}

export default ReqForm;
