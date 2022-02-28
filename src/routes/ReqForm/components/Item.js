import React from "react";

function Item({ genre, title, createdDate, user, doneStatus }) {
    return (
        <tr>
            <td>{genre}</td>
            <td>{title}</td>
            <td>{new Date(createdDate).toLocaleDateString()}</td>
            <td>{user}</td>
            <td>{doneStatus}</td>
        </tr>
    );
}

export default Item;
