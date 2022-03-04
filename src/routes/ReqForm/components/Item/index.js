// import React, { useContext, useRef, useState } from "react";
// import { DiaryDispatchContext } from "../..";
// import { Tr, Td } from "./Item.styled";

// function Item({ genre, title, createdDate, user, id }) {
//     const { onRemove, onEdit } = useContext(DiaryDispatchContext);

//     const [isEdit, setIsEdit] = useState(false);
//     const toggleIsEdit = () => setIsEdit(!isEdit);

//     const [localContent, setLocalContent] = useState(title);

//     const localContentInput = useRef();

//     const handleRemove = () => {
//         if (window.confirm(`${id}번째를 정말 삭제하시겠습니까?`)) {
//             onRemove(id);
//         }
//     };

//     const handleQuitEdit = () => {
//         setIsEdit(false);
//         setLocalContent(title);
//     };

//     const handleEdit = () => {
//         if (localContent.length < 5) {
//             localContentInput.current.focus();
//             return;
//         }
//         if (window.confirm(`${id}번째를 수정하시겠습니까? `)) {
//             onEdit(id, localContent);
//             toggleIsEdit();
//         }
//     };
//     return (
//         <Tr>
//             <Td>{genre}</Td>
//             <Td>
//                 {isEdit ? (
//                     <textarea
//                         ref={localContentInput}
//                         value={localContent}
//                         onChange={(e) => setLocalContent(e.target.value)}
//                     />
//                 ) : (
//                     { title }
//                 )}
//             </Td>
//             <Td>{new Date(createdDate).toLocaleDateString()}</Td>
//             <Td>{user}</Td>
//             <Td>
//                 {isEdit ? (
//                     <>
//                         <button onClick={handleQuitEdit}>수정 취소</button>
//                         <button onClick={handleEdit}>수정 완료</button>
//                     </>
//                 ) : (
//                     <>
//                         <button onClick={handleRemove}>삭제하기</button>
//                         <button onClick={toggleIsEdit}>수정하기</button>
//                     </>
//                 )}
//             </Td>
//         </Tr>
//     );
// }

// export default Item;

import React from "react";
import { Tr, Td } from "./Item.styled";

function Item({ genre, title, createdDate, user, doneStatus }) {
    return (
        <Tr>
            <Td>{genre}</Td>
            <Td>{title}</Td>
            <Td>{new Date(createdDate).toLocaleDateString()}</Td>
            <Td>{user}</Td>
            <Td>{doneStatus}</Td>
        </Tr>
    );
}

export default Item;
